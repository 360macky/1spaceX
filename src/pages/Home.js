import React from 'react';

function isEmptyObject(object) {
    for (var key in object) {
        if (object.hasOwnProperty(key)) return false;
    }
    return true;
}

function ResultRow(props) {
    return (
        <tbody>
            <tr>
                <td>{props.capsule_id}</td>
                <td>{props.details}</td>
                <td>{props.landings}</td>
                <td>{props.status}</td>
                <td>{props.type}</td>
            </tr>
        </tbody>
    );
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            capsulesFounded: {},
            isLoadingData: false
        };
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            isLoadingData: true
        });

        const Spacex_API = 'https://api.spacexdata.com/v3/capsules';

        fetch(Spacex_API)
            .then(response => response.json())
            .then(data => {
                let details = null;
                const capsules_founded = data.filter(capsule => {
                    details = capsule.details;
                    if (details !== null) {
                        if (
                            details.search(this.state.search) !== -1 ||
                            details.search(this.state.search.toLowerCase()) !==
                                -1 ||
                            details.search(this.state.search.toUpperCase()) !==
                                -1
                        ) {
                            return details;
                        }
                    }
                    return false;
                });
                this.setState({
                    capsulesFounded: capsules_founded
                });
            });
    };

    render() {
        let results = null;
        if (!isEmptyObject(this.state.capsulesFounded)) {
            results = this.state.capsulesFounded.map((capsule, index) => (
                <ResultRow
                    key={index}
                    capsule_id={capsule.capsule_id}
                    details={capsule.details}
                    landings={capsule.landings}
                    status={capsule.status}
                    type={capsule.type}
                />
            ));
        }
        return (
            <div className="cover vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="container">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="search"
                                            value={this.state.search}
                                            onChange={this.handleChange}
                                            className="form-control bg-transparent text-light mt-5"
                                            autoComplete="off"
                                            spellCheck="false"
                                            placeholder="Por ejemplo: CRS1"
                                            autoFocus
                                        />
                                        <button
                                            className="btn btn-light btn-lg mt-3"
                                            type="submit"
                                        >
                                            Buscar cápsula
                                        </button>
                                    </div>
                                </form>
                                    <table className="table table-bordered bg-white shadow-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    ID de cápsula
                                                </th>
                                                <th scope="col">Detalles</th>
                                                <th scope="col">Aterrizajes</th>
                                                <th scope="col">Estado</th>
                                                <th scope="col">Tipo</th>
                                            </tr>
                                        </thead>
                                        {results}
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-light m-4">
                    <p>
                        Un problema bastante frecuente es que se te haya perdido
                        alguna cápsula de SpaceX.
                        <br />
                        Don't worry. We have a SpaceX Capsules Search for you{' '}
                        <span>❤</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;

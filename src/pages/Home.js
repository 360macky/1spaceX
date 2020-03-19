import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocket } from '@fortawesome/free-solid-svg-icons';
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
            <div>
                <div className="text-center m-4">
                    <h1 className="display-4">Cápsulas de SpaceX</h1>
                    <p>
                        Un problema bastante frecuente es que se te haya perdido
                        alguna cápsula de SpaceX.
                        <br />
                        Don't worry. We have a SpaceX Capsules Search for you{' '}
                        <span>❤</span>
                    </p>
                </div>
                <div className="m-4">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="search"
                                value={this.state.search}
                                onChange={this.handleChange}
                                className="form-control w-75 m-auto"
                                autoComplete="off"
                                spellCheck="false"
                                autoFocus
                            />
                            <div className="d-flex justify-content-center m-2">
                                <button
                                    className="btn btn-dark btn-lg"
                                    type="submit"
                                >
                                    Buscar cápsula
                                </button>
                            </div>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">ID de cápsula</th>
                                        <th scope="col">Detalles</th>
                                        <th scope="col">Aterrizajes</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Tipo</th>
                                    </tr>
                                </thead>
                                {results}
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;

import React from 'react';

function isEmptyObject(object) {
    for (var key in object) {
        if (object.hasOwnProperty(key)) return false;
    }
    return true;
}

function MainThead(props) {
    if (props.results) {
        return (
            <thead style={{ backgroundColor: 'black' }}>
                <tr className="text-white">
                    <th scope="col" style={{ width: '20%' }}>
                        Capsule ID
                    </th>
                    <th scope="col" style={{ width: '40%' }}>
                        Details
                    </th>
                    <th scope="col" style={{ width: '10%' }}>
                        Landings
                    </th>
                    <th scope="col" style={{ width: '10%' }}>
                        State
                    </th>
                    <th scope="col" style={{ width: '30%' }}>
                        Type
                    </th>
                </tr>
            </thead>
        );
    } else {
        return null;
    }
}

function ResultRow(props) {
    return (
        <tbody>
            <tr className="text-white bg-transparent">
                <td className="text-uppercase">{props.capsule_id}</td>
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
            isLoadingData: false,
            searchButton: 'Search Capsule'
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

        this.setState({
            searchButton: 'Loading...'
        });

        const Spacex_API = 'https://api.spacexdata.com/v3/capsules';

        fetch(Spacex_API)
            .then(response => response.json())
            .then(data => {
                let details = null;
                const capsules_founded = data.filter(capsule => {
                    details = capsule.details;
                    if (details !== null) {
                        let searchRegexp = new RegExp(this.state.search, 'i');

                        if (details.search(searchRegexp) !== -1) {
                            return details;
                        }
                    }
                    this.setState({
                        searchButton: 'Search Capsule'
                    });
                    return false;
                });
                this.setState({
                    searchButton: 'Search Capsule'
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
                                    <div className="form-group d-flex flex-column justify-content-center align-items-center">
                                        <input
                                            type="text"
                                            name="search"
                                            value={this.state.search}
                                            onChange={this.handleChange}
                                            className="form-control bg-transparent text-light mt-5 w-50 font-custom"
                                            style={{ fontSize: '1.3rem' }}
                                            autoComplete="off"
                                            spellCheck="false"
                                            placeholder="For example: CRS1"
                                            autoFocus
                                        />
                                        <button
                                            className="btn btn-light btn-lg mt-3 font-custom shadow-lg"
                                            type="submit"
                                            disabled={
                                                this.state.search ? false : true
                                            }
                                        >
                                        {this.state.searchButton}
                                        </button>
                                    </div>
                                </form>
                                <table className="table table-bordered shadow-sm">
                                    <MainThead results={results} />
                                    {results}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="text-center text-light mt-5 w-100 text-center font-custom font-weight-light"
                    style={{ position: 'absolute', marginBottom: '0px' }}
                >
                    <p>
                    A fairly frequent problem is that you have missed a SpaceX capsule.
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

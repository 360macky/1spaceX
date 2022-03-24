import React from 'react';
import isEmptyObject from '../../utils/isEmptyObject';

function MainTheadLaunches(props) {
  if (props.results) {
    return (
      <thead style={{ backgroundColor: 'black' }}>
        <tr className="text-white">
          <th scope="col" style={{ width: '30%' }}>
            Name
          </th>
          <th scope="col" style={{ width: '50%' }}>
            Details
          </th>
          <th scope="col" style={{ width: '10%' }}>
            Success
          </th>
          <th scope="col" style={{ width: '10%' }}>
            Upcoming
          </th>
        </tr>
      </thead>
    );
  } else {
    return null;
  }
}

function LaunchResult(props) {
  return (
    <tbody>
      <tr className="text-white bg-black">
        <td>{props.name}</td>
        <td><i>{props.details}</i></td>
        <td>{props.success ? <span>Yes</span> : <span>No</span> }</td>
        <td>{props.upcoming ? <span>Yes</span> : <span>No</span> }</td>
      </tr>
    </tbody>
  );
}

class Launches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      capsulesFounded: {},
      isLoadingData: null,
    };
    this.getLaunches();
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
      isLoadingData: true,
    });

    this.getLaunches();
  };

  getLaunches(){
    fetch('https://api.spacexdata.com/v4/launches')
      .then((response) => response.json())
      .then((data) => {
        if (this.state.search.length < 0) {
          this.setState({
            isLoadingData: false,
            capsulesFounded: data,
          });
        }
        let details = null;
        let launchesFound = data.filter((capsule) => {
          details = capsule.details;
          if (details !== null) {
            let searchRegexp = new RegExp(this.state.search, 'i');

            if (details.search(searchRegexp) !== -1) {
              return details;
            }
          }
          return false;
        });

        this.setState({
          isLoadingData: false,
          capsulesFounded: launchesFound,
        });
      });
  }

  render() {
    let results = null;
    if (!isEmptyObject(this.state.capsulesFounded)) {
      results = this.state.capsulesFounded.map((launch, index) => (
        <LaunchResult
          key={index}
          name={launch.name}
          details={launch.details}
          success={launch.success}
          upcoming={launch.upcoming}
        />
      ));
    }
    return (
      <div className="min-vh-100">
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
                      className="form-control bg-transparent text-light mt-5 w-75 font-custom"
                      style={{ fontSize: '1.3rem' }}
                      autoComplete="off"
                      spellCheck="false"
                      placeholder="Search for launches with instant search"
                      autoFocus
                    />
                    <button
                      className="btn btn-dark btn-lg mt-3 font-custom shadow-lg"
                      type="submit"
                      disabled={this.state.search ? false : true}
                    >
                      {this.state.isLoadingData === true ? (
                        <span>Loading...</span>
                      ) : (
                        <span>Search launch</span>
                      )}
                    </button>
                  </div>
                </form>
                <table className="table table-responsive table-bordered shadow-sm">
                  <MainTheadLaunches results={results} />
                  {results}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Launches;

import React from 'react';

import MainThead from '../home/MainThead';
import ResultRow from '../home/ResultRow';

import { isEmptyObject } from '../../utils';

class Capsules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      capsulesFounded: {},
      isLoadingData: null,
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      isLoadingData: true,
    });

    const SPACEX_API__CAPSULES = 'https://api.spacexdata.com/v3/capsules';

    fetch(SPACEX_API__CAPSULES)
      .then((response) => response.json())
      .then((data) => {
        let details = null;
        const capsules_founded = data.filter((capsule) => {
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
          capsulesFounded: capsules_founded,
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
                      disabled={this.state.search ? false : true}
                    >
                      {this.state.isLoadingData === true ? (
                        <span>Loading...</span>
                      ) : (
                        <span>Search capsule</span>
                      )}
                    </button>
                  </div>
                </form>
                <table className="table table-responsive table-bordered shadow-sm">
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
            Don't worry. We have a SpaceX Capsules Search for you <span>❤</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Capsules;

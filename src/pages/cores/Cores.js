import React from 'react';
import { isEmptyObject } from '../../utils';

class Cores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      coresFounded: {},
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

    const SPACEX_API__CORES = 'https://api.spacexdata.com/v4/cores';

    fetch(SPACEX_API__CORES)
      .then((response) => response.json())
      .then((data) => {
        let lastUpdate = null;
        const coresFounded = data.filter((core) => {
          lastUpdate = core.last_update;
          if (lastUpdate !== null) {
            let searchRegExp = new RegExp(this.state.search, 'i');

            if (lastUpdate.search(searchRegExp) !== -1) {
              return lastUpdate;
            }
          }
          return false;
        });

        this.setState({
          isLoadingData: false,
          coresFounded: coresFounded,
        });
      });
  };

  render() {
    let results = null;
    if (!isEmptyObject(this.state.coresFounded)) {
      results = this.state.coresFounded.map((core, index) => (
        <div
          key={index}
          className="card capsule-card bg-transparent border border-white text-white shadow m-3"
        >
          <div className="card-body">
            <h5 className="card-title capsule-title">{core.serial}</h5>
            <p>{core.last_update}</p>
          </div>
          <ul className="list-group list-group-flush text-white">
            <li className="list-group-item capsule-card__item border border-white">
              Status: <b>{core.status.toUpperCase()}</b>
            </li>
          </ul>
          <ul className="list-group list-group-flush text-white">
            <li className="list-group-item capsule-card__item border border-white">
              Reuse count: <b>{core.reuse_count}</b>
            </li>
          </ul>
          <div className="card-footer">
            <p>{core.id.toUpperCase()}</p>
          </div>
        </div>
      ));
    }
    return (
      <div className="cover min-vh-100">
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
                      placeholder="For example: EXPENDED"
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
                        <span>Search core</span>
                      )}
                    </button>
                  </div>
                </form>
                <div className="d-flex flex-wrap justify-content-center align-items-start m-3">
                  {results}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cores;

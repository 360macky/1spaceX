import React from 'react';
import isEmptyObject from '../../utils/isEmptyObject';
import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';

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
      <SearchContainer onSubmit={this.handleSubmit}>
        <SearchInput value={this.state.search} onChange={this.handleChange} />
        <SearchButton
          isLoadingData={this.state.isLoadingData}
          lookingFor="core"
        />
        <ResultsContainer>{results}</ResultsContainer>
      </SearchContainer>
    );
  }
}

export default Cores;

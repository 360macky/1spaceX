import React from 'react';
import isEmptyObject from '../../utils/isEmptyObject';
import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';
import CoreResult from './CoreResult';

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
        <CoreResult
          key={index}
          id={core.id}
          serial={core.serial}
          lastUpdate={core.last_update}
          status={core.status}
          reuseCount={core.reuse_count}
        />
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

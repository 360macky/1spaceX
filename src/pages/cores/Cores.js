import React from 'react';
import isEmptyObject from '../../utils/isEmptyObject';
import getResults from '../../utils/getResults';
import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';
import CoreResult from './CoreResult';
import { SPACEX_API__CORES } from '../../api';

class Cores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      coresFounded: {},
      isLoadingData: null,
    };
    this.getCores();
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

    this.getCores();
  };

  getCores() {
    fetch(SPACEX_API__CORES)
      .then((response) => response.json())
      .then((data) => {
        if (this.state.search.length < 0) {
          this.setState({
            isLoadingData: false,
            coresFounded: data,
          });
        }
        const coresFounded = data.filter((core) =>
          getResults(core, 'last_update', this.state.search)
        );
        this.setState({
          isLoadingData: false,
          coresFounded,
        });
      });
  }

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
        <div className="search-container">
          <SearchInput value={this.state.search} onChange={this.handleChange} />
          <SearchButton
            isLoadingData={this.state.isLoadingData}
            lookingFor="core"
          />
        </div>
        <ResultsContainer>{results}</ResultsContainer>
      </SearchContainer>
    );
  }
}

export default Cores;

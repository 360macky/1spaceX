import React from 'react';
import isEmptyObject from '../../utils/isEmptyObject';
import getResults from '../../utils/getResults';
import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';
import LaunchResult from './LaunchResult';
import { SPACEX_API__LAUNCHES } from '../../api';

class Launches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      launchesFounded: {},
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
    fetch(SPACEX_API__LAUNCHES)
      .then((response) => response.json())
      .then((data) => {
        if (this.state.search.length < 0) {
          this.setState({
            isLoadingData: false,
            launchesFounded: data,
          });
        }
        const launchesFounded = data.filter((launch) =>
          getResults(launch, 'details', this.state.search)
        );
        this.setState({
          isLoadingData: false,
          launchesFounded,
        });
      });
  }

  render() {
    let results = null;
    if (!isEmptyObject(this.state.launchesFounded)) {
      results = this.state.launchesFounded.map((launch, index) => (
        <LaunchResult
          key={index}
          name={launch.name}
          details={launch.details}
          rocket={launch.rocket}
          success={launch.success}
        />
      ));
    }
    return (
      <SearchContainer onSubmit={this.handleSubmit}>
        <SearchInput value={this.state.search} onChange={this.handleChange} />
        <SearchButton
          isLoadingData={this.state.isLoadingData}
          lookingFor="launches"
        />
        <ResultsContainer>{results}</ResultsContainer>
      </SearchContainer>
    );
  }
}

export default Launches;

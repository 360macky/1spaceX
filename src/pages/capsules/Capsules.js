import React from 'react';

import isEmptyObject from '../../utils/isEmptyObject';
import getResults from '../../utils/getResults';
import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';
import CapsuleResult from './CapsuleResult';
import { SPACEX_API__CAPSULES } from '../../api';

class Capsules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      capsulesFounded: {},
      isLoadingData: null,
    };
    this.getCapsules();
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

    this.getCapsules();
  };

  getCapsules(){
    fetch(SPACEX_API__CAPSULES)
      .then((response) => response.json())
      .then((data) => {
        if (this.state.search.length < 0) {
          this.setState({
            isLoadingData: false,
            capsulesFounded: data,
          });
        }
        const capsulesFounded = data.filter((capsule) =>
          getResults(capsule, 'details', this.state.search)
        );
        this.setState({
          isLoadingData: false,
          capsulesFounded,
        });
      });
  }

  render() {
    let results = null;
    if (!isEmptyObject(this.state.capsulesFounded)) {
      results = this.state.capsulesFounded.map((capsule, index) => (
        <CapsuleResult
          key={index}
          id={capsule.capsule_id}
          lastUpdate={capsule.details}
          serial={capsule.capsule_serial}
          status={capsule.status}
          type={capsule.type}
          reuseCount={capsule.reuseCount}
        />
      ));
    }
    return (
      <SearchContainer onSubmit={this.handleSubmit}>
        <SearchInput value={this.state.search} onChange={this.handleChange} />
        <SearchButton
          isLoadingData={this.state.isLoadingData}
          lookingFor="capsule"
        />
        <ResultsContainer>{results}</ResultsContainer>
      </SearchContainer>
    );
  }
}

export default Capsules;

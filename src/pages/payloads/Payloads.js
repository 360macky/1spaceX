import React from 'react';
import isEmptyObject from '../../utils/isEmptyObject';
import getResults from '../../utils/getResults';
import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';
import PayloadResult from './PayloadResult';
import { SPACEX_API__PAYLOADS } from '../../api';

class Payloads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      payloadsFounded: {},
      isLoadingData: null,
    };
    this.getPayloads();
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

    this.getPayloads();
  };

  getPayloads() {
    fetch(SPACEX_API__PAYLOADS)
      .then((response) => response.json())
      .then((data) => {
        if (this.state.search.length < 0) {
          this.setState({
            isLoadingData: false,
            payloadsFounded: data,
          });
        }
        const payloadsFounded = data.filter((payload) =>
          getResults(payload, 'name', this.state.search)
        );
        this.setState({
          isLoadingData: false,
          payloadsFounded,
        });
      });
  }

  render() {
    let results = null;
    if (!isEmptyObject(this.state.payloadsFounded)) {
      results = this.state.payloadsFounded.map((payload, index) => (
        <PayloadResult
          key={index}
          name={payload.name}
          orbit={payload.orbit}
          regime={payload.regime}
          id={payload.id}
        />
      ));
    }
    return (
      <SearchContainer onSubmit={this.handleSubmit}>
        <SearchInput value={this.state.search} onChange={this.handleChange} />
        <SearchButton
          isLoadingData={this.state.isLoadingData}
          lookingFor="payloads"
        />
        <ResultsContainer>{results}</ResultsContainer>
      </SearchContainer>
    );
  }
}

export default Payloads;

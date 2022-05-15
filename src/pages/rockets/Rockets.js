import React from 'react';
import isEmptyObject from '../../utils/isEmptyObject';
import getResults from '../../utils/getResults';
import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';
import RocketResult from './RocketResult';
import { SPACEX_API__ROCKETS } from '../../api';

class Rockets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      rocketsFounded: {},
      isLoadingData: null,
    };
    this.getRockets();
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

    this.getRockets();
  };

  getRockets() {
    fetch(SPACEX_API__ROCKETS)
      .then((response) => response.json())
      .then((data) => {
        if (this.state.search.length < 0) {
          this.setState({
            isLoadingData: false,
            rocketsFounded: data,
          });
        }
        const rocketsFounded = data.filter((rocket) =>
          getResults(rocket, 'description', this.state.search)
        );
        this.setState({
          isLoadingData: false,
          rocketsFounded,
        });
      });
  }

  render() {
    let results = null;
    if (!isEmptyObject(this.state.rocketsFounded)) {
      results = this.state.rocketsFounded.map((rocket, index) => (
        <RocketResult
          key={index}
          id={rocket.id}
          name={rocket.name}
          type={rocket.type}
          active={rocket.active}
          description={rocket.description}
        />
      ));
    }
    return (
      <SearchContainer onSubmit={this.handleSubmit}>
        <SearchInput value={this.state.search} onChange={this.handleChange} />
        <SearchButton
          isLoadingData={this.state.isLoadingData}
          lookingFor="rockets"
        />
        <ResultsContainer>{results}</ResultsContainer>
      </SearchContainer>
    );
  }
}

export default Rockets;

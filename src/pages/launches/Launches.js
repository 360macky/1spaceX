import React, { useState, useEffect } from 'react';

import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';
import LaunchResult from './LaunchResult';
import { SPACEX_API__LAUNCHES } from '../../api';

const Launches = () => {
  const [search, setSearch] = useState('');
  const [launchesFounded, setLaunchesFounded] = useState([]);
  const [launchesFiltered, setLaunchesFiltered] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const getData = async () => {
    const response = await fetch(SPACEX_API__LAUNCHES);
    const data = await response.json();
    setLaunchesFounded(data);
    setLaunchesFiltered(data);
  };

  const updateData = async () => {
    const filteredData = launchesFounded.filter((launch) => {
      if (launch.details !== null) {
        return launch.details.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    });

    setLaunchesFiltered(filteredData);
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoadingData(true);
    await updateData();
    setIsLoadingData(false);
  };
  return (
    <SearchContainer onSubmit={handleSubmit}>
      <div className="search-container">
        <SearchInput value={search} onChange={handleChange} />
        <SearchButton isLoadingData={isLoadingData} />
      </div>
      <ResultsContainer>
        {launchesFiltered.map((launch, index) => (
          <LaunchResult
            key={index}
            name={launch.name}
            details={launch.details}
            rocket={launch.rocket}
            success={launch.success}
          />
        ))}
      </ResultsContainer>
    </SearchContainer>
  );
};

export default Launches;

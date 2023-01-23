import React, { useState, useEffect } from 'react';

import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';
import LaunchResult from './LaunchResult';
import { SPACEX_API__LAUNCHES } from '../../api';
import useComponentData from '../../hooks/useComponentData';

const Launches = () => {
  const [search, setSearch] = useState('');
  const launchesFounded = useComponentData({
    item: 'launches',
    api: SPACEX_API__LAUNCHES,
  });
  const [launchesFiltered, setLaunchesFiltered] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
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
    if (launchesFounded) {
      setLaunchesFiltered(launchesFounded);
    }
    return () => {};
  }, [launchesFounded]);

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

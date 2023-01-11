import React, { useState, useEffect } from 'react';

import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';
import RocketResult from './RocketResult';
import { SPACEX_API__ROCKETS } from '../../api';

const Rockets = () => {
  const [search, setSearch] = useState('');
  const [rocketsFounded, setRocketsFounded] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const updateData = async () => {
    const response = await fetch(SPACEX_API__ROCKETS);
    const data = await response.json();
    const filteredData = data.filter((rocket) => {
      if (rocket.name !== null) {
        return rocket.description.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    });

    setRocketsFounded(filteredData);
  };

  useEffect(() => {
    updateData();
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
        {rocketsFounded.map((rocket, index) => (
          <RocketResult
            key={index}
            id={rocket.id}
            name={rocket.name}
            type={rocket.type}
            active={rocket.active}
            description={rocket.description}
          />
        ))}
      </ResultsContainer>
    </SearchContainer>
  );
};

export default Rockets;

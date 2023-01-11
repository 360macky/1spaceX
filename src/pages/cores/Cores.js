import React, { useState, useEffect } from 'react';

import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';
import CoreResult from './CoreResult';
import { SPACEX_API__CORES } from '../../api';

const Cores = () => {
  const [search, setSearch] = useState('');
  const [coresFounded, setCoresFounded] = useState([]);
  const [coresFiltered, setCoresFiltered] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const getData = async () => {
    const response = await fetch(SPACEX_API__CORES);
    const data = await response.json();
    setCoresFounded(data);
    setCoresFiltered(data);
  };

  const updateData = async () => {
    const filteredData = coresFounded.filter((core) => {
      if (core.last_update !== null) {
        return core.last_update.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    });

    setCoresFiltered(filteredData);
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
        {coresFiltered.map((core, index) => (
          <CoreResult
            key={index}
            id={core.id}
            serial={core.serial}
            lastUpdate={core.last_update}
            status={core.status}
            reuseCount={core.reuse_count}
          />
        ))}
      </ResultsContainer>
    </SearchContainer>
  );
};

export default Cores;

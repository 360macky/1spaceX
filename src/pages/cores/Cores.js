import React, { useState, useEffect } from 'react';

import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';
import CoreResult from './CoreResult';
import { SPACEX_API__CORES } from '../../api';
import useComponentData from '../../hooks/useComponentData';

const Cores = () => {
  const [search, setSearch] = useState('');
  const coresFounded = useComponentData({
    item: 'cores',
    api: SPACEX_API__CORES,
  });
  const [coresFiltered, setCoresFiltered] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
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
    if (coresFounded) {
      setCoresFiltered(coresFounded);
    }
    return () => {};
  }, [coresFounded]);

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

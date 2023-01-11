import React, { useState, useEffect } from 'react';

import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';
import CapsuleResult from './CapsuleResult';
import { SPACEX_API__CAPSULES } from '../../api';

const Capsules = () => {
  const [search, setSearch] = useState('');
  const [capsulesFounded, setCapsulesFounded] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const updateData = async () => {
    const response = await fetch(SPACEX_API__CAPSULES);
    const data = await response.json();
    const filteredData = data.filter((capsule) => {
      if (capsule.details !== null) {
        return capsule.details.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    });

    setCapsulesFounded(filteredData);
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
        {capsulesFounded.map((capsule, index) => (
          <CapsuleResult
            key={index}
            id={capsule.capsule_id}
            lastUpdate={capsule.details}
            serial={capsule.capsule_serial}
            status={capsule.status}
            type={capsule.type}
            reuseCount={capsule.reuseCount}
          />
        ))}
      </ResultsContainer>
    </SearchContainer>
  );
};

export default Capsules;

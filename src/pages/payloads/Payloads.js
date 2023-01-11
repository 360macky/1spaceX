import React, { useState, useEffect } from 'react';

import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';
import PayloadResult from './PayloadResult';
import { SPACEX_API__PAYLOADS } from '../../api';

const Payloads = () => {
  const [search, setSearch] = useState('');
  const [payloadsFounded, setPayloadsFounded] = useState([]);
  const [payloadsFiltered, setPayloadsFiltered] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const getData = async () => {
    const response = await fetch(SPACEX_API__PAYLOADS);
    const data = await response.json();
    setPayloadsFounded(data);
    setPayloadsFiltered(data);
  };

  const updateData = async () => {
    const filteredData = payloadsFounded.filter((payload) => {
      if (payload.name !== null) {
        return payload.name.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    });

    setPayloadsFiltered(filteredData);
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
        {payloadsFiltered.map((payload, index) => (
          <PayloadResult
            key={index}
            name={payload.name}
            orbit={payload.orbit}
            regime={payload.regime}
            id={payload.id}
          />
        ))}
      </ResultsContainer>
    </SearchContainer>
  );
};

export default Payloads;

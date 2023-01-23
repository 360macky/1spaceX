import React, { useState, useEffect } from 'react';

import {
  ResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from '../../components/Search';
import PayloadResult from './PayloadResult';
import { SPACEX_API__PAYLOADS } from '../../api';
import useComponentData from '../../hooks/useComponentData';

const Payloads = () => {
  const [search, setSearch] = useState('');
  const payloadsFounded = useComponentData({
    item: 'payloads',
    api: SPACEX_API__PAYLOADS,
  });
  const [payloadsFiltered, setPayloadsFiltered] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
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
    if (payloadsFounded) {
      setPayloadsFiltered(payloadsFounded);
    }
    return () => {};
  }, [payloadsFounded]);

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

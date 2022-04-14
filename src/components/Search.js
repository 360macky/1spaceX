import React from 'react';

export const SearchContainer = ({ children, onSubmit }) => {
  return (
    <div className="cover min-vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="container">
              <form onSubmit={onSubmit}>
                <div className="form-group d-flex flex-column justify-content-center align-items-center">
                  {children}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ResultsContainer = ({ children }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-start m-3">
      {children}
    </div>
  );
};

export const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="search"
      value={value}
      onChange={onChange}
      className="form-control bg-transparent text-light mt-5 w-50 font-custom"
      style={{ fontSize: '1.3rem', padding: '1rem 1.5rem', borderRadius: '2rem' }}
      autoComplete="off"
      spellCheck="false"
      placeholder="For example: EXPENDED"
      autoFocus
    />
  );
};

export const SearchButton = ({ isLoadingData, lookingFor }) => {
  return (
    <button
      className="btn btn-light btn-lg mt-3 font-custom shadow-lg"
      type="submit"
    >
      {isLoadingData === true ? (
        <span>Loading...</span>
      ) : (
        <span>Search {lookingFor}</span>
      )}
    </button>
  );
};

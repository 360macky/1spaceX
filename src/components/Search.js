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
    <>
      <label htmlFor="search_input" className="custom-label-search mt-5">
        Search term
      </label>
      <input
        id="search_input"
        type="text"
        name="search"
        value={value}
        onChange={onChange}
        className="custom-search form-control bg-transparent text-light w-50 font-custom"
        autoComplete="off"
        spellCheck="false"
        placeholder="For example: EXPENDED"
        autoFocus
      />
    </>
  );
};

export const SearchButton = ({ isLoadingData }) => {
  return (
    <button
      className="custom-button-search btn btn-light btn-lg font-custom shadow-lg"
      type="submit"
    >
      {isLoadingData === true ? (
        <span>Loading...</span>
      ) : (
        <span>Search</span>
      )}
    </button>
  );
};

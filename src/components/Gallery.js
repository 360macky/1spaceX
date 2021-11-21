import React from 'react';

export const GalleryCard = ({ title, description, image }) => {
  return (
    <div className="card bg-dark text-white rounded">
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title font-custom">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">Lorem ipsum</small>
        </p>
      </div>
    </div>
  );
};

export const GalleryContainer = ({ children }) => {
  return (
    <div className="container my-3">
      <div className="card-columns">{children}</div>
    </div>
  );
};

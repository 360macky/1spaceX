import React from 'react';

const LaunchResult = ({ rocket, success, name, details }) => {
  return (
    <div className="card capsule-card bg-transparent border border-white text-white shadow m-3">
      <div className="card-body">
        <h5 className="card-title capsule-title">{name}</h5>
        <p>{details}</p>
      </div>
      <ul className="list-group list-group-flush text-white">
        <li className="list-group-item capsule-card__item border border-white text-white">
          Success: <b>{success.toString().toUpperCase()}</b>
        </li>
      </ul>
      <div className="card-footer">
        <p>Rocket: {rocket.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default LaunchResult;

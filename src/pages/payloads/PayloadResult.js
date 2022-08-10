import React from 'react';

const PayloadResult = ({ name, orbit, id, regime }) => {
  return (
    <div className="card capsule-card bg-transparent border border-white text-white shadow m-3">
      <div className="card-body">
        <h5 className="card-title capsule-title">{name}</h5>
        <p>Orbit: {orbit}</p>
      </div>
      <ul className="list-group list-group-flush text-white">
        <li className="list-group-item capsule-card__item border border-white text-white">
          Regime: <b>{regime}</b>
        </li>
      </ul>
      <div className="card-footer">
        <p>ID: {id}</p>
      </div>
    </div>
  );
};

export default PayloadResult;

import React from 'react';

const CoreResult = ({ id, lastUpdate, serial, status, type, reuseCount }) => {
  return (
    <div className="card capsule-card bg-transparent border border-white text-white shadow m-3">
      <div className="card-body">
        <h5 className="card-title capsule-title">{serial}</h5>
        <p>{lastUpdate}</p>
      </div>
      <ul className="list-group list-group-flush text-white">
        <li className="list-group-item capsule-card__item border border-white text-white">
          Status: <b>{status.toUpperCase()}</b>
        </li>
      </ul>
      <ul className="list-group list-group-flush text-white">
        <li className="list-group-item capsule-card__item border border-white text-white">
          Type: <b>{type.toUpperCase()}</b>
        </li>
      </ul>
      <ul className="list-group list-group-flush text-white">
        <li className="list-group-item capsule-card__item border border-white text-white">
          Reuse count: <b>{reuseCount}</b>
        </li>
      </ul>
      <div className="card-footer">
        <p>{id.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default CoreResult;

import React from 'react';

const CoreResult = ({
  key,
  id,
  serial,
  lastUpdate,
  status,
  reuseCount,
}) => {
  return (
    <div
      key={key}
      className="card capsule-card bg-transparent border border-white text-white shadow m-3"
    >
      <div className="card-body">
        <h5 className="card-title capsule-title">{serial}</h5>
        <p>{lastUpdate}</p>
      </div>
      <ul className="list-group list-group-flush text-white">
        <li className="list-group-item capsule-card__item border border-white">
          Status: <b>{status.toUpperCase()}</b>
        </li>
      </ul>
      <ul className="list-group list-group-flush text-white">
        <li className="list-group-item capsule-card__item border border-white">
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

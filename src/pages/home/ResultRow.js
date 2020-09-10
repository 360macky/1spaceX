import React from 'react';

function ResultRow(props) {
  return (
    <tbody>
      <tr className="text-white bg-transparent">
        <td className="text-uppercase">{props.capsule_id}</td>
        <td>{props.details}</td>
        <td>{props.landings}</td>
        <td>{props.status}</td>
        <td>{props.type}</td>
      </tr>
    </tbody>
  );
}

export default ResultRow;

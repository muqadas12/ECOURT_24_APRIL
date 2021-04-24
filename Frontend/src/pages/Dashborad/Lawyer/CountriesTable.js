import React, { memo } from "react";

const renderRow = (data = null, index = 1) => {
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{data.name}</td>
      <td>
        <img alt={data.name + " Flag"} src={data.flag} width={50} height={30} />
      </td>
      <td>{data.PartyName}</td>
      <td>{data.LawyerName}</td>
     
    </tr>
  );
};

const CountriesTable = ({ data = [] } = {}) => {
  if (data.length === 0) {
    return null;
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Flag</th>
          <th scope="col">Code</th>
          <th scope="col">Capital</th>
          <th scope="col">Region</th>
          <th scope="col">Sub-Region</th>
          <th scope="col">Population</th>
        </tr>
      </thead>
    </table>
  );
};

export default memo(CountriesTable);
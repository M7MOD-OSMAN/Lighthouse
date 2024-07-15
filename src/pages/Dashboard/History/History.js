import React from "react";
import "./History.css";
const History = () => {
  return (
    <div>
      <div className="row">
        <h2>History</h2>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead className="thead">
            <tr className="mb-2">
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Points</th>
              <th scope="col">Events</th>
            </tr>
          </thead>
          <tbody>
            <tr className="mb-2">
              <th scope="row">Ayman Mahdy</th>
              <td>30/06/2020</td>
              <td>+300</td>
              <td>Jewelery Workshop</td>
            </tr>
            <tr className="mb-2">
              <th scope="row">Khaled Magdy</th>
              <td>30/06/2020</td>
              <td>-300</td>
              <td>@Purchase</td>
            </tr>
            <tr className="mb-2">
              <th scope="row">Esraa Fathy</th>
              <td>30/06/2020</td>
              <td>-500</td>
              <td>Music Class</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;

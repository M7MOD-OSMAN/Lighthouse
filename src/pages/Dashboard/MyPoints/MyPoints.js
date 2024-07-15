import React from "react";

const MyPoints = () => {
  return (
    <div className="container">
      <div className="row">
        <h2>My Points</h2>
      </div>
      <div className="row mb-4 py-2 ">
        <div className="col-12">
          <div className="row">
            <div className="col-2">
              <input
                className="fs-4 form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
            <div className="col-5">Member name</div>
            <div className="col-5">Member points</div>
          </div>
        </div>
      </div>
      <div className="row mb-4 py-2 ">
        <div className="col-12">
          <div className="row">
            <div className="col-2">
              <input
                className="fs-4 form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
            <div className="col-5">Mohamed Fathy</div>
            <div className="col-5">150,000</div>
          </div>
        </div>
      </div>
      <div className="row mb-4 py-2 ">
        <div className="col-12">
          <div className="row">
            <div className="col-2">
              <input
                className="fs-4 form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
            <div className="col-5">Amaal Elgebaly</div>
            <div className="col-5">500,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPoints;

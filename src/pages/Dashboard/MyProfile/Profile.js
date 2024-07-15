import React from "react";

const Profile = () => {
  return (
    <div className="profile">
      <div className="row mb-3 ">
        <h2>My Profile</h2>
      </div>
      <div className="row mb-3 ">
        <div className="col-12 border rounded mb-3 py-2">
          <p>First Name</p>
          <h4>Aymann</h4>
        </div>
        <div className="col-12 border rounded mb-3 py-2">
          <p>Last Name</p>
          <h4>Ahmed</h4>
        </div>
        <div className="col-12 border rounded mb-3 py-2">
          <p>Phone Number</p>
          <h4>01017495055</h4>
        </div>
        <div className="col-12 border rounded mb-3 py-2">
          <p>Email</p>
          <h4>email@yahoo.com</h4>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";

const UserStatus = ({ loggedIn, admin }) => {
  {
    if (loggedIn && admin) {
      return <h1>Welcome, Admin!</h1>;
    } 
    else if (loggedIn && !admin) {
      return <h1>Welcome, User!</h1>;
    }
     else {
      return <h1>Please log in first .</h1>;
    }
  }
};

export default UserStatus;

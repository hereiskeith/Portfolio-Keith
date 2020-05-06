import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Profile = (props) => {
  return (
    <div className="profile">
      <h2 className="name">Keith Li</h2>
      <h4 className="title">Front-End Developer</h4>
      <h5 className="email">
        <MailOutlineIcon className="emailIcon" />: keithli9395@gmail.com
      </h5>
    </div>
  );
};

export default Profile;

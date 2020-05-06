import React from "react";
import Keith from "../static/avatar.jpg";

const MyAvatar = (props) => {
  return (
    <div className="avatarWrapper">
      <img alt="keith-avatar" className="avatar" src={Keith} />
    </div>
  );
};

export default MyAvatar;

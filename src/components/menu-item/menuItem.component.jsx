import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import "./menuItem.style.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, match }) => {
  console.log(match);
  const history = useHistory();
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

import React, { useState } from "react";
import MenuItem from "../menu-item/menuItem.component";
import "./directory.style.scss";

const Directory = () => {
  const [sections, setSections] = useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      linkUrl: "hats",
      id: 1,
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      linkUrl: "",
      id: 2,
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      linkUrl: "",
      id: 3,
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      linkUrl: "",
      size: "large",
      id: 4,
    },
    {
      title: "mens",
      imageUrl:
        "https://post.healthline.com/wp-content/uploads/2019/09/man-city-urban-walking-serious-732x549-thumbnail.jpg",
      linkUrl: "",
      size: "large",
      id: 5,
    },
  ]);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </div>
  );
};

export default Directory;

import React from "react";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory-selector";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menuItem.component";
import "./directory.style.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);

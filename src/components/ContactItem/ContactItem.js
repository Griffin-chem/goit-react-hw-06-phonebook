import React from "react";
import { connect } from "react-redux";

import { ItemCSS } from "./styledContactItem";

const ContactItem = ({ name, number, removeContact }) => {
  return (
    <ItemCSS>
      {name}: {number}
      <button
        onClick={(e) => {
        }}
      >
        Delete
      </button>
    </ItemCSS>
  );
};

const mapStateToProps = (state) => ({
  state,
});


export default connect(mapStateToProps)(ContactItem);

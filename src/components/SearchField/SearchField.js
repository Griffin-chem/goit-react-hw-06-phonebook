import React from "react";
import { connect } from "react-redux";

import types from "../../reducer/types";

import { SearchCSS, LabelCSS } from "./styledSearch";

const SearchField = ({ filter, changeFilter }) => (
  <>
    <LabelCSS htmlFor="search_input">Find contacts by name</LabelCSS>
    <SearchCSS
      id="search_input"
      name="filter"
      type="text"
      value={filter}
      onChange={(e) => changeFilter(e.target.value)}
    ></SearchCSS>
  </>
);

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (text) => {
    console.log("Filtered!");
    dispatch({
      type: types.changeFilter,
      value: text,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);

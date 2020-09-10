import React from 'react';

import { 
  SearchCSS,
  LabelCSS
 } from './styledSearch';

const SearchField = ({filter, onChange}) => (
  <>
  <LabelCSS htmlFor="search_input">Find contacts by name</LabelCSS>
  <SearchCSS id="search_input" name="filter" type="text" value={filter} onChange={onChange}></SearchCSS>
  </>
);

export {SearchField};
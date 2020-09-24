import React from "react";

import { ItemCSS } from "./styledContactItem";

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <ItemCSS>
      {name}: {number}
      <button onClick={onDelete}>Delete</button>
    </ItemCSS>
  );
};

export { ContactItem };

import React from 'react';
import * as styled from "./FilterSelect.styles.js";

const FilterSelect = (props) => {
  function onFilterValueChanged(event) {
    props.filterValueSelected(event.target.value);
  }

  return (
    <div>
      <styled.Select name="on_sale" onChange={onFilterValueChanged}>
        <option value="all">All</option>
        <option value="onSale">On Sale</option>
        <option value="fullPrice">Full price</option>
      </styled.Select>
    </div>
  );
};

export default FilterSelect;

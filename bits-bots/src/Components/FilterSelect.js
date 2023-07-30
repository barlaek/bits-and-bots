import React from "react";

const FilterSelect = (props) => {
    function onFilterValueChanged(event) {
        props.filterValueSelected(event.target.value);
    }

    return (
        <div>
            <select name="on_sale" onChange={onFilterValueChanged}>
                <option value="all">All</option>
                <option value="onSale">On Sale</option>
                <option value="fullPrice">Full price</option>
            </select>
        </div>
    )
}

export default FilterSelect;
import React from "react";

const FilterSelect = (props) => {
    function onFilterValueChanged(event) {
        props.filterValueSelected(event.target.value);
    }

    return (
        <div>
            <select name="onSale" onChange={onFilterValueChanged}>
                <option value="all">All</option>
                <option value={true}>On Sale</option>
                <option value={false}>Full price</option>
            </select>
        </div>
    )
}

export default FilterSelect;
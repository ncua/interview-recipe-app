import React from 'react';
import PropTypes from 'prop-types';

const RECIPE_ATTR = [
    'title',
    'calories',
    'sodium',
    'protein',
    'fat'
];

const SortOrder = props => {
    const { active, onChange} = props;

    return (
        <div className="sort-order">
            <label className="sort-order__label">Sort by:</label>
            <select className="sort-order__select" onChange={onChange}>
                {
                    RECIPE_ATTR.map(attr => <option value={attr} selected={attr===active}>{attr}</option>)
                }
            </select>
        </div>
    );
}

SortOrder.propTypes = {
    active: PropTypes.oneOf(RECIPE_ATTR)
}

export default SortOrder;
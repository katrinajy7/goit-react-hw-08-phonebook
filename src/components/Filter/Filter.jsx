import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, setFilter }) => {
    const handleFilterChange = e => setFilter(e.target.value);

    return (
        <div className={css.divFilter}>
            <p>Find Contacts by Name</p>
            <input
                type="text"
                name="filter"
                placeholder="Search by name"
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    );
};

Filter.prototype = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};
import React from 'react';
import PropTypes from 'prop-types';

function TableHeader({ onSort, sortBySize }) {
    return (
        <div className="table-header">
            <div className="column-medium">
                <button onClick={() => onSort()}>
                    Name
                </button>
            </div>
            <div className="column-small align-right">
                <button onClick={() => sortBySize()}>
                    Size
                </button>
            </div>
            <div className="column-small align-right">Open issues</div>
            <div className="column-small align-right">Watchers</div>
        </div>
    );
}

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    sortBySize: PropTypes.func.isRequired,
};

export default TableHeader;

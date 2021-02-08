import React from 'react';

function TableHeader() {
    return (
        <div className="table-header">
            <div className="column-medium">Name</div>
            <div className="column-small align-right">Size</div>
            <div className="column-small align-right">Open issues</div>
            <div className="column-small align-right">Watchers</div>
        </div>
    );
}

export default TableHeader;

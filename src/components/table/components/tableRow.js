import React from 'react';
import repositoryTableDataShape from '../../../constants/shapes/repositoryTableData';

function TableRow({ data }) {
    return (
        <div className="table-row">
            <a href={data.url}>
                <div className="column-medium">{data.name}</div>
                <div className="column-small align-right">{data.size}</div>
                <div className="column-small align-right">{data.open_issues}</div>
                <div className="column-small align-right">{data.watchers}</div>
            </a>
        </div>
    );
}

TableRow.propTypes = {
    data: repositoryTableDataShape.isRequired,
};

export default TableRow;

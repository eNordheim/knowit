import React from 'react';
import PropTypes from 'prop-types';
import uniqueid from 'uniqid';
import TableHeader from './components/tableHeader';
import TableRow from './components/tableRow';
import repositoryTableDataShape from '../../constants/shapes/repositoryTableData';
import './table.scss';

function Table({ items }) {
    const tableRows = items.map(item => <TableRow data={item} key={uniqueid('table-row')} />);

    return (
        <div className="table">
            <TableHeader />
            <div className="table-body">
                {tableRows}
            </div>
        </div>
    );
}

Table.propTypes = {
    items: PropTypes.arrayOf(repositoryTableDataShape).isRequired,
};

export default Table;

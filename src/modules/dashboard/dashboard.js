/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Spinner from '../../components/spinner/spinner';
import Table from '../../components/table/table';
import { fetchRepositoryRequest } from '../../redux/actions/repositoryActions';
import './dashboard.scss';
import repositoryTableDataShape from '../../constants/shapes/repositoryTableData';
import ErrorPopUp from '../../components/errorPopUp/errorPopUp';
import RepositoryTableMapper from '../../utils/repositoryTableMapper';


function Dashboard({ isFetching, items: rawItems, errorMessage }) {
    const dispatch = useDispatch();
    const [paging, setPaging] = useState(0);
    const [items, setItems] = useState(RepositoryTableMapper(rawItems));

    // useEffect(() => {
    //     if (rawItems.length === 0 && !isFetching) {
    //         dispatch(fetchRepositoryRequest());
    //     }
    // }, [rawItems]);

    const increment = () => setPaging(paging + 1);

    const decrement = () => setPaging(paging - 1);

    const sortTableByName = () => {
        setItems(RepositoryTableMapper(rawItems.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)));
    };

    const sortTableBySize = () => {
        setItems(RepositoryTableMapper(rawItems.sort((a, b) => a.size > b.size ? 0 : b.size > a.size ? -1 : 1)));
    };

    if (errorMessage) {
        return (<ErrorPopUp message={errorMessage} />);
    }

    if (isFetching || items.length === 0) {
        return (<Spinner />);
    }

    const pagingCssClass = index => {
        if (paging - 1 === index || paging + 1 === index) { return ''; }
        if (paging === index) { return 'active'; }
        return 'hidden';
    };

    const pagingList = items.map((item, index) => (
        <button
            className={pagingCssClass(index)}
            onClick={() => setPaging(index)}
            key={`paging-number-${index}`}
        >
            {index + 1}
        </button>
    ));

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h1>Most popular JS repositories</h1>
                <div>
                    <Table items={items[paging]} onSort={() => sortTableByName()} sortBySize={() => sortTableBySize()} />
                    <div className="button-row">
                        <button onClick={() => decrement()} disabled={paging === 0}>prev</button>
                        {pagingList}
                        <button onClick={() => increment()} disabled={paging === items.length - 1}>next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Dashboard.propTypes = {
    isFetching: PropTypes.bool,
    items: PropTypes.arrayOf(repositoryTableDataShape),
    errorMessage: PropTypes.string,
};

Dashboard.defaultProps = {
    isFetching: true,
    items: [],
    errorMessage: '',
};

export default Dashboard;

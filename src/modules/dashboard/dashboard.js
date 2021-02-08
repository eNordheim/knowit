import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Table from '../../components/table/table';
import Spinner from '../../components/spinner/spinner';
import { fetchRepositoryRequest } from '../../redux/actions/repositoryActions';
import './dashboard.scss';
import repositoryTableDataShape from '../../constants/shapes/repositoryTableData';
import ErrorPopUp from '../../components/errorPopUp/errorPopUp';


function Dashboard({ isFetching, items, errorMessage }) {
    const dispatch = useDispatch();
    const [paging, setPaging] = useState(0);

    useEffect(() => {
        if (items.length === 0) {
            dispatch(fetchRepositoryRequest());
        }
    });

    const increment = () => setPaging(paging + 1);

    const decrement = () => setPaging(paging - 1);


    if (errorMessage) {
        return (<ErrorPopUp message={errorMessage} />);
    }

    if (isFetching || items.length === 0) {
        return (<Spinner />);
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h1>Most popular JS repositories</h1>
                <div>
                    <Table items={items[paging]} />

                    <div className="button-row">
                        <button onClick={() => decrement()} disabled={paging === 0}>prev</button>
                        <button onClick={() => increment()} disabled={paging === items.length - 1}>next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Dashboard.propTypes = {
    isFetching: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.arrayOf(repositoryTableDataShape)),
    errorMessage: PropTypes.string,
};

Dashboard.defaultProps = {
    isFetching: true,
    items: [],
    errorMessage: '',
};

export default Dashboard;

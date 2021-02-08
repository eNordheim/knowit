import React from 'react';
import { GridLoader } from 'react-spinners';
import './withSpinner.scss';


function WithSpinner() {
    return (
        <div className="spinner-container">
            <GridLoader />
        </div>
    );
}

export default WithSpinner;

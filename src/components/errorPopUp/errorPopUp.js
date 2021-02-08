import React from 'react';
import PropTypes from 'prop-types';
import './errorPopUp.scss';

function ErrorPopUp({ message }) {
    return (
        <div className="error-container">
            <div className="overlay" />
            <div className="error-pop-up">
                {message}
            </div>
        </div>
    );
}

ErrorPopUp.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorPopUp;

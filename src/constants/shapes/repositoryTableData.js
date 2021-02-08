import PropTypes from 'prop-types';

const repositoryTableDataShape = PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    open_issues: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    watchers: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});

export default repositoryTableDataShape;

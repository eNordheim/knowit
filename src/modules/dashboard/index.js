import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = ({ repository }) => ({
    isFetching: repository.isFetching,
    items: repository.pages,
});

export default connect(mapStateToProps)(Dashboard);

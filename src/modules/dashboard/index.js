import { connect } from 'react-redux';
import Dashboard from './dashboard';
import json from '../../assets/topRepositories';

const mapStateToProps = ({ repository }) => ({
    isFetching: repository.isFetching,
    items: json.items,
});

export default connect(mapStateToProps)(Dashboard);

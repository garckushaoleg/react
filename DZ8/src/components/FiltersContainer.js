import { connect } from 'react-redux';
import Filters from './Filters';
import { changeFilter } from '../store/filter/actions';

const mapStateToProps = state => ({
    filter: state.filter
});

const mapDispatchToProps = {
    changeFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

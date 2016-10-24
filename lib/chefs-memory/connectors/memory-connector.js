import { connect as connectRedux } from 'react-redux';
import { bindActionCreators } from 'redux';
import { unlockMatch } from '../actions/memory-actions';

/**
 * State mapper for react-redux connector
 * @param {Immutable} state
 * @returns {Immutable}
 */
function mapStateToProps (state) {
    return {
        memory: state.memory,
    };
}

/**
 * Dispatch mapper for react-redux connector
 * @param {Function} dispatch
 * @returns {Function}
 */
function mapDispatchToProps (dispatch) {
    return bindActionCreators({ unlockMatch }, dispatch);
}

/**
 * Connect a React Component to redux
 * @param {React.Component} component
 */
function connect (component) {
    return connectRedux(mapStateToProps, mapDispatchToProps)(component);
}

export default connect;

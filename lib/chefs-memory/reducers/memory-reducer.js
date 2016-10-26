import Immutable from 'immutable';
import ACTION_TYPES from '../config/memory-actions';
import defaultState from './memory-reducer.default-state';

/**
 * Memory game reducer
 * A reducer mutates the state based on a triggered action
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
function memoryReducer (state = Immutable.fromJS(defaultState), action) {
    switch (action.type) {

    case ACTION_TYPES.UNLOCK_MATCH:
        return unlockFaces(state, action);

    default:
        return state;
    }
}

/**
 * Mutate unlockedFaces on the state
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
function unlockFaces (state, action) {
    return state.update('unlockedFaces', faces =>
        faces.push(action.chefId)
    );
}

export default memoryReducer;

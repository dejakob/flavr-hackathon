import { combineReducers, createStore as createReduxStore } from 'redux';
import memoryReducer from '../../chefs-memory/reducers/memory-reducer';

/**
 * Create a store that can be used with Redux
 * Every React-Redux app, has one Redux store,
 *  containing one app state and reducer.
 * With combineReducers,
 *  you can put multiple reducers into one
 * @returns {Store}
 */
function createStore () {
    return createReduxStore(
    combineReducers({
        memory: memoryReducer,
    })
  );
}


export default createStore();

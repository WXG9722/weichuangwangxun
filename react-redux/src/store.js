import {createStore} from 'redux';
import reducer from './reducer.js'

const initialState = {
    count: 10,
    mark: 50
};

const store = createStore(reducer, initialState);

export default store
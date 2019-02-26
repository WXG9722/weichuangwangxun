import {combineReducers} from 'redux'

const count = (state = 0, action) => {
    switch(action.type){
        case 'ADD':
            return state + action.num;
        case 'MINUS':
            return state - action.num;
        default:
            return state;
    }
}
const mark = (state = 0, action) => {
    switch(action.type){
        case 'CET4':
            return state + action.num;
        default:
            return state;
    }
}

export default combineReducers({
    count,
    mark
})
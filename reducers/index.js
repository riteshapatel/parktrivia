import { combineReducers } from 'redux';
import ScoresReducer from './ScoresReducer';

const rootReducer = combineReducers({
    scores: ScoresReducer
});

export default rootReducer;
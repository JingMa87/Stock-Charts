import timeSeriesReducer from './timeSeriesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    data: timeSeriesReducer
});

export default rootReducer;
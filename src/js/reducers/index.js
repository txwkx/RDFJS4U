import { combineReducers } from 'redux';
import LibrariesReducer from './reducer_libraries';
import FeaturesReducer from './reducer_features';

const rootReducer = combineReducers({
  libraries: LibrariesReducer,
  features: FeaturesReducer
});

export default rootReducer;

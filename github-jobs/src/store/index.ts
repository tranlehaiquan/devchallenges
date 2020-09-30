import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import filters from './filters/reducer';

const rootReducer = combineReducers({
  filters,
});

export default () => createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof rootReducer>;
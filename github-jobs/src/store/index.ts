import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import filters from './filters/reducer';
import jobs from './jobs/reducer';

const rootReducer = combineReducers({
  filters,
  jobs,
});

export default () => createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof rootReducer>;

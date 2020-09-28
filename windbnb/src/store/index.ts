import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import stays from './stays/reducer';
import layout from './layout/reducer';

const rootReducer = combineReducers({
  stays,
  layout
});

export default () => createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof rootReducer>;
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import stays from './stays/reducer';

const rootReducer = combineReducers({
  stays,
});

export default () => createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof rootReducer>;
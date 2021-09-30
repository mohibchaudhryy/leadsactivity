import { combineReducers } from 'redux';

import signIn from './signin';
import lead from './lead';

export const reducers = combineReducers({ signIn, lead });

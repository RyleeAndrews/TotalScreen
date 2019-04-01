import {createStore, applyMiddleware} from 'redux';

import reducer from './combineReducer.js';
import reporter from './reporter.js';
import thunk from './thunk.js';

export default () => createStore(reducer, applyMiddleware(thunk,reporter));

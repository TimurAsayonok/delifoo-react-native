import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const allTabs = [
  (lastRoute) => lastRoute || {key:'home', index: 0},
  (lastRoute) => lastRoute || {key:'contacts', index: 1},
]

export const tabs = createReducer({index: 0, key:'home', routes: allTabs}, {
  [types.SET_TAB](state, action){
    console.log(allTabs[action.index]());
    return Object.assign({}, state, allTabs[action.index]())
  }
});

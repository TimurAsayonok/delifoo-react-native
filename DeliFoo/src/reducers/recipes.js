import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {

}

export const searchedRecipes = createReducer(state = initialState, {
  [types.FETCH_RECIPES_SUCCESS](state, action){
    state = action.payload;
    action.payload.forEach(function(element, i) {
      state[i].id = i + 1;
    });
    return {...state}
  }
});

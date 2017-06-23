import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {

}

export const searchedRecipes = createReducer(state = initialState, {
  [types.FETCH_RECIPES_SUCCESS](state, action){
    state = action.payload;
    return {...state}
  }
});

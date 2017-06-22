import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {

}

function recipesReducer(state = initialState, action){
  switch (action.type) {
    case types.FETCH_RECIPES_SUCCESS:
      console.log('FETCH_RECIPES_SUCCESS');
      break;
    default:

  }
  return state
}

export default recipesReducer;

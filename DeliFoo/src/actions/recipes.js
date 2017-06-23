import * as types from './types'
import Api from '../lib/api'

export function fetchRecipes(ingredients) {
  return (dispatch, getState) => {
    const params = [
      `i=${encodeURIComponent(ingredients)}`,
      'p=1'
    ].join('&')
    return Api.get(`/api/?${params}`).then(resp => {
      dispatch(fetchRecipesSuccess(resp));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

function fetchRecipesSuccess(recipes){
  return {
    type: types.FETCH_RECIPES_SUCCESS,
    payload: recipes
  }
}

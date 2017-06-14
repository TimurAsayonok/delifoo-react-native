import * as types from './types'
import Api from '../lib/api'

export function fetchRecipes(ingredients) {
  return (dispatch) => {
    const params = [
      `ingredients=${encodeURIComponent(ingredients)}`,
      'fillIngredients=false',
      'limitLicense=false',
      'number=20',
      'ranking=1'
    ].join('&');
    console.log(params);

    return Api.get(`/recipes/findByIngredients?${params}`).then(
      res => {
        console.log(res);
      }).catch((ex) => {
        console.log(ex);
      })
  }
}

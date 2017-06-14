import * as types from './types'
import Api from '../lib/api'

export function fetchRecipes(ingredients) {
  return (dispatch, getState) => {
    const params = [
      `i=${encodeURIComponent(ingredients)}`,
      'p=2'
    ].join('&')
    return Api.get(`/api/?${params}`).then(resp => {
      console.log(resp);
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

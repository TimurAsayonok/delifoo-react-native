class Api {
  static headers() {
    return {
      'Accept' : 'application/json',
      'Content-type' : 'application/json',
      'dataType' : 'json',
      'X-Requested-With' : 'XMLHttpRequest',
      'X-Mashape-Key' : 'gJUsbP6zFGmsh6OgUu4Swdr6H4Lvp1xJ8Ldjsns0FOkN4OP57g',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  static xhr(route, params, type) {
    const host = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com';
    const url = `${host}${route}`;

    let options = Object.assign({method: type}, params ? {body: JSON.stringify(params)} : null);
    options.headers = Api.headers();

    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then( err => {throw err});
    });
  }
}

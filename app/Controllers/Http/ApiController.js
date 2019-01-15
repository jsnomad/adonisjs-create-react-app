'use strict';

class ApiController {
  getCities() {
    return [
      { name: 'Paris', country: 'France' },
      { name: 'New York', country: 'USA' }
    ];
  }
}

module.exports = ApiController;

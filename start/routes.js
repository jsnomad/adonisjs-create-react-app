'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

const Helpers = use('Helpers');

Route.group(() => {
  Route.get('/', () => {
    return [
      { id: '1', url: 'asdf', title: 'tdsfdf' },
      { id: '2', url: 'asdf', title: 'tdsfdf' },
      { id: '3', url: 'asdf', title: 'tdsfdf' }
    ];
  });
}).prefix('api/v1');

Route.any('*', ({ response }) => {
  response.download(Helpers.publicPath('react/app.html'));
});

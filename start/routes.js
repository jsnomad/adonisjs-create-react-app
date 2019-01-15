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
  Route.get('/', 'ApiController.getCities');
}).prefix('api/v1');

Route.any('*', ({ response }) => {
  response.download(Helpers.publicPath('react/app.html'));
});

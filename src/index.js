const angular = require( 'angular' );

const usersModule = require( './app/users/index' );
const userInfo = require( './app/userInfo/index' );

require( 'angular-ui-router' );
const routesConfig = require( './routes' );

const main = require( './app/main' );
const header = require( './app/header' );
const title = require( './app/title' );
const footer = require( './app/footer' );

require( './index.styl' );

angular
  .module( 'app', [ usersModule, userInfo, 'ui.router' ] )
  .config( routesConfig )
  .component( 'usersList', main )
  .component( 'cabecera', header )
  .component( 'titulo', title )
  .component( 'pie', footer );

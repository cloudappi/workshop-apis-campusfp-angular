const angular = require( 'angular' );

const user = require( './userInfo' );

const userInfoModule = 'user';

module.exports = userInfoModule;

angular
  .module( userInfoModule, [] )
  .component( 'userInfo', user );

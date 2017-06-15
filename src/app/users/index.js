const angular = require( 'angular' );

const tech = require( './tech' );
const techs = require( './techs' );

const usersModule = 'users';

module.exports = usersModule;

angular
  .module( usersModule, [] )
  .component( 'user', tech )
  .component( 'users', techs );

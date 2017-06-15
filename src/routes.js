module.exports = routesConfig;

/** @ngInject */
function routesConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
  $locationProvider.html5Mode( true ).hashPrefix( '!' );
  $urlRouterProvider.otherwise( '/' );

  $stateProvider
    .state( 'usersList', {
      url: '/',
      component: 'usersList'
    } )
    .state( 'userInfo', {
      url: '/user/:id',
      component: 'userInfo'
    } );
}

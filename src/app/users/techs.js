module.exports = {
  template: require( './users.html' ),
  controller: TechsController
};

/** @ngInject */
function TechsController ( $http, $log, $location ) {
  const vm = this;
  const url = 'http://localhost:3000';
  vm.formIsVisible = false;
  vm.type = 0;
  vm.site_admin = false;

  // Get all users
  $http
    .get( `${url}/users` )
    .then( response => {
      $log.log( 'Datos:' );
      $log.log( response.data );
      vm.techs = response.data;
    } );

  // Muestra Oculta el formulario
  vm.showForm = function () {
    vm.formIsVisible = true;
  };

  // Crea usuario
  vm.createUser = function () {
    vm.formIsVisible = false;
    vm.type = parseInt( vm.type, 10 );
    // Usuario
    const user = {
      login: vm.nickname || 'No-NAME',
      avatar_url: vm.avatar || 'https://d30y9cdsu7xlg0.cloudfront.net/png/212110-200.png',
      type: vm.type === 0 ? 'User' : 'Organization',
      site_admin: vm.site_admin
    };

    $http
      .post( `${url}/users`, user )
      .then( response => {
        // Carga la pag del usuario creado
        $location.url( `/user/${response.data.id}` );
      } );
  };
}

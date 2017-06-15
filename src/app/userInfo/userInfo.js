module.exports = {
  template: require( './userInfo.html' ),
  controller: UserInfoController
};

/** @ngInject */
function UserInfoController ( $http, $log, $stateParams, $location ) {
  const vm = this;
  const id = $stateParams.id;
  vm.userInfo = {};
  vm.userInfo.stars = 0;
  const local = 'http://localhost:3000';
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue nulla sapien, in porttitor velit hendrerit eget. Curabitur in tincidunt erat. Morbi in fermentum augue. Nulla facilisi. Praesent at augue.';

  $http
    .get( `${local}/users/${id}` )
    .then( response => {
      $log.log( 'Bio: ' );
      $log.log( response.data.bio );
      $log.log( response );
      if ( angular.isUndefined( response.data.bio ) ) {
        response.data.bio = lorem;
      }
      // Math.random() returns a random number between 0 and 1 (including 0, excluding 1).
      // Multiply this number by the highest desired number (eg 10)
      // Round this number
      response.data.stars = Math.round( Math.random() * 5 );
      vm.userInfo = response.data;
    } );

  // Actualizar usuario
  vm.updateUser = function ( id ) {
    $http
      .put( `${local}/users/${id}`, vm.userInfo )
      .then( response => {
        $log.log( response );
        vm.userInfo = response.data;
        vm.showUpdateForm = false;
      } );
  };

  vm.getStars = function () {
    return new Array( vm.userInfo.stars );
  };

  // Delete user
  vm.deleteUser = function ( id ) {
    $http
      .delete( `${local}/users/${id}` )
      .then( response => {
        $log.log( response );
        // Vuelve a la pag principal
        $location.path( '/' );
      } );
  };

  // Show form
  vm.showUpdate = function () {
    vm.showUpdateForm = true;
  };
}

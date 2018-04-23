(() => {
  angular
  .module('Hoteleria')
  .controller('loginController', loginController);

  loginController.$inject =['$state','loginService'];

  function loginController($state, loginService){
    const vm = this;

    vm.credentials = {};
    vm.login = (credentials) => {
      let success = loginService.logIn(credentials);

      if (success == true) {
        $state.go('main');
      }else {
        swal({
            title: "Inicio de sesión fallido",
            text: "Los datos ingresados son incorrectos",
            icon: "error",
            button: "Aceptar",
        });
      }
    }
  }
})();
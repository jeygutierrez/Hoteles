(() => {
  angular
  .module('Hoteleria')
  .controller('landingPageController', landingPageController);

  landingPageController.$inject =['$state','hotelService','loginService'];

  function landingPageController($state, hotelService, loginService){
    const vm = this;
    
    vm.allHotels = hotelService.getHotel();

    console.log(vm.allHotels);

    // vm.type = "password";
    
    // vm.changeType = (checked)=>{
    //   if(checked == true){
    //     vm.type = "text";
    //   }else{
    //     vm.type = "password";
    //   }
    // }

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
(() => {
    'use strict';
    angular
        .module('Hoteleria')
        .directive('headlineDirective', headlineDirective);

    headlineDirective.$inject = ['$state', 'loginService'];

    function headlineDirective($state, loginService) {

        let navegacionPrincipalControlador = function () {
            let vm = this;
            let user = loginService.getAuthUser();
            vm.usuarioSesion = user.getFirstName();
            angular.element('#btnCerrarSesion').on('click', function () {
                swal("Desea cerrar la sesión?", {
                        buttons: {
                            cancel: "Cancelar",
                            cerrarSesion: {
                                text: "Cerrar sesión",
                                value: "cerrarSesion",
                            },
                        },
                    })
                    .then((value) => {
                        switch (value) {
                            case "cerrarSesion":
                                loginService.logOut();
                                $state.go('logIn');
                                swal({
                                    title: "Sesión cerrada correctamente",
                                    text: "Se ha finalizado su sesión correctamente",
                                    icon: "success",
                                    button: "Aceptar",
                                });
                                break;

                            default:
                                break;
                        }
                    })
            })
        };

        let navegacion = {
            templateUrl: '/components/directives/headline/headline.view.html',
            restrict: 'EA',
            require: "ngClick",
            controller: navegacionPrincipalControlador,
            controllerAs: 'vm'
        };
        return navegacion;
    };
})();
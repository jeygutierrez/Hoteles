(() => {
  'use strict';
  angular
    .module('Hoteleria')
    .directive('headerDirective', headerDirective);

  function headerDirective(){
    const navegacion = {
      templateUrl: '/components/directives/header/header.view.html',
      restrict: 'EA' //E = Etiqueta, A = Atributo, C = Comentario, M.
    };

    return navegacion;
  }
})();
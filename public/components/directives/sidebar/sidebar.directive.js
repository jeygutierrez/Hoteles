(() => {
    'use strict';
    angular
    .module('Hoteleria')
    .directive('sideMenu', sideMenu);
    
    function sideMenu(){
      let sidebar = {
        templateUrl: '/components/directives/sidebar/sidebar.view.html',
        restrict: 'EA'
      };
  
      return sidebar;
    }
  })();
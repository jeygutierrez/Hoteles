(() => {
  'use strict'
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);

  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {
    $stateProvider
      .state('landingPage', {
        url: '/',
        templateUrl: './components/landingPage/landingPage.view.html',
        data: {
          pageTitle: 'Hoteles'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/landingPage/landingPage.controller.js')
          }]
        },
        controller: 'landingPageController',
        controllerAs: 'vm'
      })
      
      .state('logIn', {
        url: '/logIn',
        templateUrl: './components/logIn/logIn.view.html',
        data: {
          pageTitle: 'Inicio de Sesión | Bungalow'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/logIn/logIn.controller.js')
          }]
        },
        controller: 'loginController',
        controllerAs: 'vm'
      })

      .state('main', {
        url: '/main',
        templateUrl: './components/main/main.view.html',
        data: {
          pageTitle: 'Main | Bungalow'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/main/main.controller.js')
          }]
        },
        controller: 'mainController',
        controllerAs: 'vm'
      })

      .state('main.userRegistration', {
        url: '/userRegistration',
        templateUrl: './components/users/register/userRegistration.view.html',
        data: {
          pageTitle: 'Registro de Usuarios | Bungalow'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/users/register/userRegistration.controller.js')
          }]
        },
        controller: 'userRegistrationController',
        controllerAs: 'vm'
      })

      .state('main.usersList', {
        url: '/usersList',
        templateUrl: './components/users/list/usersList.view.html',
        data: {
          pageTitle: 'Lista de Usuarios | Bungalow'
        },
        params: {
          objTempUser: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/users/list/usersList.controller.js')
          }]
        },
        controller: 'usersListController',
        controllerAs: 'vm'
      })

      .state('main.usersEdit', {
        url: '/usersEdit',
        templateUrl: './components/users/edit/usersEdit.view.html',
        data: {
          pageTitle: 'Editar Usuario | Bungalow'
        },
        params: {
          objTempUser: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/users/edit/usersEdit.controller.js')
          }]
        },
        controller: 'usersEditController',
        controllerAs: 'vm'
      })

      .state('main.hotelRegistration', {
        url: '/hotelRegistration',
        templateUrl: './components/hotels/register/hotelRegistration.view.html',
        data: {
          pageTitle: 'Registrar Hotel | Bungalow'
        },
        params: {
          objTempUser: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hotels/register/hotelRegistration.controller.js')
          }]
        },
        controller: 'hotelRegistrationController',
        controllerAs: 'vm'
      })

      .state('main.hotelsList', {
        url: '/hotelsList',
        templateUrl: './components/hotels/list/hotelsList.view.html',
        data: {
          pageTitle: 'Listar Hoteles | Bungalow'
        },
        params: {
          objTempUser: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hotels/list/hotelsList.controller.js')
          }]
        },
        controller: 'hotelsListController',
        controllerAs: 'vm'
      })

      .state('main.hotelsEdit', {
        url: '/hotelsEdit',
        templateUrl: './components/hotels/edit/hotelsEdit.view.html',
        data: {
          pageTitle: 'Editar Usuario | Bungalow'
        },
        params: {
          objTempUser: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hotels/edit/hotelsEdit.controller.js')
          }]
        },
        controller: 'hotelsEditController',
        controllerAs: 'vm'
      })

      


    $urlRouterProvider.otherwise('/');
  }
})();
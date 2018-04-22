(() => {
    'use strict'
    angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {
        $stateProvider
        .state('landingPage',{
            url: '/',
            templateUrl: './components/landingPage/landingPage.view.html',
            data: {
                pageTitle: 'Hoteles'
             }
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
            controller: 'logInController',
            controllerAs: 'vm'
          })

          .state('userRegistration', {
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
            }
            // controller: 'mainController',
            // controllerAs: 'vm'
          }),


        $urlRouterProvider.otherwise('/');
    }
})();
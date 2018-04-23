(() => {
  'use strict';
  angular
    .module('Hoteleria')
    .controller('usersEditController', usersEditController);

  // usersEditController.$inject = ['$http','$stateParams', '$state','userService', 'imageUpload', 'Upload', 'NgMap'];

  usersEditController.$inject = ['$http', '$stateParams', '$state', 'userService'];

  // function usersEditController($http, $stateParams, $state, userService, imageUpload, Upload, NgMap)

  function usersEditController($http, $stateParams, $state, userService) {

    let vm = this;

    vm.newUserData = {};

    let userParams = JSON.parse($stateParams.objTempUser);
    let selectedUser = Object.assign(new Client(), userParams);


    vm.newUserData.id = selectedUser.id;
    vm.newUserData.firstName = selectedUser.firstName;
    vm.newUserData.secondName = selectedUser.secondName;
    vm.newUserData.firstSurname = selectedUser.firstSurname;
    vm.newUserData.secondSurname = selectedUser.secondSurname;
    vm.newUserData.email = selectedUser.email;
    vm.newUserData.password = selectedUser.password;
    vm.newUserData.birthdate = new Date(selectedUser.birthdate);
    vm.newUserData.phone = selectedUser.phone;

    vm.updateUserData = (pupdateuser) => {
      pupdateuser.forEach(userEdited => {
        if (userEdited.id == selectedUser.id) {
          userEdited.firstName = pNewUserData.firstName;
          userEdited.secondName = pNewUserData.secondName;
          userEdited.firstSurname = pNewUserData.firstSurname;
          userEdited.secondSurname = pNewUserData.secondSurname;
          userEdited.email = pNewUserData.email;
          userEdited.password = pNewUserData.password;
          userEdited.birthdate = pNewUserData.birthdate;
          userEdited.phone = pNewUserData.phone;
          userService.updateUser(userEdited);
        }
      })
    };
  }
})();
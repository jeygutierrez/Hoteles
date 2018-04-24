(() => {
  'use strict';
  angular
    .module('Hoteleria')
    .service('loginService', loginService);

  loginService.$inject = ['userService', 'dataStorageFactory'];

  function loginService(userService, dataStorageFactory) {
    const loginAPI = {
      logIn: _logIn,
      logOut: _logOut,
      getAuthUser: _getAuthUser
    };
    return loginAPI;

    function _logIn(pcredentials) {
      let userList = userService.getUsers();
      let success = false;
      for (let i = 0; i < userList.length; i++) {
        if (userList[i].getEmail() == pcredentials.email && userList[i].getPassword() === pcredentials.password) {
          let credentialsCorrect = {
            id: userList[i].getId(),
            role: userList[i].getUserRole()
          }
          success = dataStorageFactory.setSession(credentialsCorrect);
        }
      }
      return success;
    }

      function _logOut() {
        let success = dataStorageFactory.closeSession();
        return success;
      }

    function _getAuthUser() {
        let activeSession = dataStorageFactory.getSession(),
            userData;

        if (!activeSession) {
            userData = undefined;
        } else {
            userData = getUserDataActive(activeSession.id);
        }
        return userData;
    }

    function getUserDataActive(pid) {
      let userList = userService.getUsers(),
          userData;

      for (let i = 0; i < userList.length; i++) {
          if (userList[i].getId() == pid) {
              userData = userList[i];
          }
      };
      return userData;
    }
  }
})();
(() => {
  'user strict'
  angular
  .module('Hoteleria')
  .service('userService', userService);

  userService.$inject = ['$http','$log']

  function userService(){
    const publicUsersAPI = {
      setUser : _setUser,
      getUsers : _getUser
    }
    return publicUsersAPI;

    function _setUser(userdata){
      console.log(userdata);
    }
    function _getUser(){

    }
  }
})();
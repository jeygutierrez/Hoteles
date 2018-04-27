(() => {
  'user strict'
  angular
  .module('Hoteleria')
  .service('userService', userService);

  userService.$inject = ['$http', '$log', 'dataStorageFactory']

  //TODO cambiar los nombres de la variables
  function userService($http, $log, dataStorageFactory){
    const publicUsersAPI = {
      setUser : _setUser,
      getUsers : _getUsers,
      updateUser : _updateUser
    }
    return publicUsersAPI;



    function _setUser(userdata){
      let userList = _getUsers(),
          repeat = false,
          success;

      for(let i = 0; i < userList.length; i++){
        if (userList[i].getId() === userdata.getId()){
          repeat = true;
        }
      }
      if(repeat == false){
        success = dataStorageFactory.setUserData(userdata);
      }else{
        success = false;
      }
      return success;
    }



    //TODO cambiar los nombres de la variables
    function _getUsers(){
      let userData = dataStorageFactory.getUserData(),
          userList = [];

      userData.forEach(obj =>{
        if(obj.userRole == "1"){
          let newAdmin = Object.assign(new Admin(), obj);
          userList.push(newAdmin)
        }else{
          let newClient = Object.assign(new Client(), obj);
          userList.push(newClient);
        }
      });
      return userList;
    }


    function _updateUser(userEdited){
      let success = false;
      success = dataStorageFactory.updateUser(userEdited);
      return success;
    }
  }
})();
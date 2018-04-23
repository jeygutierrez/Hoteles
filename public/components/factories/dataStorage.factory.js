(() => {
  'use strict';
  angular
  .module('Hoteleria')
  .factory('dataStorageFactory', dataStorageFactory);

  function dataStorageFactory(){
    const dataAPI = {
      setUserData: _setUserData,
      getUserData: _getUserData,
      updateUser: _updateUser,
      setSession: _setSession,
      closeSession: _closeSession,
      getSession: _getSession
    }
    return dataAPI;

    // Guardar en la base de datos
    function _setUserData(userData) {
      let response;

      let request = $.ajax({
          url: 'http://localhost:4000/api/save_user',
          type: 'post',
          contentType: 'application/x-www-form-urlencoded; charset=utf-8',
          dataType: 'json',
          async: false,
          data: {
            'id' : userData.id, 
            'firstName' : userData.firstName, 
            'secondName' : userData.secondName, 
            'firstSurname' : userData.firstSurname,  
            'secondSurname' : userData.secondSurname, 
            'email' : userData.email, 
            'password' : userData.password, 
            'userRole' : userData.userRole,
            'birthdate' : userData.birthdate,
            'phone' : userData.phone
          }
      });
      request.done((res) => {
          response = res.success;
          console.log('Petición realizada con éxito');
      });
      request.fail((error) => {
          response = error;
          console.log('Ocurrió un error');
      });

      return response;
  }

    function _getUserData(){
      let userList = [];
      let request = $.ajax({
        url:'http://localhost:4000/api/get_all_users',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        dataType: 'json',
        async: false,
        data: {}
      })
    request.done((userListDB) => {
      console.log('Datos que vienen de la BD');
      console.log(userListDB);
      userList = userListDB;
    });
    request.fail(() => {
      console.log('Ha ocurrido un error');
      userList = [];
    });
    return userList;
    }
    
    function _updateUser(userData) {
      let response;

      let request = $.ajax({
          url: 'http://localhost:4000/api/update_users',
          type: 'put',
          contentType: 'application/x-www-form-urlencoded; charset=utf-8',
          dataType: 'json',
          async: false,
          data: {
            'id' : userData.id, 
            'firstName' : userData.firstName, 
            'secondName' : userData.secondName, 
            'firstSurname' : userData.firstSurname,  
            'secondSurname' : userData.secondSurname, 
            'email' : userData.email, 
            'password' : userData.password, 
            'userRole' : userData.userRole,
            'birthdate' : userData.birthdate,
            'phone' : userData.phone
          }
      });
      request.done((res) => {
          response = res.success;
          console.log('Petición realizada con éxito');
      });
      request.fail((error) => {
          response = error;
          console.log('Ocurrió un error');
      });

      return response;
  }

  function _setSession(value){
    let response= true;
    sessionStorage.setItem('session', JSON.stringify(value));
    return response;
  };

  function _closeSession(){
    let response = true;
    sessionStorage = removeItem('session');
    return response;
  }

  function _getSession(){
    let sessionActive = JSON.parse(sessionStorage.getItem('session'));
    return sessionActive;
  }

  }
})();
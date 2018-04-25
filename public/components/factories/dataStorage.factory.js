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
      getSession: _getSession,
      getHotelData: _getHotelData,
      setHotelData: _setHotelData
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


  // Funciones de Hoteles
  function _setHotelData(hotelData) {
    let response;

    let request = $.ajax({
        url: 'http://localhost:4000/api/save_hotel',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'hotelName' : hotelData.hotelName,
          'photo': hotelData.photo, 
          'latitude' : hotelData.latitude, 
          'longitude' : hotelData.longitude,  
          'provincia' : JSON.stringify(hotelData.provincia), 
          'canton' : JSON.stringify(hotelData.canton), 
          'distrito' : JSON.stringify(hotelData.distrito), 
          'address' : hotelData.address,
          'phone' : hotelData.phone,
          'custServEmail' : hotelData.custServEmail,
          'reservEmail' : hotelData.reservEmail,
          'reservPhone' : hotelData.reservPhone
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


function _getHotelData(){
  let hotelsList = [];
  let request = $.ajax({
    url:'http://localhost:4000/api/get_all_hotels',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded;charset=utf-8',
    dataType: 'json',
    async: false,
    data: {}
  })
request.done((hotelsListDB) => {
  console.log('Datos que vienen de la BD');
  console.log(hotelsListDB);
  hotelsList = hotelsListDB;
});
request.fail(() => {
  console.log('Ha ocurrido un error');
  hotelsList = [];
});
return hotelsList;
}






  // Funciones de Sesion

  function _setSession(value){
    let response= true;
    sessionStorage.setItem('session', JSON.stringify(value));
    return response;
  };

  function _closeSession(){
    let response = true;
    sessionStorage.removeItem('session');
    return response;
  }

  function _getSession(){
    let sessionActive = JSON.parse(sessionStorage.getItem('session'));
    return sessionActive;
  }

  }
})();
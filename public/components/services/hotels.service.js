(() => {
  'use strict'
  angular
  .module('Hoteleria')
  .service('hotelService', hotelService);

  hotelService.$inject = ['$http', '$log', 'dataStorageFactory']

  function hotelService($http, $log, dataStorageFactory) {
      const publicUserAPI = {
          setHotel : _setHotel,
          getHotel : _getHotel
      }
      return publicUserAPI;

      function _setHotel(hotelData){
          let hotelList = _getHotel(),
              repeat = false,
              success;

          for (let i = 0; i < hotelList.length; i++) {
              if(hotelList[i].getId() === hotelData.getId()){
                  repeat = true;
              }
          }

          if(repeat == false){
              success = dataStorageFactory.setHotelData(hotelData);
          }else{
              success = false;
          }
          return success;
      }

      function _getHotel(){
          let hotelData = dataStorageFactory.getHotelData(),
              hotelList = [];

          hotelData.forEach(obj => {
              let tempHotel = Object.assign(new Hotel(), obj);

              hotelList.push(tempHotel)
          });

          return hotelList;
      }
  }
})();
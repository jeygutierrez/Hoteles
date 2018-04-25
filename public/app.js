(() => {
    'use strict';
    angular
    .module('Hoteleria', ['appRoutes', 'ngMessages', 'duScroll', 'ngFileUpload', 'ngMap', 'ngAnimate'])
    .value('duScrollDuration', 2000)
    .value('duScrollOffset', 30);

})();
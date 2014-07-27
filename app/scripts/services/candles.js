angular.module('ruzbehkheirabiApp')
  .factory('CandleService', ['$firebase', 'FBURL',  function($firebase, FBURL) {
    var ref = new Firebase(FBURL + '/candles');
    return $firebase(ref);
  }]);

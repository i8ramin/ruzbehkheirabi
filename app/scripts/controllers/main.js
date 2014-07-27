'use strict';

angular.module('ruzbehkheirabiApp').controller('MainCtrl', function ($scope, simpleLogin, CandleService) {
  $scope.candle = '';
  $scope.candles = CandleService;

  $scope.err = null;
  $scope.user = null;

  $scope.lightCandle = function () {
    var candleData = {
      from: $scope.auth.user,
      note: $scope.candle
    };

    $scope.candles.$add(candleData);
    $scope.candle = '';
  };

  $scope.login = function (service) {
    simpleLogin.login(service, function(err) {
      $scope.err = err? err + '' : null;
    });
  };

  $scope.logout = function (e) {
    e.preventDefault();
    simpleLogin.logout();
  };
});

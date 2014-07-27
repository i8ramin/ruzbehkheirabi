'use strict';

angular.module('ruzbehkheirabiApp').controller('MainCtrl', function ($scope, simpleLogin, CandleService) {
  $scope.entries = CandleService;
  $scope.candle = {};

  $scope.lightCandle = function () {
    $scope.candle.type = (Math.floor(Math.random() * 8) + 1);
    $scope.candle.flame = (Math.floor(Math.random() * 5) + 1);

    $scope.entries.$add({
      from: $scope.auth.user,
      private: $scope.isPrivate || false,
      candle: $scope.candle
    });

    $scope.candle = {};
  };

  $scope.isMine = function (entry) {
    var user = $scope.auth ? $scope.auth.user : false;
    // console.log(entry);
    return user && entry.from && (entry.from.id === user.id);
  };

  $scope.hasPublicNote = function (entry) {
    return entry.candle.note && !entry.private;
  };

  $scope.shouldShowTooltip = function (entry) {
    return (entry.candle.note && $scope.isMine(entry)) || $scope.hasPublicNote(entry)
  };

  $scope.login = function (e, service) {
    e.preventDefault();

    simpleLogin.login(service, function(err) {
      $scope.err = err? err + '' : null;
    });
  };

  $scope.logout = function (e) {
    e.preventDefault();
    simpleLogin.logout();
  };
});

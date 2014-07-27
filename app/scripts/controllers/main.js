'use strict';

angular.module('ruzbehkheirabiApp').controller('MainCtrl', function ($scope, simpleLogin, CandleService) {
  $scope.candleLit = false;
  $scope.entries = CandleService;

  $scope.lightCandle = function () {
    debugger;
    $scope.entries.$add({
      from: $scope.from,
      candle: {
        type: (Math.floor(Math.random() * 8) + 1),
        flame: (Math.floor(Math.random() * 5) + 1)
      },
      note: $scope.note || ''
    });

    $scope.note = '';
    $scope.candleLit = true;
  };

  $scope.lightAnother = function (e) {
    e.preventDefault();
    $scope.candleLit = false;
  };

  // $scope.isMine = function (entry) {
  //   var user = $scope.auth ? $scope.auth.user : false;
  //   return user && entry.from && (entry.from.id === user.id);
  // };

  // $scope.hasPublicNote = function (entry) {
  //   return entry.note && !entry.private;
  // };

  // $scope.shouldShowTooltip = function (entry) {
  //   return (entry.note && $scope.isMine(entry)) || $scope.hasPublicNote(entry);
  // };

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

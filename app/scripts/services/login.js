'use strict';
angular.module('angularfire.login', ['firebase', 'angularfire.firebase'])

  .run(function($rootScope, simpleLogin) {
    simpleLogin.init();
  })

  .factory('simpleLogin', function($rootScope, $firebaseSimpleLogin, firebaseRef, $timeout) {
    var auth = null;

    function assertAuth() {
      if (auth === null) { throw new Error('Must call loginService.init() before using its methods'); }
    }

    return {
      init: function() {
        auth = $firebaseSimpleLogin(firebaseRef());
        $rootScope.auth = auth;
        return auth;
      },

      logout: function() {
        assertAuth();
        auth.$logout();
      },

      /**
       * @param {string} provider
       * @param {Function} [callback]
       * @returns {*}
       */
      login: function(provider, callback) {
        assertAuth();
        auth.$login(provider, {rememberMe: true}).then(function(user) {
          if (callback) {
            //todo-bug https://github.com/firebase/angularFire/issues/199
            $timeout(function() {
              callback(null, user);
            });
          }
        }, callback);
      }
    };
  });

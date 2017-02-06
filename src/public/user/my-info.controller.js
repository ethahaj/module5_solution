(function () {
  "use strict";

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService','ApiPath'];
  function MyInfoController(MenuService,ApiPath) {
    var $ctrl = this;
    var userPref;

    $ctrl.register = false;
    $ctrl.basePath = ApiPath;
    userPref = MenuService.getUserPref();
    if (Object.keys(userPref).length === 0) {
      $ctrl.register = true;
    } else {
      $ctrl.user = userPref;
    }   
  }

})();

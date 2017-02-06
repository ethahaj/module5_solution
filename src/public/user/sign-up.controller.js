(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService'];
  function SignUpController(MenuService) {
    var $ctrl = this;
    var menuExists;
    $ctrl.formValid = false;
    $ctrl.menuInValid = false;

    $ctrl.submit = function () {
      var promise = MenuService.checkMenuItem($ctrl.menunum);
      promise.then(function (response) {
        if (response.data.status === "500") {
          $ctrl.formValid = false;
          $ctrl.menuInValid = true;
        } else {
          $ctrl.formValid = true;
          $ctrl.menuInValid = false;
          MenuService.saveUserPref($ctrl.fname,$ctrl.lname,$ctrl.email,$ctrl.phone,$ctrl.menunum);
        }
      })
    }

  }


})();

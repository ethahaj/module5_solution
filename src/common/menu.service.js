(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var userPref = {};
  var userFavItem;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.checkMenuItem = function (favItem) {
    return $http.get(ApiPath + '/menu_items/' + favItem + '.json').
      then(function (response) {       
        userFavItem = response.data;
        return response;
      }, function (error) {
        return error;
      }
      );
  };

  service.saveUserPref = function (fName, lName, email, phone) {
    userPref.FirstName = fName;
    userPref.LastName = lName;
    userPref.Email = email;
    userPref.Phone = phone;
    userPref.FavItem = userFavItem;
  };

  service.getUserPref = function () {
   return userPref;
  };
  
}



})();

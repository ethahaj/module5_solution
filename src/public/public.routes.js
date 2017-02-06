(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signUp',{
      url: '/user/signup',
      templateUrl: 'src/public/user/sign-up.html',
      controller: 'SignUpController',
      controllerAs: 'signUpCtrl'
      // resolve: {
      //   favItem: ['$stateParams', function($stateParams){
      //     return $stateParams.favItem;
      //   }]
      }
    )    
    .state('public.myInfo',{
      url: '/user/myInfo',
      templateUrl: 'src/public/user/my-info.html',
      controller: 'MyInfoController',
      controllerAs: 'myInfoCtrl'
      // resolve: {
      //   favItem: ['$stateParams', function($stateParams){
      //     return $stateParams.favItem;
      //   }]
      }
    );
}
})();

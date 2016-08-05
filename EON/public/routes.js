angular.module("EONApp").config(function($routeProvider){
  $routeProvider
    .when("/eonEdit", {
      templateUrl : "views/EditView/EditView.html",
      controller : "EditViewController",
      controllerAs : "ctrl"
    })

    .when("/eonRead", {
      templateUrl : "views/ReadView/ReadView.html",
      controller : "ReadViewController",
      controllerAs: "ctrl"
    })

    .when("/home", {
      templateUrl : "views/HomeView/HomeView.html",
      controller : "ReadViewController",
      controllerAs: "ctrl"
    })

    .otherwise({
      redirectTo : "/home"
    });
});

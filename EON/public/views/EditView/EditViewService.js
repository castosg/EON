angular.module("EditView").factory("EditViewService", function($http) {
    var methods = {};

    methods.getRequest = function(){
      return $http.get("/eonEdit");
    }

    return methods;

});

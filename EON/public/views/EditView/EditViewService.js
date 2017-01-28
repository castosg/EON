angular.module("EditView").factory("EditViewService", function($http) {
    var methods = {};

    methods.getRequest = function(){
      return $http.get("/eonEdit");
    }

    methods.useDesignDoc = function(){
      return $http.get("/eonTest");
    }

    return methods;

});

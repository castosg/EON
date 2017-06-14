angular.module("EditView").factory("EditViewService", function($http) {
    var methods = {};

    methods.getRequest = function(){
      return $http.get("/eonEdit");
    }

    methods.updateCharArray = function(){
      return $http.get("/eonUpdate");
    }

    methods.addChar = function(doc){
      return $http.put("/eonAdd", doc);
    }

    return methods;

});

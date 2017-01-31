angular.module("app.utilities").factory("processRequestData", function(){
  var utils = {};
  var requestBody = {};

  //This method finds the documents in a database response object and returns them as an array.
  utils.getCharacterDocs = function(response){
    //turns database response into a valid json object
    var json = JSON.parse(JSON.stringify(response));
    //Holds the processed data
    var processedData = [];

    //This evaluates the string in json.data.body into a valid JS object
    requestBody = eval("(" + json.data.body + ")");
    angular.forEach(requestBody.rows, function(doc, key){
      //console.log('Stuff- ' + key +':' + doc);
      processedData.push(doc);
    })

    return processedData;
  };
//tempCharArray = tempCharArray.filter(function(value){return vm.characters.indexOf(val) == -1;});
  utils.updateCharArray = function(oldArray, newArray){
    //holds the updated version of the character array
    var isEqual = false;
    var charArray = [];
    angular.forEach(newArray, function(newKey, newValue){
      angular.forEach(oldArray, function(oldKey, oldValue){
        isEqual = false;
        if(oldValue.name == newValue.name){
          isEqual = true;
        }
        if(!isEqual){
          charArray.push(newValue);
        }
      })
    })
    return charArray;
  };




  return utils;
});

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
/*
This updates the character array with the difference between the current version of the character array and the one pulled from the database.
Fix-It should pass in existing arrays, not JSON strings that need parsed
*/
  utils.updateCharArray = function(oldArray, newArray){
    //holds the updated version of the character array
//    console.log("Original Array: " + JSON.stringify(oldArray));
//    console.log("New Array: " + JSON.stringify(newArray));
    var isEqual = false;
    var charArray = [];

    angular.forEach(newArray, function(value, key){
      if (oldArray.indexOf(value) == -1){
        charArray.push(value);
      }
    });

//    console.log("Final Array: " + JSON.stringify(charArray));
    return charArray;
  };



/*
This is the bottom of the service
*/
  return utils;
});

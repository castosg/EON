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
      console.log('Stuff- ' + key +':' + doc);
      processedData.push(doc);
    })

    return processedData;
  };



  return utils;
});

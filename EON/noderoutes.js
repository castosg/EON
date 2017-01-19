var express = require("express");
var router = express.Router();
var request = require('request')

//DB strings
var url = 'http://127.0.0.1:5984/'
var db = 'eonstorage/'
var id = 'document_id'

module.exports = router;

router.get("/eonEdit", function(req, res) {
    console.log("We got to the get");

    request.get('http://127.0.0.1:5984/eonstorage/_all_docs?include_docs=true', function(err, characters){
      if(err){
        return res.status(500).send(err);
      }
      else{
        return res.status(200).send(characters);
      }
    })


//    request.get({url : url + db + '_all_docs'}).then(function(req, res){
//    });

    // Add a document with an ID
    //request.put({
    //    url: url + db + id,
    //    body: {
    //        message: 'This is Sams new shiny document',
    //        user: 'DeezNutz'
    //    },
    //    json: true,
    //}, function(err, resp, body) {
        // Read the document
    //    request(url + db + id, function(err, res, body) {
    //        console.log(body.user + ' : ' + body.message)
    //    })
    //})

    //res.send("A thing");
});

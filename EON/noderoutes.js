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
  })

router.get("/eonTest", function(req, res) {
  console.log("We are in /eonTest");

  request.get('http://127.0.0.1:5984/eonstorage/_design/characters/_view/all', function(err, character_docs){
    if(err){
      return res.status(500).send(err);
    }
    else{
      return res.status(200).send(character_docs);
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

// /eonUpdate should
router.get("/eonUpdate", function(req, res) {
  //console.log("We are in /eonTest");

  request.get('http://127.0.0.1:5984/eonstorage/_design/characters/_view/all', function(err, character_docs){
    if(err){
      return res.status(500).send(err);
    }
    else{
      return res.status(200).send(character_docs);
    }
  })

})

router.put("/eonAdd", function(req, res) {
  console.log("we're in eon add");
  req.body.doc_type = 'character';
  var doc_object = {
    url : 'http://127.0.0.1:5984/eonstorage/uniqueID',
    body: req.body,
    json : true,
  }

  request.put(doc_object, function(err, character_docs){
    if(err){
      return res.status(500).send(err);
    }
    else{
      return res.status(200).send(character_docs);
    }
  })

})

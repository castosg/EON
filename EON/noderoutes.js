var express = require("express");
var router = express.Router();
var request = require('request')

module.exports = router;

router.get("/eonEdit", function(req, res) {
    console.log("We got to the get");



    var url = 'http://127.0.0.1:5984/'
    var db = 'eonstorage/'
    var id = 'document_id'

    // Add a document with an ID
    request.put({
        url: url + db + id,
        body: {
            message: 'This is Sams new shiny document',
            user: 'DeezNutz'
        },
        json: true,
    }, function(err, resp, body) {
        // Read the document
        request(url + db + id, function(err, res, body) {
            console.log(body.user + ' : ' + body.message)
        })
    })

    res.send("A thing");
});

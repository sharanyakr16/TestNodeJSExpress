var express = require('express');
var router = express.Router();

var pg = require('pg');
//Heroku
 var conString = 'postgres://xkuprqdhkfvvdj:e771153c7312eee20e7656aee545daa335d44f11690fc3ea1d1522e9e6a40cfc@ec2-50-16-196-238.compute-1.amazonaws.com:5432/d11fj06j7ttpj8'
//Local
// var config = {
//     user : 'praveen',
//     database : 'pkdb',
//     max : 10,
//     idleTimeOutMillis : 3000
// }
var client = new pg.Client(conString);
router.get('/', function(req, res, next) {
    client.connect(function (err) {
        if (err)
        {
            console.log(err.message)
        }

        client.query("Select * from test_table",function (err, result) {
            if (err)
            { console.error(err); response.send("Error " + err); }
            else

            { console.log("Here are we");
                console.log(result.rows);
                res.render('pages/db', {results: result.rows}
                );
            }
        })
    })

});
module.exports = router;
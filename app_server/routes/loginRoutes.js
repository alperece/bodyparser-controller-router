// NOTES:
//You can make different controllers according to different sections on your web page and define them as routers.

// Biz burada App in kullanmış olduğu express i çağırıyoruz. Bir modül bir kez yüklenir. Sonra çağrılır
var express = require('express');

// we want express to create a router class
var router = express.Router();

// Router does not know Controller. We have to import it.
var controller = require('../controller/loginController');


// test
// You need to give PATH if the JS files are related together.
router.get('/', controller.index);
router.get('/', controller.indexPost);

/* router.get('/login/abc',function(req,res){
    res.end("abc");
}); */

// test
/* router.get('/login',function(req,res){
    res.end("yes");
}); */

router.post('/login',function(req,res){
    console.log(req.body);
    var username=req.body.user;
    var password=req.body.password;
    console.log("From Client Post request: User name="+username+" and password is"+password);
    res.end("yes");
});

// We have to export Router for other files to access this route.
module.exports = router;


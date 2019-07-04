// NOTES:
// controller: is to respond to the request, 
// controller : processes that handle input
// the router: is to direct the request
// Our aim is to make simplification
// This part of the Modul, control the login form
// All links for the login menu are kept in this area.


// To TEST the controller if it works use below code:
// module.exports = function (comment) {
//     console.log("Electronic Controller Calling!" + comment);
// }

var path = require('path');

// The most important part is to export the modules and functions. Otherwise, other files can not read them.
// define response object and export it
module.exports.index = function (req, res) {
    // The callback function is passed a request and response object that we named req and res.
    // In the callback, we call the sendFile() of 
    // "we use" the response object to send the index.html file.
    res.sendFile(path.join(__dirname, '../../index.html'));
}

// Router will direct the POST request to here in controller
module.exports.indexPost = function (req, res) {
    console.log(req.body);
    console.log("indexPost");
    // send the rendered view to the client (may be server)
    res.render('login',{});
}


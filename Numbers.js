/**
 * Created by User on 9/21/2016.
 */
// link to the connect server
var connect = require('connect');
var accountig = requre('accounting');

//link to nodes url model

var url = require('url');


// create a new connect application object
var app = connect();

//listen for events on port 3000
app.listen(3000);

// print notice server is running

console.log('connected running on port 3000');

var helloWorld = function(req, res, next ) {

    res.end("hello world");
}

var goodbyeWorld = function(req, res, next ) {

    res.end("goodbye cruel world");
}

var invalid = function(req, res, next ) {

    res.end("I can do nothing");
}

var caluclate = function(req, res, next) {
    //get subtotal from querystring
    //localhost:3000/tax.js?subtotal=x
    var qs = url.parse(req.url, true).query;

    var subTotal = qs.subtotal;
    // calculate tax and total
    var tax = subTotal * 0.13;
    var total = tax + subTotal;

    //display all values as currency
    res.end('subtotal: ' +accounting.formatMoney(subTotal) + '\n'
        + 'Tax: ' + accounting.formatMoney(tax) + '\n'
        + "total: " +accounting.formatMoney( total))

};

app.use ('/tax',caluclate);


//route all requestrs to hellow world

app.use('/hello',helloWorld);
app.use('/goodbye',goodbyeWorld);

// lowest pages, to highest pages.
app.use(invalid);





/***
 * almost like a class.
 * @param runChild
 */

//exports: makes it 'public' module.exports
function parrent (runChild) {
    var message = "message is the standard hello world";


    function child () {
        alert(message);
    }




    if (runChild == true) {
        child();
    }


}
parrent ();
// moduel refs

var connect = require('connect');
var accounting = require ('accounting');

//create new connect
var  app = connect();


/**
creat a call back function
function acceps amount from url querystring
calculate tax and total display all 3 values as currency
 **/

var caluclate = function(req, res, next) {
    //get subtotal from querystring
    //localhost:3000/tax.js?subtotal=x
    var qs = req.parse(req.url, true).query;

    var subTotal = qs.subtotal;
    // calculate tax and total
    var tax = subtotal * 0.13;
    var total = tax + subTotal;

    //display all values as currency
    res.end('subtotal: ' +subTotal + '\n'
            + 'Tax: ' + tax + '\n'
            + "total: " + total)

};

app.use ('/tax',caluclate);



//
app.listen(3000);


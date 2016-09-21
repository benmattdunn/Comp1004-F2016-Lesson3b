/**
 * Created by User on 9/21/2016.
 */

var message ='hello';

//make a public function that returns a message.

//keep in mind this is an anonymous function that is tied to the fuction
exports.sayHello = function() {
    console.log(message);
}

var privateHell = function() {
    console.log(message);
}


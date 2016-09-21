/**
 * Created by User on 9/21/2016.
 */


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

    var message = 'hello';
    exports.sayHello = function() {
        console.log(message);
    }
}
parrent ();
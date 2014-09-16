/*
    Solving Problem 3
    When we pass a name to the greet function we expect that it return that same name with only the first letter capitalized.
*/
/*globals console*/
(function () {
    'use strict';

    function greet(word) {
        return "Hello " + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + "!";
    }

    // Expected result => "Hello Trinity!"
    console.log(greet("trinity"));

    // Expected result => "Hello Neo!"
    console.log(greet("NEO"));

    return true;
}());

/*
    Solving Problem 2
    Expect result => "Fear-driven Development!"
*/
/*globals console*/
(function () {
    'use strict';

    function jimmy(a) {
        var result = a;

        return function (b) {
            return result + " " + b;
        };
    }

    var some = jimmy("Fear-driven")("Development!");

    console.log(some);

    return true;
}());

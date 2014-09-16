/*
    Solving Problem 1
    Expect result => "Jenga code: The whole program collapses once you alter a block of code."
*/
/*globals console,alert*/
(function () {
    'use strict';

    var some,
        words = ["Jenga", "code:", "The", "whole", "program", "collapses", "once", "you", "alter", "a", "block", "of", "code."];

    function phrase(some) {
        var i,
            result = "";

        for (i = 0; i < words.length; i += 1) {
            result += words[i] + " ";
        }

        //Remove the last space and return
        return result.replace(/\s+$/, "");
    }

    some = phrase(words);

    console.log(some);

    return true;
}());

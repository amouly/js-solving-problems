/*
    Solving Problem 4
    This function is not working as expected, can you spot where's the bug?
    After you do that, try to refactor the function to make it smaller and more scalable.
    Maybe in the future we could use this function to get other things using the ID.
*/
/*globals console*/
(function () {
    'use strict';

    function getFrameworkById(id) {
        var name;

        switch (id) {
        case 1:
            name = 'Backbone';
            break;
        case 2:
            name = 'Angular';
            break;
        case 3:
            name = 'Ember';
            break;
        case 4:
            name = 'React';
            break;
        case 5:
            name = 'Knockout';
            break;
        case 6:
            name = 'Dojo';
            break;
        case 7:
            name = 'Maria';
            break;
        case 8:
            name = 'Polymer';
            break;
        }

        return name;
    }

    function getFrameworkById2(id) {
        var frames = ['Backbone', 'Angular', 'Ember', 'React', 'Knockout', 'Dojo', 'Maria', 'Polymer'];

        return frames[id - 1];
    }

    function getFrameworkById3(id) {
        var frames = { 1: 'Backbone', 2: 'Angular', 3: 'Ember', 4: 'React', 5: 'Knockout', 6: 'Dojo', 7: 'Maria', 8: 'Polymer' };

        return frames[id];
    }

    console.log(getFrameworkById(1));
    console.log(getFrameworkById2(1));
    console.log(getFrameworkById3(1));

    return true;
}());

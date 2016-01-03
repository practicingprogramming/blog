var blogControllers = angular.module('blogControllers');

blogControllers.controller('AboutController', ['$window',
    function ($window) {
        $window.document.title = 'Practicing Programming';
    }
]);

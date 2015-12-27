var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('FrontPageController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.contValue = 'ControllerValue';
    }
]);

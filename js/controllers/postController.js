var blogControllers = angular.module('blogControllers');

blogControllers.controller('PostController', ['$scope', '$routeParams', 'postService',
    function ($scope, $routeParams, postService) {
        var postId = $routeParams.postId;

        $scope.post = postService.getPost(postId); // TODO: handle post not found
        $scope.partial = '/partials/posts/' + postId + '.html';

        $scope.timestampToDate = function(timestamp) {
            var a = new Date(timestamp * 1000);
            var year = a.getFullYear();
            var month = a.getMonth() + 1;
            var date = a.getDate();
            return year + '/' + month + '/' + date;
        };
    }
]);

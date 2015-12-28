var blogControllers = angular.module('blogControllers');

blogControllers.controller('PostController', ['$scope', '$routeParams', 'postService',
    function ($scope, $routeParams, postService) {
        var postId = $routeParams.postId;

        $scope.post = postService.getPost(postId); // TODO: handle post not found
        $scope.partial = '/partials/posts/' + postId + '.html';
    }
]);

var blogControllers = angular.module('blogControllers');

blogControllers.controller('PostController', ['$scope', '$window', '$routeParams', 'postService',
    function ($scope, $window, $routeParams, postService) {
        var postId = $routeParams.postId;

        $scope.post = postService.getPost(postId); // TODO: handle post not found
        $window.document.title = $scope.post.title;
    }
]);

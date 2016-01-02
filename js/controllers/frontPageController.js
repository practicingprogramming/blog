var blogControllers = angular.module('blogControllers');

blogControllers.controller('FrontPageController', ['$scope', 'postService',
    function ($scope, postService) {
        $scope.posts = postService.getAllPosts();

        var postKeys = Object.keys($scope.posts).sort(function(a,b) {
            return $scope.posts[b].timestamp - $scope.posts[a].timestamp;
        });

        $scope.postsArray = postKeys.map(function(key) {
            return $scope.posts[key];
        });
    }
]);

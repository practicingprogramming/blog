var blogControllers = angular.module('blogControllers');

blogControllers.controller('FrontPageController', ['$scope', '$window', 'postService',
    function ($scope, $window, postService) {
        $window.document.title = 'Practicing Programming';

        $scope.posts = postService.getAllPosts();

        var postKeys = Object.keys($scope.posts).sort(function(a,b) {
            return $scope.posts[b].timestamp - $scope.posts[a].timestamp;
        });

        $scope.postsArray = postKeys.map(function(key) {
            return $scope.posts[key];
        });
    }
]);

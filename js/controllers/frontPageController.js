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

        // TODO: duplicated with postController
        $scope.timestampToDate = function(timestamp) {
            var a = new Date(timestamp * 1000);
            var year = a.getFullYear();
            var month = a.getMonth() + 1;
            var date = a.getDate();
            return year + '/' + month + '/' + date;
        };
    }
]);

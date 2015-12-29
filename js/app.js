var blog = angular.module('blog', [
  'ngRoute',
  'blogControllers'
]);

angular.module('blogControllers', []);

blog.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/frontPage.html',
                controller: 'FrontPageController'
            }).
            when('/post/:postId', {
                templateUrl: 'partials/post.html',
                controller: 'PostController'
            }).
            when('/about', {
                templateUrl: 'partials/about.html'
            }).
            otherwise({
                redirectTo: '/'
            });
  }]);

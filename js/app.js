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
          otherwise({
            redirectTo: '/'
          });
  }]);

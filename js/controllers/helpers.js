var blog = angular.module('blogControllers');

blog.run(['$rootScope', function($rootScope) {
    $rootScope.timestampToDate = function(timestamp) {
        var a = new Date(timestamp * 1000);
        var year = a.getFullYear();
        var month = a.getMonth() + 1;
        var date = a.getDate();
        return year + '/' + month + '/' + date;
    };
}]);

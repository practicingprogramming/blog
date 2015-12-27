angular
.module('blog')
.factory('postService', function() {
    return {
        getPost: function(id) {
            return {
                title: id + '\' title'
            };
        }
    };
});

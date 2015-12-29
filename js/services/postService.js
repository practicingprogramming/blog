angular
.module('blog')
.factory('postService', function() {
    var posts = {
        'testPost1': {
            title: 'This is the first post'
        },
        'testPost2': {
            title: 'This is the second post'
        },
        'creatingThisBlog': {
            title: 'Creating This Blog'
        }
    };
    return {
        getPost: function(id) {
            return posts[id];
        }
    };
});

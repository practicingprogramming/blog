angular
.module('blog')
.factory('postService', function() {
    var posts = {
        'testPost1': {
            title: 'This is the first post',
            timestamp: 11111,
            partial: '/partials/posts/testPost1.html'
        },
        'testPost2': {
            title: 'This is the second post',
            timestamp: 33333,
            partial: '/partials/posts/testPost2.html'
        },
        'creatingThisBlog': {
            title: 'Creating This Blog',
            timestamp: 22222,
            partial: '/partials/posts/creatingThisBlog.html'
        }
    };
    return {
        getPost: function(id) {
            return posts[id];
        },
        getAllPosts: function() {
            return posts;
        }
    };
});

angular
.module('blog')
.factory('postService', function() {
    // TODO: ids are duplicated
    // TODO: partials can be inferred automatically
    var posts = {
        'testPost1': {
            title: 'This is the first post',
            timestamp: 11111,
            partial: '/partials/posts/testPost1.html',
            id: 'testPost1'
        },
        'testPost2': {
            title: 'This is the second post',
            timestamp: 33333,
            partial: '/partials/posts/testPost2.html',
            id: 'testPost2'
        },
        'creatingThisBlog': {
            title: 'Creating This Blog',
            timestamp: 22222,
            partial: '/partials/posts/creatingThisBlog.html',
            id: 'creatingThisBlog'
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

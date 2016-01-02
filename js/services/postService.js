angular
.module('blog')
.factory('postService', function() {
    // TODO: ids are duplicated
    // TODO: partials can be inferred automatically
    var posts = {
        'creatingThisBlog': {
            title: 'Creating This Blog',
            timestamp: 1451763849,
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

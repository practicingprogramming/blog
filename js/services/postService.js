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
        },
        'vocabularyApp': {
            title: 'Practicing Object-Oriented Design: Application For Memorizing Words',
            timestamp: 1453600990,
            partial: '/partials/posts/vocabularyApp.html',
            id: 'vocabularyApp'
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

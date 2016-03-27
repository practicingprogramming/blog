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
        },
        'clapt': {
            title: 'Application for Testing Command Line Applications',
            timestamp: 1456711197,
            partial: '/partials/posts/clapt.html',
            id: 'clapt'
        },
        'cucumberAndCapybara': {
            title: 'Cucumber and Capybara',
            timestamp: 1457244800,
            partial: '/partials/posts/cucumberAndCapybara.html',
            id: 'cucumberAndCapybara'
        },
        'bashOneLiners': {
            title: 'Bash One-Liners',
            timestamp: 1459108585,
            partial: '/partials/posts/bashOneLiners.html',
            id: 'bashOneLiners'
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

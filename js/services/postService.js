angular
.module('blog')
.factory('postService', function() {
    var posts = {
        'testPost1': {
            title: 'This is the first post',
            timestamp: 1451369142
        },
        'testPost2': {
            title: 'This is the second post',
            timestamp: 1251360142
        },
        'creatingThisBlog': {
            title: 'Creating This Blog',
            timestamp: 1451269142
        }
    };
    return {
        getPost: function(id) {
            return posts[id];
        }
    };
});

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['build'],
        copy: {
          main: {
            files: [
              {expand: true, src: '**', dest: 'build/', cwd: 'public/'},
              {expand: true, src: '**', dest: 'build/', cwd: 'css/'}
            ],
          },
        },
        shell: {
            deploy: {
                command: function () {
                    return 'aws s3 sync build s3://practicingprogramming.com/';
                }
            }
        },
        concat: {
            options: {
                separator: '\n;',
            },
            dist: {
                src: 'js/**',
                dest: 'build/practicingprogramming.js',
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('build', ['clean', 'concat', 'copy']);
    grunt.registerTask('release', ['build', 'shell']);
    grunt.registerTask('default', ['build']);
};

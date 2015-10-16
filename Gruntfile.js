module.exports = function( grunt ) {

  "use strict"

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    //Deploy the production files for gh-pages
    'gh-pages': {
      options: {
        base: 'em-construcao/'
      },
      src: ['**']
    }

  });

  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('deploy', ['gh-pages']);

};

module.exports = function( grunt ) {

  "use strict"

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    //imagemin
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          src: ['src/files/images/*.{png,jpg,gif}']
        }]
      }
    },

  //Deploy the production files for gh-pages
    'gh-pages': {
      options: {
        base: 'out/'
      },
      src: ['**']
    }

  });

  //Load all plugins
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-gh-pages');

  //Tasks for build components
  grunt.registerTask('imgminify', ['imagemin']);
  grunt.registerTask( 'deploy', ['gh-pages']);

};

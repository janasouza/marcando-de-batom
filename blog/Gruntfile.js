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
    }

  });

  //Load all plugins
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  //Tasks for build components
  grunt.registerTask('imgminify', ['imagemin']);

};

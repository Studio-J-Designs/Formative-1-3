module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),

    sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'css/style.css': 'sass/style.scss'    // 'destination': 'source'

      }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'js/*.js']
    }
  });
     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-contrib-jshint');
     
    grunt.registerTask('default', ['sass','jshint']); //run this using grunt test

};

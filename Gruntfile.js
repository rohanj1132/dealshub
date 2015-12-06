module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    requirejs: {
      compile: {
        options: {
          baseUrl: 'js/src/modules',
          mainConfigFile: 'js/src/app.js',
          out: 'dist/js/app.js',
          name: 'main',
          optimize: 'none'
        }
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/css/style.css' : 'scss/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('dev', ['watch','sass']);
  grunt.registerTask('js', ['requirejs']);
};
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['node_modules/foundation-sites/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'public/css/blokojs.css': 'scss/blokojs.scss'
        }
      }
    },

    concat: {
      options: {
        //separator: grunt.util.linefeed + ';' + grunt.util.linefeed,
      },
      dist: {
        src: [
          "node_modules/jquery/dist/jquery.min.js",
          "node_modules/foundation/js/foundation.min.js",
          "src/js/blokojs.js"
        ],
        dest: 'public/js/blokojs.js',
      },
    },

    jshint:{
      files: ['Gruntfile.js', 'bloko.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.registerTask('build', ['sass', 'concat', 'jshint']);
  grunt.registerTask('default', ['build','watch']);
};

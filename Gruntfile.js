'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: true
      },
      src: [
        'Gruntfile.js',
        'server.js',
        'models/**/*.js',
        'routes/**/*.js',
        'lib/**/*.js',
        'app/js/**/*.js'
      ]
    },

    jscs: {
      options: {
        config: '.jscsrc'
      },
      src: [
        'Gruntfile.js',
        'server.js',
        'models/**/*.js',
        'routes/**/*.js',
        'lib/**/*.js',
        'app/js/**/*.js'
      ]
    },

    simplemocha: {
      all: {
        options: {
          clearRequireCache: true
        },
        src: ['test/server/**/*.js']
      }
    },

    watch: {
      scripts: {
        files: ['!**/node_modules/**', '**/*.js'],
        tasks: ['jshint', 'simplemocha:all']
      },
      options: {
        spawn: false,
        timeout: 3000
      }
    },

    clean: {
      build: {
        src: ['build/']
      }
    },

    copy: {
      build: {
        expand: true,
        cwd: 'app/',
        src: ['**/*.html', '**/*.png', '**/*.css'],
        dest: 'build/',
        flatten: false,
        filter: 'isFile'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js'
      }
    },
  });

  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha:all']);
  grunt.registerTask('default', ['test']);
  grunt.registerTask('build', ['clean', 'browserify', 'copy']);
};

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    '6to5': {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'build/<%= pkg.name %>.js': 'src/<%= pkg.name %>.js'
        }
      }
    }
  });

  grunt.registerTask('default', ['6to5', 'uglify']);

};
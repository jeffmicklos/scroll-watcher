module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    babel: {
      options: {
        sourceMap: false,
        modules: 'umd',
        moduleId: 'ScrollWatcher'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.js': 'src/<%= pkg.name %>.js'
        }
      }
    },
    watch: {
      files: ['src/scroll-watcher.js'],
      tasks: ['default']
    }
  });

  grunt.registerTask('default', ['babel', 'uglify']);

};
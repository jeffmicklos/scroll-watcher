module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/es5/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    traceur: {
      options: {
        experimental: false,
        moduleNames: true,
        moduleNaming: {
          stripPrefix: 'src/es6/',
          addPrefix: 'cool/things/'
        },

        copyRuntime: 'src/es5'
      },
      custom: {
        files: [{
          expand: true,
          cwd: 'src/es6',
          src: ['*.js'],
          dest: 'src/es5'
        }]
      },
    },
    es6transpiler: {
      dist: {
        files: {
          'src/app.js': 'src/es6/scroll-watcher.js'
        }
      }
    },
    '6to5': {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                //'dist/app.js': 'src/app.js'
                'src/six.js': 'src/es6/scroll-watcher.js'
            }
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-es6-transpiler');

  grunt.loadNpmTasks('grunt-traceur');

  grunt.registerTask('bick', ['traceur'], function() {
    grunt.log.write('Logging some stuff...').ok();
  });

  grunt.registerTask('trans', ['es6transpiler']);

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
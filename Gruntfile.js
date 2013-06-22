module.exports = function(grunt) {
  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 8082,
          base: './'
        }
      }
    },

    requirejs: {
      options: {
        baseUrl: '.',
        appDir: 'dev/app',
        mainConfigFile: 'dev/app/main.js',
        optimize: 'uglify2',
        generateSourceMaps: true,
        preserveLicenseComments: false,
        useStrict: true,
        removeCombined: true,
        modules: [
          {
            name: 'main'
          }
        ]
      },
      en: {
        options: {
          dir: 'app_builds'
        }
      }
    },

    karma: {
      unit: {
        configFile: 'dev/tests/karma-config.js',
        background: true
      }
    },

    regarde: {
      js: {
        files: ['dev/**/*.js'],
        tasks: ['karma:unit:run']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('run', 'runs all tasks', function() {
    var tasks = [
      'connect',
      'karma',
      'regarde'
    ];
    grunt.option('force', true);
    grunt.task.run(tasks);
  });

  grunt.registerTask('build', ['requirejs']);
  grunt.registerTask('default', ['run']);
};

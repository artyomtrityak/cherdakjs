//@ sourceMappingURL=karma-config.map
var autoWatch, basePath, browsers, captureTimeout, colors, exclude, files, logLevel, port, reporters, runnerPort, singleRun;

basePath = '../';

files = [
  MOCHA, MOCHA_ADAPTER, {
    pattern: 'tests/vendor/*.js',
    included: true,
    served: true,
    watched: true
  }, {
    pattern: 'app/assets/vendor/require-2.1.5.js',
    included: true,
    served: true,
    watched: true
  }, 'app/config.js', 'tests/test-config.js', {
    pattern: 'app/*.js',
    included: false,
    served: true,
    watched: true
  }, {
    pattern: 'app/**/*.js',
    included: false,
    served: true,
    watched: true
  }, {
    pattern: 'app/**/*.hbs',
    included: false,
    served: true,
    watched: true
  }, {
    pattern: 'tests/spec/**/*.js',
    included: true,
    served: true,
    watched: true
  }
];

exclude = [];

reporters = ['progress'];

port = 9876;

runnerPort = 9100;

colors = false;

logLevel = LOG_INFO;

autoWatch = false;

browsers = ['Chrome', 'Firefox'];

captureTimeout = 60000;

singleRun = false;

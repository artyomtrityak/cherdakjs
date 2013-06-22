require.config({
  baseUrl: 'dev/app',

  paths: {
    backbone: 'libs/backbone',
    underscore: 'libs/underscore',
    jquery: 'libs/jquery',
    text: 'libs/text'
  },

  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    app: ['text']
  },

  packages: [
    'widgets/cats'
  ],

  deps: ['text']
});

require(["app"]);

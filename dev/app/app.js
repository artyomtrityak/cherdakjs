define(function(require) {

  var Backbone = require('backbone'),
      Cats = require('widgets/cats');

  console.log(Backbone);

  var Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'index': 'index',
      'cats': 'showCats'
    },

    index: function() {
      $('body').empty();
    },

    showCats: function() {
      console.log('cats');
      var cats = new Cats();
      cats.show();
    }
  });

  var r = new Router();
  Backbone.history.start();

});

define(function(require) {
  var View = require('./view'),
      Model = require('./model');

  function Controller() {
  }

  Controller.prototype.show = function() {
    this.model = new Model();
    this.view = new View({
      el: 'body',
      model: this.model
    });
    this.view.render();
  };

  return Controller;
});

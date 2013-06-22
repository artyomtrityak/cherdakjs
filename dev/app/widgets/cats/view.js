define(function(require) {
  var Backbone = require('backbone'),
      tpl = require('text!./templates/view.html'),
      _ = require('underscore');

  console.log(tpl);

  return Backbone.View.extend({
    template: _.template(tpl),

    render: function() {
      this.$el.html(this.template({
        model: this.model.toJSON()
      }));
    }
  });
});

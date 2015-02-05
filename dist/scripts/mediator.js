"use strict";
var Mediator = function Mediator() {
  this.channels = {};
};
($traceurRuntime.createClass)(Mediator, {
  subscribe: function(channel, fn) {
    if (!this.channels[channel]) {
      this.channels[channel] = [];
    }
    this.channels[channel].push({
      context: this,
      callback: fn
    });
    return this;
  },
  publish: function(channel) {
    if (!this.channels[channel]) {
      return ;
    }
    var args = Array.prototype.slice.call(arguments, 1),
        cl = this.channels[channel].length;
    for (var i = 0,
        l = cl; i < l; i++) {
      var subscription = this.channels[channel][i];
      subscription.callback.apply(subscription.context, args);
    }
    return this;
  },
  installTo: function(obj) {
    obj.subscribe = subscribe;
    obj.publish = publish;
  }
}, {});

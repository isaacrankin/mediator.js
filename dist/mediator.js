"use strict";
var Mediator = function Mediator() {};
($traceurRuntime.createClass)(Mediator, {subscribe: function(channel, fn) {
    fn();
  }}, {});

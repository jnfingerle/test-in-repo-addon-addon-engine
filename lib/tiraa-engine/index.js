/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'tiraa-engine',
  lazyLoading: false,

  isDevelopingAddon: function() {
    return true;
  }
});

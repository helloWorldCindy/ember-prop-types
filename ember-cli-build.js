/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  var app = new EmberAddon(defaults, {
    'babel': {
      optional: ['es6.spec.symbols'],
      includePolyfill: true
    },
    'ember-cli-mocha': {
      useLintTree: false
    },
    'ember-prism': {
      components: ['javascript'],
      theme: 'okaidia'
    }
  })

  if (app.env === 'test') {
    app.import('bower_components/sinonjs/sinon.js')
  }

  return app.toTree()
}

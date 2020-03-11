var after = require('after'),
    suggest = require('suggestion'),
    extend = require('xtend'),
    uniq = require('uniq');

module.exports = questionable;

var prefixes = [
  'why',
  'when',
  'do',
  'should',
  'which',
  'where',
  'how',
  'how to',
  'how can',
  'how much',
  'how would',
  'who',
  'what',
  'what should',
  'what can',
  'what would',
];

function questionable(keyword, opts, cb) {
  if (typeof cb === 'undefined' && typeof opts == 'function') {
    cb = opts;
    opts = {};
  }

  var _prefixes = prefixes;
  if (Array.isArray(opts.prefixes)) {
    _prefixes = opts.prefixes;
  }

  var next = after(_prefixes.length, done);
  var results = [];

  var _opts = extend(opts);
  delete _opts.prefixes;

  _prefixes.forEach(function (prefix) {
    suggest(prefix + ' ' + keyword, extend(_opts, { cp: prefix.length + 1 }), function (err, suggestions) {
      if (err) return next(err);
      results = results.concat(suggestions);
      next();
    });
  });

  function done(err) {
    if (err) return cb(err);
    cb(null, uniq(results));
  }
}

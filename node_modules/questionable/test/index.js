var it = require('tape'),
    questionable = require('..');

it('should be able to suggest some titles', function(t) {
  t.plan(2);
  questionable('productivity', function (err, titles) {
    if (err) throw err;
    t.assert(titles.length > 100);
  });
  questionable('dog training', function (err, titles) {
    if (err) throw err;
    t.assert(titles.length > 100);
  });
});

it('should be able to suggest some youtube titles', function(t) {
  t.plan(2);
  questionable('productivity', { client: 'youtube' }, function (err, titles) {
    if (err) throw err;
    t.assert(titles.length > 10);
  });
  questionable('dog training', { client: 'youtube' }, function (err, titles) {
    if (err) throw err;
    t.assert(titles.length > 10);
  });
});

it('should be able to suggest in other languages', function(t) {
  t.plan(1);
  questionable('包', { hl: 'zh-CN' }, function (err, titles) {
    if (err) throw err;
    t.assert(titles.length > 5);
  });
});

it('should be able to override the prefixes', function(t) {
  t.plan(1);
  questionable('productivity', { prefixes: ['what'] }, function (err, titles) {
    if (err) throw err;
    t.assert(titles.length > 5 && titles.length < 100);
  });
});

# questionable

Suggest english questions based on a given keywords

[![build status](https://secure.travis-ci.org/eugeneware/questionable.png)](http://travis-ci.org/eugeneware/questionable)

This module take a keyword and tries to use the google suggest api to find
questions that contain that keyword. These might be the basis of article ideas
or market research for example.

## Installation

This module is installed via npm:

``` bash
$ npm install questionable
```

## Example Usage

``` js
var questionable = require('questionable');
questionable('productivity', function (err, titles) {
  if (err) throw err;
  console.log(titles);
  /*
    [ 'do bonuses enhance sales productivity',
      'do bonuses increase productivity',
      'do cubicles increase productivity',
      'do dual monitors increase productivity',
      'do inequalities stimulate productivity',
      'do multiple monitors increase productivity',
      'do naps increase productivity',
      'do social productivity',
      'do unions help organizational productivity',
      'do unions increase productivity',
      'how can businesses increase productivity',
      'how can effective communication increase productivity',
      'how can excel increase productivity',
      'how can information technology improve productivity',
      'how can primary productivity be measured',
      'how can productivity be increased',
      ... over 100 results ...
      'why is productivity important',
      'why is productivity important in the workplace',
      'why is productivity important to a nation\'s standard of living',
      'why is productivity important to economic growth',
      'why is the primary productivity of an ecosystem',
      'why low productivity',
      'why measure productivity',
      'why microsoft productivity',
      'why should productivity be improved',
      'why should productivity be measured' ]
  */
});
```

## Overriding the prefixes

Questionable uses a series of prefixes to elicit questions. You can override
these by passing the `prefixes` variable to the `opts` argument:

``` js
var questionable = require('questionable');
questionable('productivity', { prefixes: ['what'] }, function (err, titles) {
  if (err) throw err;
  console.log(titles);
  /*
  [ 'what is employee productivity',
    'what is labour productivity',
    'what is marginal productivity',
    'what is multifactor productivity',
    'what is primary productivity',
    'what is productivity improvement',
    'what is productivity index',
    'what is productivity software',
    'what is the definition of productivity',
    'what is total factor productivity' ]
  */
});
```

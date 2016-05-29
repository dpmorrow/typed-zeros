import test = require('blue-tape');
import zeros = require('zeros');

test('module can load properly', null, function(t) {
  let test = zeros([1,1]);

  t.notEqual(null, test, 'created instance is not null');
  t.notEqual(undefined, test.set, 'has expected method: set ');
  t.end();
});

test('can get a value that was set', null, function(t) {
  const test = zeros([1,1]);
  let value = 34;

  test.set(0,0, value);

  t.equal(test.get(0,0), value);
  t.end();
});

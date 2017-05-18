import assert from 'assert';
import {mustMatch} from 'services/Rules';

describe('mustMatch()', function() {
  it('Same Password', function() {
    let res = mustMatch('Hello', 'Hello');
    assert.equal(res, true);
  });
});

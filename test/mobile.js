'use strict';

const assert = require('assert');
const Joi = require('joi');
const skyss = require('../');

describe('messages()', function describe() {
  it('returns a list of messages', function it(done) {
    this.timeout(10000);

    skyss.mobile.messages((err, data, resp) => {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      const schema = Joi.object().keys({
        Messages: Joi.object().keys({
          Short: Joi.string(),
          Long: Joi.string(),
        }),
        resultCode: Joi.string(),
        errorCode: Joi.string().allow(null),
        errorMessage: Joi.string().allow(null),
      });

      Joi.validate(data, schema, done);
    });
  });
});

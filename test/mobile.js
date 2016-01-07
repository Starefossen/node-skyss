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

describe('stops()', function describe() {
  it('returns a list of stops', function it(done) {
    this.timeout(10000);

    const opts = {
      rows: 10,
    };

    skyss.mobile.stops(opts, (err, data, resp) => {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      const schema = Joi.object().keys({
        Result: Joi.object().keys({
          Found: Joi.number(),
          Returned: Joi.number(),
          Start: Joi.number(),
          'Last-Modified': Joi.date(),
        }),
        StopGroups: Joi.array().items(Joi.object().keys({
          Identifier: Joi.string(),
          Description: Joi.string(),
          ServiceModes: Joi.array().items(Joi.string()),
          Location: Joi.string(),
        })),
        resultCode: Joi.string(),
        errorCode: Joi.string().allow(null),
        errorMessage: Joi.string().allow(null),
      });

      Joi.validate(data, schema, done);
    });
  });

  it('returns a list of stops for search query');
});

describe('stop()', function describe() {
  it('returns details for stop', function it(done) {
    this.timeout(10000);

    const id = 'groupId_123762465';
    const opts = {};

    skyss.mobile.stop(id, opts, (err, data, resp) => {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      const schema = Joi.object().keys({
        Result: Joi.object().keys({
          Found: Joi.number(),
          Returned: Joi.number(),
          Start: Joi.number(),
          'Last-Modified': Joi.date(),
        }),
        StopGroups: Joi.array().items(Joi.object().keys({
          Identifier: Joi.string(),
          Description: Joi.string(),
          ServiceModes: Joi.array().items(Joi.string()),
          Location: Joi.string(),
        })),
        resultCode: Joi.string(),
        errorCode: Joi.string().allow(null),
        errorMessage: Joi.string().allow(null),
      });

      Joi.validate(data, schema, done);
    });
  });

  it('returns details for stop with expanded fields', function it(done) {
    const id = 'groupId_123762465';
    const opts = {
      expand: [
        'Stops.RouteDirections.PassingTimes',
        'Stops.RouteDirections.Notes',
      ],
    };

    skyss.mobile.stop(id, opts, (err, data, resp) => {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      const schema = Joi.object().keys({
        Result: Joi.object().keys({
          Found: Joi.number(),
          Returned: Joi.number(),
          Start: Joi.number(),
          'Last-Modified': Joi.date(),
        }),
        StopGroups: Joi.array().items(Joi.object().keys({
          Identifier: Joi.string(),
          Description: Joi.string(),
          ServiceModes: Joi.array().items(Joi.string()),
          Location: Joi.string(),
          Stops: Joi.array().items(Joi.object().keys({
            Identifier: Joi.string(),
            Description: Joi.string(),
            Platform: Joi.string().allow(''),
            Location: Joi.string(),
            ServiceModes: Joi.array().items(Joi.string()),
            Detail: Joi.string(),
            RouteDirections: Joi.array().items(Joi.object().keys({
              PublicIdentifier: Joi.string(),
              Description: Joi.string(),
              Direction: Joi.string(),
              DirectionName: Joi.string(),
              ServiceMode: Joi.string(),
              Identifier: Joi.string(),
              PassingTimes: Joi.array(),
              Notes: Joi.array().items(Joi.object().keys({
                NoteCode: Joi.string(),
                Text: Joi.string(),
              })),
            })),
          })),
        })),
        resultCode: Joi.string(),
        errorCode: Joi.string().allow(null),
        errorMessage: Joi.string().allow(null),
      });

      Joi.validate(data, schema, done);
    });
  });
});

describe('routes()', function describe() {
  it('returns a list of routes', function it(done) {
    this.timeout(10000);

    const opts = {
      rows: 10,
    };

    skyss.mobile.routes(opts, (err, data, resp) => {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      const schema = Joi.object().keys({
        Result: Joi.object().keys({
          Found: Joi.number(),
          Returned: Joi.number(),
          Start: Joi.number(),
        }),
        RouteDirections: Joi.array().items(Joi.object().keys({
          PublicIdentifier: Joi.string(),
          Description: Joi.string(),
          Direction: Joi.string(),
          DirectionName: Joi.string(),
          ServiceMode: Joi.string(),
          Identifier: Joi.string(),
        })),
        resultCode: Joi.string(),
        errorCode: Joi.string().allow(null),
        errorMessage: Joi.string().allow(null),
      });

      Joi.validate(data, schema, done);
    });
  });

  it('returns a list of routes for search query');
});

describe('route()', function describe() {
  it('returns details for route', function it(done) {
    this.timeout(10000);

    const id = '000001_0_Direction1';
    const opts = {};

    skyss.mobile.route(id, opts, (err, data, resp) => {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      const schema = Joi.object().keys({
        Trips: Joi.array().items(Joi.object().keys({
          Identifier: Joi.string(),
          TripServiceMode: Joi.string(),
          RoutePublicIdentifier: Joi.string(),
          RouteDirectionName: Joi.string(),
          StopPassingTimes: Joi.array().items(Joi.object().keys({
            StopIdentifier: Joi.string(),
            StopDescription: Joi.string(),
            Timestamp: Joi.date(),
            Status: Joi.string(),
            DisplayTime: Joi.string(),
            TimeOffset: Joi.string(),
          })),
        })),
        resultCode: Joi.string(),
        errorCode: Joi.string().allow(null),
        errorMessage: Joi.string().allow(null),
      });

      Joi.validate(data, schema, done);
    });
  });

  it('returns details for route with expanded fields', function it(done) {
    const id = '000001_0_Direction1';
    const opts = {
      expand: [
        'StopPassingTimes.StopLocation',
        'Path',
      ],
    };

    skyss.mobile.route(id, opts, (err, data, resp) => {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      const schema = Joi.object().keys({
        Trips: Joi.array().items(Joi.object().keys({
          Identifier: Joi.string(),
          TripServiceMode: Joi.string(),
          RoutePublicIdentifier: Joi.string(),
          RouteDirectionName: Joi.string(),
          StopPassingTimes: Joi.array().items(Joi.object().keys({
            StopIdentifier: Joi.string(),
            StopDescription: Joi.string(),
            Timestamp: Joi.date(),
            Status: Joi.string(),
            DisplayTime: Joi.string(),
            TimeOffset: Joi.string(),
            StopLocation: Joi.string(),
          })),
          Path: Joi.array().items(Joi.string()),
        })),
        resultCode: Joi.string(),
        errorCode: Joi.string().allow(null),
        errorMessage: Joi.string().allow(null),
      });

      Joi.validate(data, schema, done);
    });
  });
});

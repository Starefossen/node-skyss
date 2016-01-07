'use strict';

const jsonist = require('jsonist');
const querystring = require('querystring');

const skyssMobileApiUrl = process.env.SKYSS_MOBILE_API_URL;
const skyssMobileApiUser = process.env.SKYSS_MOBILE_API_USER;
const skyssMobileApiPass = process.env.SKYSS_MOBILE_API_PASS;

module.exports._opts = function _opts() {
  return {
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'en-us',
      'X-Language-Locale': 'en-NO_NO',
      'User-Agent': 'iOS(9.2)/Skyss(1.0.1)/1.0',
    },
    auth: `${skyssMobileApiUser}:${skyssMobileApiPass}`,
  };
};

module.exports.mobile = {};

/**
 * Get list of important messages
 *
 * @param cb - callback function (err, data, res)
 *
 * @return Object with messages
 */
module.exports.mobile.messages = function messages(cb) {
  const url = `${skyssMobileApiUrl}/messages`;
  jsonist.get(url, module.exports._opts(), cb);
};

/**
 * Get list of transport stops
 *
 * @param opts - query options {rows=1000, q=undefined}
 * @param cb - callback function (err, data, res)
 *
 * @return Object with stops
 */
module.exports.mobile.stops = function stops(opts, cb) {
  const qs = opts;

  qs.rows = qs.rows || 1000;

  if (qs.q) { qs.q = encodeURIComponent(qs.q); }

  const url = `${skyssMobileApiUrl}/stopgroups?${querystring.stringify(qs)}`;
  jsonist.get(url, module.exports._opts(), cb);
};

/**
 * Get transport stop details
 *
 * @param id - String with stop identifier
 * @param opts - Object with query options {expand, stop}
 *    expand=Stops.RouteDirections.PassingTimes
 *    expand=Stops.RouteDirections.Notes
 * @param cb - callback function (err, data, res)
 *
 * @return Object of stop details
 */
module.exports.mobile.stop = function stop(id, opts, cb) {
  let url = `${skyssMobileApiUrl}/stopgroups/${id}`;

  if (opts.expand) {
    url += `?expand=${opts.expand.join('&expand=')}`;
  }

  jsonist.get(url, module.exports._opts(), cb);
};

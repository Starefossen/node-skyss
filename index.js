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

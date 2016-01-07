# Skyss APIs for Node.JS

[![Build status](https://img.shields.io/wercker/ci/568eded7a6ea6a236c0422c9.svg "Build status")](https://app.wercker.com/project/bykey/0d397058b08d56566328faaaa299e458)
[![NPM downloads](https://img.shields.io/npm/dm/skyss.svg "NPM downloads")](https://www.npmjs.com/package/skyss)
[![NPM version](https://img.shields.io/npm/v/skyss.svg "NPM version")](https://www.npmjs.com/package/skyss)
[![Node version](https://img.shields.io/node/v/skyss.svg "Node version")](https://www.npmjs.com/package/skyss)
[![Dependency status](https://img.shields.io/david/Starefossen/node-skyss.svg "Dependency status")](https://david-dm.org/Starefossen/node-skyss)

Node.JS wrapper for various (undocumented) API from Skyss public transport in
Hordaland county in Norway. Since Skyss does not publicly document any of
their APIs, this effort is done by analyzing source code of various skyss.no
sites, GitHub and other search engines, as well as analyzing traffic to and
from various Skyss applications.

## Requirements

* Node.JS >= v4.0.0

## Install

```
$ npm install skyss --save
```

## Usage

```js
const skyss = require('skyss');
```

### Environment

* `SKYSS_MOBILE_API_URL` - mobile API endpoint
* `SKYSS_MOBILE_API_USER` - mobile API username
* `SKYSS_MOBILE_API_PASS` - mobile API password

### Mobile APIs

API endpoints used by the Skyss Reise app for iOS and Android.

* `skyss.mobile.messages(callback)`
* `skyss.mobile.stops(opts, callback)`
* `skyss.mobile.stop(id, opts, callback)`
* `skyss.mobile.routes(opts, callback)`
* `skyss.mobile.route(id, opts, callback)`

## Legal

Skyss is a registered trademark of Hordaland County Councile (Hordaland
Fylkeskommune) which is not affiliated with this product. Content from Skyss
APIs may be copyrighted.

## [MIT Licensed](https://github.com/Starefossen/node-skyss/blob/master/LICENSE)

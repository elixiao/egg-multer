# egg-multer

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-multer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-multer
[travis-image]: https://img.shields.io/travis/eggjs/egg-multer.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-multer
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-multer.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-multer?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-multer.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-multer
[snyk-image]: https://snyk.io/test/npm/egg-multer/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-multer
[download-image]: https://img.shields.io/npm/dm/egg-multer.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-multer

<!--
Description here.
-->

## Install

```bash
$ npm i egg-multer --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.multer = {
  enable: true,
  package: 'egg-multer',
}
```

## Configuration

```js
// {app_root}/config/config.default.js

// Accept a single file with the name `uri`
exports.multer = {
  single: 'uri', 
}

// Accept an array of files, all with the name `files`
exports.multer = {
  array: 'files', 
}

// Accept a mix of files, specified by fields
exports.multer = {
  fields: [{name: 'file', maxCount: 1}],
}

// Accept only text fields
exports.multer = {
  none: true,
}

// Accepts all files that comes over the wire
exports.multer = {
  any: true,
}
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
async multer() {
  const { ctx, app } = this
  console.log('is multipart', ctx.is('multipart'))
  console.log('is json', ctx.is('json'))
  console.log('request.body', ctx.request.body)
  console.log('ctx.file', ctx.file)
  console.log('ctx.files', ctx.files)
  ctx.body = { ok: 1 }
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/keliq/egg-multer/issues).

## License

[MIT](LICENSE)

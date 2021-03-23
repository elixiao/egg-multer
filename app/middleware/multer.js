/*
  https://github.com/expressjs/multer
  .single(fieldname)
  .array(fieldname[, maxCount])
  .fields(fields)
  .none()
  .any()
*/
const multer = require('@koa/multer')

module.exports = (options, app) => {
  const { opts, ...rest } = options
  const upload = multer(options.opts)
  const keys = Object.keys(rest)
  const methods = ['none', 'any', 'single', 'array', 'fields']
  let key, value
  for (let i = 0; i < keys.length; i++) {
    if (methods.includes(keys[i])) {
      key = keys[i]
      value = rest[key]
      break
    }
  }
  return async function (ctx, next) {
    if (!ctx.is('multipart')) return next()
    await upload[key](value)(ctx, next)
  }
}

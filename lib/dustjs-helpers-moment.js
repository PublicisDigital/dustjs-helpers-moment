(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['dustjs-linkedin', 'moment'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('dustjs-linkedin'),require('moment'));
  } else {
    factory(root.dust, root.moment);
  }
}(this, function(dust, moment) {

// format
  dust.helpers.moment = function(chunk, context, bodies, params) {
    var type = dust.helpers.tap(params.type, chunk, context) || 'format';
    var date = dust.helpers.tap(params.date, chunk, context) || new Date();
    var format = dust.helpers.tap(params.format, chunk, context) || 'MMM Do YYYY';
    var input = dust.helpers.tap(params.input, chunk, context) || 1;
    var value = dust.helpers.tap(params.value, chunk, context) || 'days';
    var locale = dust.helpers.tap(params.locale, chunk, context) || 'en';
    var isUnixTimeStamp = dust.helpers.tap(params.unix, chunk, context) || false;

    moment.lang(locale);

    switch (type) {
      case 'format':
        if (date instanceof Date) {
          return chunk.write(moment(date).format(format));
        } else {
          return chunk.write(moment(date, format).format(format));
        }
        break;
      case 'format-unix-milliseconds':
        return chunk.write(moment.unix(date / 1000).format(format));
        break;
      case 'format-unix-seconds':
        return chunk.write(moment.unix(date).format(format));
        break;
      case 'fromNow':
        if (isUnixTimeStamp) {
          return chunk.write(moment.unix(date).fromNow());
        } else {
          if (date instanceof Date) {
            return chunk.write(moment(date).fromNow());
          } else {
            return chunk.write(moment(date, format).fromNow());
          }
        }
        break;
      case 'subtract':
        if (date instanceof Date) {
          return chunk.write(moment(date).subtract(input, value).calendar());
        } else {
          return chunk.write(moment(date, format).subtract(input, value).calendar());
        }
        break;
      case 'add':
        if (date instanceof Date) {
          return chunk.write(moment(date).add(input, value).calendar());
        } else {
          return chunk.write(moment(date, format).add(input, value).calendar());
        }
        break;
    }
  };

  return dust;

}));


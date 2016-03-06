(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['dustjs-linkedin', 'moment-timezone'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('dustjs-linkedin'), require('moment-timezone'));
  } else {
    factory(root.dust, root.moment);
  }
}(this, function (dust, moment) {

  // format
  dust.helpers.moment = function (chunk, context, bodies, params) {
    var type = dust.helpers.tap(params.type, chunk, context) || 'format';
    var date = dust.helpers.tap(params.date, chunk, context) || new Date();
    var format = dust.helpers.tap(params.format, chunk, context) || 'MMM Do YYYY';
    var input = dust.helpers.tap(params.input, chunk, context) || 1;
    var value = dust.helpers.tap(params.value, chunk, context) || 'days';
    var locale = dust.helpers.tap(params.locale, chunk, context) || 'en';

    moment.locale(locale);

    switch (type) {
      case 'format':
        return chunk.write(moment.tz(date, 'America/Toronto').format(format));
        break;
      case 'format-unix-milliseconds':
        return chunk.write(moment.unix(date / 1000).format(format));
        break;
      case 'format-unix-seconds':
        return chunk.write(moment.unix(date).format(format));
        break;
      case 'fromNow':
        return chunk.write(moment.tz(date, 'America/Toronto').fromNow());
        break;
      case 'subtract':
        return chunk.write(moment.tz(date, 'America/Toronto').subtract(input, value).calendar());
        break;
      case 'add':
        return chunk.write(moment.tz(date, 'America/Toronto').add(input, value).calendar());
        break;
    }
  };

  return dust;

}));


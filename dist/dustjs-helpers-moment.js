function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=e(require("dustjs-linkedin")),t=e(require("moment"));a.helpers.moment=function(e,r,n,o){var i=a.helpers.tap(o.type,e,r)||"format",l=a.helpers.tap(o.date,e,r)||new Date,m=a.helpers.tap(o.format,e,r)||"MMM Do YYYY",s=a.helpers.tap(o.input,e,r)||1,u=a.helpers.tap(o.value,e,r)||"days",p=a.helpers.tap(o.locale,e,r)||"en",c=a.helpers.tap(o.unix,e,r)||!1;return e.write(function(e){var a=e.type,t=e.date,r=e.format,n=e.input,o=e.value,i=e.isUnixTimeStamp;void 0===i&&(i=!1);var l,m=e.moment;switch(m.locale(e.locale),a){case"format":l=m(t).format(r);break;case"subtract":l=m(t).subtract(n,o).calendar();break;case"add":l=m(t).add(n,o).calendar();break;case"format-unix-milliseconds":l=m.unix(t/1e3).format(r);break;case"format-unix-seconds":l=m.unix(t).format(r);break;case"fromNow":l=i?m.unix(t).fromNow():m(t).fromNow()}return l}({type:i,date:l,format:m,input:s,value:u,locale:p,isUnixTimeStamp:c,moment:t}))||a};

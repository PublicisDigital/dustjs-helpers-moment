dustjs-helpers-moment
=====================

Helpers Moment.js for dustjs-linkedin package

[![KrakenJS Logo](http://krakenjs.com/img/kraken.svg)](http://krakenjs.com/)

#Install dependencie

    npm install dustjs-helpers-moment --save

### On ./config/config.json find this code

    "view engines": {
        "js": {
          "module": "engine-munger",
          "renderer": {
            "method": "js",
            "arguments": [
              { "cache": true },
              {
                "views": "config:express.views",
                "view engine": "config:express.view engine",
                "specialization": "config:specialization",
                "i18n": "config:i18n"
              }
            ]
          }
        }
      },


### Replace with:

    "view engines": {
        "js": {
          "module": "engine-munger",
          "renderer": {
            "method": "js",
            "arguments": [
              { "cache": true, "helpers": ["dustjs-helpers-moment"] },
              {
                "views": "config:express.views",
                "view engine": "config:express.view engine",
                "specialization": "config:specialization",
                "i18n": "config:i18n"
              }
            ]
          }
        }
      },

**type**: (optional)

* format (**Default**)
* fromNow
* subtract
* add

**date**: (optional)

* new Date() (**Default**)

**format**: (optional)

* MMM Do YYYY (**Default**)

**input**: (optional)

* 1 (**Default**)

**value** (optional)

* days (**Default**)

**locale**: (optional)

* en (**Default**)


## format

    <span>
        {@moment type="format" date="{youreDate}" format="YYYY. MMMM Do HH:mm" locale="es"/}
    </span>

## fromNow

    <span>
        {@moment type="fromNow" date="{youreDate}" locale="es"/}
    </span>

## subtract

    <span>
        {@moment type="subtract" date="{youreDate}" input="10" value="days" locale="es"/}
    </span>

## add

    <span>
        {@moment type="add" date="{youreDate}" input="10" value="days" locale="es"/}
    </span>

Complete documentation for methods, inputs, values and locales [http://momentjs.com/](http://momentjs.com/).

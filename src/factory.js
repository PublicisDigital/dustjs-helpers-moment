import formatter from "./formatter";
import dust from 'dustjs-linkedin';
import moment from 'moment';

export default function factory() {

    // format
    dust.helpers.moment = function(chunk, context, bodies, params) {
        var type = dust.helpers.tap(params.type, chunk, context) || 'format';
        var date = dust.helpers.tap(params.date, chunk, context) || new Date();
        var format = dust.helpers.tap(params.format, chunk, context) || 'MMM Do YYYY';
        var input = dust.helpers.tap(params.input, chunk, context) || 1;
        var value = dust.helpers.tap(params.value, chunk, context) || 'days';
        var locale = dust.helpers.tap(params.locale, chunk, context) || 'en';
        var isUnixTimeStamp = dust.helpers.tap(params.unix, chunk, context) || false;

        const formattedDate = chunk.write(
            formatter({
                type, date, format, input, value, locale, isUnixTimeStamp, moment
            })
        );

        return formattedDate ? formattedDate : dust;
    }
}

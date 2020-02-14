/**
 * The Main formatter function to format the date.
 * Moved it to a separate file so it can be tested.
 */
export default function formatter({ 
    type,
    date,
    format,
    input,
    value,
    locale,
    isUnixTimeStamp = false,
    moment
}) {

    moment.locale(locale);
    let returnValue;

    switch (type) {
        case 'format':
            returnValue = moment(date).format(format);
            break;
        case 'subtract':
            returnValue = moment(date).subtract(input, value).calendar();
            break;
        case 'add':
            returnValue = moment(date).add(input, value).calendar();
            break;
        case 'format-unix-milliseconds':
            returnValue = moment.unix(date / 1000).format(format);
            break;
        case 'format-unix-seconds':
            returnValue = moment.unix(date).format(format);
            break;
        case 'fromNow':
            if (isUnixTimeStamp) {
                returnValue = moment.unix(date).fromNow();
            } else {
                returnValue = moment(date).fromNow();
            }
            break;
    }

    return returnValue;
}
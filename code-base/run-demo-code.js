const dateTimeFromNow = (timestamp) => {

    const toTwo = (num) => {
        return ('00' + String(num)).slice(-2);
    }

    const now = new Date().getTime();

    const interval = dateTime - now;
    const intervalDay = interval / 1000 / 3600 / 24;

    const intervalHour = intervalDay % 1 * 24;
    const intervalMin = intervalHour % 1 * 60;
    const intervalSec = intervalMin % 1 * 60;

    return `${parseInt(intervalDay)}天 ${intervalHour}:${intervalMin}:${intervalSec}`;
}

// https://tools.ietf.org/html/rfc3986
// Syntax Components
/**
 *      foo://example.com:8042/over/there?name=ferret#nose
         \_/   \______________/\_________/ \_________/ \__/
          |           |            |            |        |
       scheme     authority       path        query   fragment
          |   _____________________|__
         / \ /                        \
         urn:example:animal:ferret:nose
 */

const URL_RE = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

const addQueryForUrl = (url, key, value) => {
    if (!URL_RE.test(url)) {
        throw new Error('not a right url');
    }

    // No add query
    if (!key || !value) return url;

    const [ urlWithoutFragment, fragment ] = url.split('#');
    const [ urlWithPath, query ] = urlWithoutFragment.split('?');
    const hasQuery = url.indexOf('?') > -1;
    const fragmentStr = fragment ? `#${fragment}` : '';

    const queryObj = {};
    if (hasQuery) {
        const arr = query.split("&");
        arr.forEach(q => {
            const [key, value] = q.split('=');
            queryObj[key] = value;
        });
        queryObj[key] = value;
    } else {
        queryObj[key] = value;
    }

    const queryString = JSON.stringify(queryObj)
        .replace(/[\"\{\}]/g,"")
        .replace(/\:/g,"=")
        .replace(/\,/g,"&");

    return `${urlWithPath}?${queryString}${fragmentStr}`;
}

module.exports = addQueryForUrl;
import DeviceInfo from 'react-native-device-info';
import qs from 'qs';

function fetchRequest(url, opts={}) {
    let timeout = 5000;
    let _fetchOpts = {
        credentials: 'include',
        method: 'GET',
        headers: {
            Host: 'www.baidu.com',
            'X-App-Version': DeviceInfo.getVersion(),
            'X-Device-ID': DeviceInfo.getUniqueID(),
        }
    };
    if (opts.qs) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + qs.stringify(opts.qs, { indices: !!!opts.qsStringfyOptions });
    }
    if (opts.json) {
        _fetchOpts.headers['Content-Type'] = 'application/json';
        _fetchOpts.body = JSON.stringify(opts.json);
    }
    if (opts.form) {
        _fetchOpts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        _fetchOpts.body = qs.stringify(opts.form, {indices: !!!opts.qsStringfyOptions});
    }
    if (opts.method) {
        _fetchOpts.method = opts.method
    }
    if (opts.formData) {
        _fetchOpts.headers['Content-Type'] = 'multipart/form-data';
        var form = new FormData();
        for (var key of opts.formData) {
            form.append(key, opts.formData[key]);
        }
        _fetchOpts.body = form;
    }
    if (opts.timeout !== undefined) {
        timeout = opts.timeout;
    }
    if (opts.credentials) {
        _fetchOpts.credentials = opts.credentials;
    }
    /* top level priority varibale set in the end */
    if (opts.headers) {
        Object.assign(_fetchOpts.headers, opts.headers);
    }
    if (opts.body) {
        _fetchOpts.body = opts.body;
    }
    const baseURL = opts.baseURL || '';
    return timeoutFetch(fetch(baseURL + url, _fetchOpts), timeout).then(function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            var error = new Error('网络异常');
            error.response = response;
            throw error;
        }
    }, function timeoutFn(error) {
        var error = new Error('网络超时');
        throw error;
    });
}

function timeoutFetch(fetchPromise, timeout) {
      let abortFn = null;

      //这是一个可以被reject的promise
      const abortPromise = new Promise(function(resolve, reject) {
             abortFn = function() {
                reject('timeout');
             };
      });

      //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
       const abortablePromise = Promise.race([
             fetchPromise,
             abortPromise
       ]);

       setTimeout(function() {
             abortFn();
        }, timeout);

       return abortablePromise;
}


export default fetchRequest;

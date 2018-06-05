/**
* 将字符串截成最多 24 字符的串，中文算 2 个字符，并带上后缀
* @param {String} str 需要截取的字符串
* @param {String} aimLength 目标长度
* @param {String} suffix 后缀
* @return {String}
*/
export function cutOffString (str='', aimLength=24, suffix='...') {
    let realLength = 0,
        len = str.length,
        needLength = 0,
        needStr = '',
        charCode = -1;

    for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) {
            realLength += 1;
        } else {
            realLength += 2;
        }
        needLength = i;
        if (realLength > aimLength) break;
    }
    needStr = realLength <= aimLength ? str : str.slice(0, needLength) + suffix;
    return needStr;
}

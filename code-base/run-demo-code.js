const getWithDefault = (obj, key, defaultVal) => {
    /* key  a.b.c */
    try {
        const keys = key.split('.')
        let r = obj
        let k = keys.shift()

        while (k) {
            r = r[k]
            k = keys.shift()
        }
        return r || []
    } catch (e) {
        return defaultVal
    }
}

const obj = {
  q: 'q',
  w: 'w',
}
const output = getWithDefault(obj, 'a.b', 'defaultValue');

console.log(output);

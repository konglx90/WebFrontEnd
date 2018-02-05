
/**
 * 基于 AsyncStorage 做持久化存储、缓存
 */
import { AsyncStorage } from 'react-native';

/**
 * 每天 86400000 毫秒
 */
const MILLISECONDS_EACH_DAY = 24 * 60 * 60 * 1000;

/**
 * TODO to enums
 * Keys of AsyncStorage item
 */
export const Keys = {
    CITY_CIRCLES: 'city_circles',
    SUBWAY_CIRCLES: 'subway_circles',
    USER_INFO: 'user_info',
    FLUSH_INFO: 'flush_info',
    LOCATION_INFO: 'location_info',
    STORE_REVIEW: 'store_review',
    SEARCH_HISTORY: 'search_history'
};

/**
 * Return cache Api by use store key
 *
 *
 * @param {String} key
 * @param {Number} defaultExpire
 * @return {object}
 */
const generateCacheApi = (key, defaultExpire = 7 * MILLISECONDS_EACH_DAY) => {
    return {
        set: (data, expire = defaultExpire) => {
            const _data = {
                data,
                expire,
                time: new Date().getTime(),
            };
            return AsyncStorage.setItem(key, JSON.stringify(_data));
        },
        get: () => {
            return AsyncStorage.getItem(key).then((res) => {
                if (!res) {
                    return null;
                }

                let { data, time, expire } = JSON.parse(res);

                // expire is null means never Expired
                if (expire === null) {
                    return data;
                }

                const now = new Date().getTime();
                if (now - time > expire) {
                    return null;
                }
                return data;
            });
        }
    }
}

export const subwayCirclesCache = generateCacheApi(Keys.SUBWAY_CIRCLES, 7 * MILLISECONDS_EACH_DAY);
export const cityCirclesCache = generateCacheApi(Keys.CITY_CIRCLES, 7 * MILLISECONDS_EACH_DAY);
export const userInfoCache = generateCacheApi(Keys.USER_INFO, 30 * MILLISECONDS_EACH_DAY);
export const flushInfoCache = generateCacheApi(Keys.FLUSH_INFO, 6 * 3600 * 1000);
export const locationCache = generateCacheApi(Keys.LOCATION_INFO, 3600 * 1000);

// 第二个参数null表示如果不卸载app重装, 存储永久不过期
export const storeReviewCache = generateCacheApi(Keys.STORE_REVIEW, null);
export const searchHistoryCache = generateCacheApi(Keys.SEARCH_HISTORY, null);

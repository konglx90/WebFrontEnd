// @flow

import fetchRequest from './fetch';
import config from './config';

const BASE_URL = `${config.apiPrefix}`;

const baseFetch = (url, opts = {}) => {
    return fetchRequest(url, {
        baseURL: BASE_URL,
        ...opts,
    }).then(res => {
        return res;
    }).catch(error => {
        throw error;
    });
}

// **** business code ****

const News = {
    // 获取最新的新闻日报
    getLastest: () => baseFetch(`/news/latest`),
    // 获取新闻内容详情
    getDetail: (id: number) => baseFetch(`/news/${id}`),
    // 输入新闻的ID，获取对应新闻的额外信息，如评论数量，所获的『赞』的数量
    getExtra: (id: number) => baseFetch(`/story-extra/${id}`),
    // 获取具体某天之前一天的新闻
    // @param day {String|Number} 20170506
    getListBeforeDay: (day: number|string) => baseFetch(`news/before/${day}`)
}

export default {
    News,
};

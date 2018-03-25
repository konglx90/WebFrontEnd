const axios = require('axios');
const cheerio = require('cheerio');

var rootUrl = 'https://so.m.jd.com/ware/search.action?keyword=%E5%8D%8E%E4%B8%BA&searchFrom=search';

function getTitle($) {
  return $('.title').text();
}

function getATag($) {
  return $('a');
}

// Make a request for a user with a given ID
axios.get(rootUrl)
  .then(function (response) {
    const $ = cheerio.load(response.data);
    const title = getTitle($);
    const a = getATag($);

    console.log(response.data, title, a);
  })
  .catch(function (error) {
    console.log(error);
  });

var page = require('webpage').create();
page.open('http://www.kuaizhan.com', function(status) {
  if (status !== 'success') {
    console.log('Unable to access network');
  } else {
    var topicTitle = page.evaluate(function() {
      return document.getElementsByClassName('topic-title')[0].textContent;
    });
    console.log(topicTitle);
  }
  phantom.exit();
});

var page = require('webpage').create();
page.open('http://www.kuaizhan.com', function() {
  console.log('open kuaizhan')
  // page.includeJs("https://kzcdn.itc.cn/res/homepage/js/jquery-1.8.3.min.js?v=5.0", function() {
    var changyan = page.evaluate(function() {
      $('.changyan')[0].click();
      // return $('.changyan')[0].offsetHeight;
      return SOHUZ;
    });
    console.log(changyan.wwwurl);
    phantom.exit()
  // });
});

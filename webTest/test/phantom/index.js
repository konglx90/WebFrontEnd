// a phantomjs example
var page = require('webpage').create();
page.open("https://www.kuaizhan.com", function(status) {
   if ( status === "success" ) {
      console.log(page.title);
      page.render('kuaizhan.png');
   } else {
      console.log("Page failed to load.");
   }
   phantom.exit(0);
});

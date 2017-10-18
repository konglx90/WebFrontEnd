
////////////////////////////////////////////
//	Utils
var _ = R;
var	Impure	=	{
	getJSON:	_.curry(function(callback,	url)	{
			$.getJSON(url,	callback);
	}),
  setHtml:	_.curry(function(sel,	html)	{
    $(sel).html(html);
  })
};
var	img	=	function	(url)	{
  return	$('<img	/>',	{	src:	url	});
};
var	trace	=	_.curry(function(tag,	x)	{
  console.log(tag,	x);
  return	x;
});
var	url	=	function	(t)	{
  return	'https://api.flickr.com/services/feeds/photos_public.gne?tags='	+	t	+	'&format=json&jsoncallback=?';
};
////////////////////////////////////////////
// var	mediaUrl	=	_.compose(_.prop('m'),	_.prop('media'));
// var	srcs	=	_.compose(_.map(mediaUrl),	_.prop('items'));
// var	images	=	_.compose(_.map(img),	srcs);
// var	renderImages	=	_.compose(Impure.setHtml("body"),	images);
// var	app	=	_.compose(Impure.getJSON(renderImages),	url);
// app("cats");
////////////////////////////////////////////
// $.getJSON(url('cats'), function(data) {
//   var items = data.items;
//   var images = [];
//   for (var i=0; i<items.length; i++) {
//     images.push(img(items[i].media.m));
//   }
//   Impure.setHtml('body', images);
// })
/////////////////////////////////////////////
// $.getJSON(url('cats')).then((data) => {
//   Impure.setHtml('body', data.items.map(i => img(i.media.m)));
// })
///////////////////////////////////////////
// 重构函数式
//	map	的组合律
///////// var	law	=	compose(map(f),	map(g))	==	map(compose(f,	g));
// 循环一次
var	mediaUrl	=	_.compose(_.prop('m'),	_.prop('media'));
var	mediaToImg	=	_.compose(img,	mediaUrl);
var	images	=	_.compose(_.map(mediaToImg),	_.prop('items'));
var	renderImages	=	_.compose(Impure.setHtml("body"),	images);
var	app	=	_.compose(Impure.getJSON(renderImages),	url);
app("cats");

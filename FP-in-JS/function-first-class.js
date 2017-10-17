// 太傻了
var getServerStuff = function(callback){
  return ajaxCall(function(json){
    return callback(json);
  });
};
// 这才像样
var getServerStuff = ajaxCall;

// 这行
return ajaxCall(function(json){
  return callback(json);
});
// 等价于这行
return ajaxCall(callback);
// 那么，重构下 getServerStuff
var getServerStuff = function(callback){
  return ajaxCall(callback);
};
// ...就等于
var getServerStuff = ajaxCall; // <-- 看，没有括号哦

/**
 * Created by kong90 on 16-5-22.
 */

// npm install crypto-js
var md5 = require('crypto-js/md5');
var ciphertext = '7E38890B870934B126F66857ED6B57B9';
//for (var i = 19800101; i < 20000101; i++) {
//  if(md5(i + '').toString().toUpperCase() === ciphertext){
//    console.log(i);
//      return
//  }
//}

console.log(md5('qlcoder').toString())
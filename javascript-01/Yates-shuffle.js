/**
 * Created by kong90 on 16-5-18.
 */

/*
对数组洗牌， 随机取下标
 */

function shuffle(arr){
    var i,
        j,
        temp;
    for(i=arr.length-1; i>0; i--){
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

var arr2 = shuffle([1, 2, 3, 4, 5, 6, 7, 8])
console.log(arr2)
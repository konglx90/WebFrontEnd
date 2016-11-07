/**
 * Created by kong90 on 16-9-17.
 */

function merge(left, right) {
    var result = [];
    while (left.length>0 && right.length>0){
        if(left[0]<right[0]){
            result.push(left.shift());
        }else {
            result.push(right.shift());
        }
    }
    if (left.length>0){
        result = result.concat(left);
    }
    if (right.length>0){
        result = result.concat(right);
    }
    return result;
}

function merge_sort(arr) {
    var len = arr.length,
        middle = Math.floor(len / 2);
    if (len<=1){
        return arr;
    }

    var left = arr.slice(0, middle);
    var right = arr.slice(middle, len);
    return merge(merge_sort(left), merge_sort(right));
}
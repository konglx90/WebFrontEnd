/**
 * Created by kong90 on 16-5-18.
 */
/*
斐波那契数列的递归求解
 */

var fibo = function(nu){
    return nu ? nu<2 : fibo(nu-1) + fibo(nu-2);
}


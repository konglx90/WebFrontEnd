/**
 * Created by kong90 on 16-9-16.
 */

var arr = [1, 10, 12, 100, 5, 6];

/** 冒泡排序
 * 什么时候最快（Best Cases）：
 当输入的数据已经是正序时（都已经是正序了，我还要你冒泡排序有何用啊。。。。）

 什么时候最慢（Worst Cases）：
 当输入的数据是反序时（写一个for循环反序输出数据不就行了，干嘛要用你冒泡排序呢，我是闲的吗。。。）

 文／不是小羊的肖恩（简书作者）
 原文链接：http://www.jianshu.com/p/1b4068ccd505
 著作权归作者所有，转载请联系作者获得授权，并标注“简书作者”。
 * @param arr
 * @returns {*}
 */
function bubble_sort(arr) {
    var len = arr.length,
        tmp;

    for (var i = 0; i < len - 1; i++) {
        for (var j = 1; j < len - i; j++) {
            if (arr[j - 1] > arr[j]) {
                tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
    }

    return arr;
}


/** 选择排序
 * 表现最稳定的排序算法之一，因为无论什么数据进去都是O(n²)的时间复杂度。。。
 * 所以用到它的时候，数据规模越小越好。
 * 唯一的好处可能就是不占用额外的内存空间了吧。
 * @param arr
 * @returns {*}
 */
function select_sort(arr) {
    // var arr = JSON.parse(JSON.stringify(arr));
    var min_index,
        tmp;
    for (var i = 0, len = arr.length; i < len - 1; i++) {
        min_index = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[min_index] > arr[j]) {
                min_index = j;
            }
        }
        tmp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = tmp;
    }
    return arr;
}


/**
 * 插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。
 * 当然，如果你说你打扑克牌摸牌的时候从来不按牌的大小整理牌，那估计这辈子你对插入排序的算法都不会产生任何兴趣了。。。
 * @param arr
 * @returns {*}
 */
function insert_sort(arr) {
    var arr = JSON.parse(JSON.stringify(arr));
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var j = i;
        while (j - 1 >= 0 && arr[j] < arr[j - 1]) {
            var tmp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = tmp;

            j = j - 1;
        }
    }
    return arr;
}  // 效率有问题

function insert_sort_good(arr) {
    var arr = JSON.parse(JSON.stringify(arr));
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var j = i;
        var tmp = arr[i];
        while (j - 1 >= 0 && tmp < arr[j - 1]) {
            arr[j] = arr[j - 1];
            j = j - 1;
        }
        arr[j] = tmp;
    }
    return arr;
} // 效率变好了

function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}


/** 希尔排序
 *
 * @param arr
 * @returns {*}
 */
function shell_sort(arr) {
    var arr = JSON.parse(JSON.stringify(arr));
    var len = arr.length,
        temp,
        gap = 1;
    while (gap < len / 3) {          //动态定义间隔序列
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}

function shell_sort_good(arr) {
    var arr = JSON.parse(JSON.stringify(arr));
    var len = arr.length,
        gap = 1;

    while (gap < len / 3) {          //动态定义间隔序列
        gap = gap * 3 + 1;
    }

    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        // for (var i = gap; i < len; i=i++) {  不要在写这样的死循环了
        for (var i = gap; i < len; i++) {
            var j = i,
                tmp = arr[i];
            while (j - gap >= 0 && tmp < arr[j - gap]) {
                arr[j] = arr[j - gap];
                j = j - gap;
            }

            arr[j] = tmp;
        }
    }
    return arr;
}


/**
 * 自上而下的递归（所有递归的方法都可以用迭代重写，所以就有了第2种方法）
 自下而上的迭代
 * @param arr
 * @returns {*}
 */
function merge_sort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(merge_sort(left), merge_sort(right));
}

function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}


/** 快速排序
 *  又是一种分而治之思想在排序算法上的典型应用。本质上来看，快速排序应该算是在冒泡排序基础上的递归分治法。
 快速排序的名字起的是简单粗暴，因为一听到这个名字你就知道它存在的意义，就是快，而且效率高! 它是处理大数据最快的排序算法之一了。虽然Worst Case的时间复杂度达到了O(n²)，但是人家就是优秀，在大多数情况下都比平均时间复杂度为O(n log n) 的排序算法表现要更好，可是这是为什么呢，我也不知道。。。好在我的强迫症又犯了，查了N多资料终于在《算法艺术与信息学竞赛》上找到了满意的答案：

 快速排序的最坏运行情况是O(n²)，比如说顺序数列的快排。但它的平摊期望时间是O(n log n) ，且O(n log n)记号中隐含的常数因子很小，比复杂度稳定等于O(n log n)的归并排序要小很多。所以，对绝大多数顺序性较弱的随机数列而言，快速排序总是优于归并排序。

 * @param arr
 * @returns {*}
 */
function quick_sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var pa = arr[0],
        left = [],
        right = [];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pa) {
            left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    }
    console.log(arr);
    return quick_sort(left).concat(pa).concat(quick_sort(right));
}



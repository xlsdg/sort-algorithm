function quickSort(array) {
  var swap = function(x, y) {
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
  };

  // 数组分区，左小右大
  var partition = function(left, right) {
    var storeIndex = left;
    var pivot = array[right]; // 直接选最右边的元素为基准元素
    for (var i = left; i < right; i++) {
      if (array[i] < pivot) {
        swap(storeIndex, i);
        storeIndex++; // 交换位置后，storeIndex 自增 1，代表下一个可能要交换的位置
      }
    }
    swap(right, storeIndex); // 将基准元素放置到最后的正确位置上
    return storeIndex;
  }

  var sort = function(left, right) {
    if (left > right) {
      return;
    }

    var storeIndex = partition(left, right);

    sort(left, storeIndex - 1);
    sort(storeIndex + 1, right);
  }

  sort(0, array.length - 1);

  return array;
}

(function(sort) {
  var random = function(max) {
    var array = [];
    for (var i = 0; i < max; i++) {
      array[i] = i;
    }
    array.sort(function() {
      return 0.5 - Math.random();
    });
    return array;
  };

  var test = function(count) {
    for (var i = 0; i < count; i++) {
      var array = random(10);
      console.log('[No.' + (i + 1) + '] begin: ', array);
      console.time('time');
      console.log('[No.' + (i + 1) + '] end: ', sort(array));
      console.timeEnd('time');
    }
  };

  test(3);
}(quickSort));

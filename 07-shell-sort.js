function shellSort(array) {
  var swap = function(x, y) {
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
  };

  var length = array.length,
    gap = Math.floor(length / 2);
  while (gap > 0) {
    for (var i = gap; i < length; i++) {
      for (var j = i; 0 < j; j -= gap) {
        if (array[j - gap] > array[j]) {
          swap(j - gap, j);
        } else {
          break;
        }
      }
    }
    gap = Math.floor(gap / 2);
  }

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
}(shellSort));

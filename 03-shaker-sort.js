function shakerSort(array) {
  var swap = function(x, y) {
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
  };

  var min = 0;
  var max = array.length - 1;

  while (min < max) {
    for (var j = min; j < max; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1);
      }
    }
    --max;
    for (var j = max; j > min; j--) {
      if (array[j] < array[j - 1]) {
        swap(j, j - 1);
      }
    }
    ++min;
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
}(shakerSort));

function bubbleSort(array) {
  var swap = function(x, y) {
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
  };

  var i = array.length - 1;
  while (i > 0) {
    var pos = 0;
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        pos = j;
        swap(j, j + 1);
      }
    }
    i = pos;
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
}(bubbleSort));

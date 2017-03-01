function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var curr = array[i];
    for (var j = i; j >= 0; j--) {
      if (array[j - 1] > curr) {
        array[j] = array[j - 1];
      } else {
        array[j] = curr;
        break;
      }
    }
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
}(insertionSort));

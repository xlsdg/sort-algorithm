function binarySort(array) {
  for (var i = 1; i < array.length; i++) {
    var key = array[i],
      left = 0,
      right = i - 1;
    while (left <= right) {
      var middle = Math.floor((left + right) / 2);
      if (key < array[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    for (var j = i - 1; j >= left; j--) {
      array[j + 1] = array[j];
    }
    array[left] = key;
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
}(binarySort));

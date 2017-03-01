function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivotIndex = Math.floor(array.length / 2);
  var pivot = array.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
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

function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        sum += arr[i];
      }
    }
    return sum;
  }
  
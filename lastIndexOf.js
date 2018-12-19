function lastIndexOf(arr, x){
  var out;

  for(var i = 0; i < arr.length; i++){
    if(x == arr[i]){
      out = i;
    }
  }

  if(out === undefined){
    out = -1;
  }

  return out;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
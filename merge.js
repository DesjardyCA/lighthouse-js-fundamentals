function merge(arr1, arr2){
  for(var i = 0; i < arr2.length; i++){
    arr1.push(arr2[i]);
  }

  return merger(arr1);
}

function merger(arr){
  var changed = false;

  for(var i = 0; i < arr.length; i++){
    if(bigger(arr[i],arr[i + 1])){
      var temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;

      changed = true;
    }
  }

  if(changed){
    arr = merger(arr);
  }
  return arr;
}

function bigger(x, y){
  if(x > y){
    return true;
  }
  else{
    return false;
  }
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
function range(start, end, step){
  var someArray = [];

  if(start > end || step < 0 || start === undefined || end === undefined || step === undefined){
    return someArray;
  }
  else{
    do{
      someArray.push(start);
      start += step;
    }while(end >= start);

    return someArray;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-9, 3, 3));
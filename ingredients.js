var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var i = 0;
// Write a while loop that prints out the contents of ingredients:
console.log("While Loops");
while(i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
console.log("For Loops");
for(var i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
i--;
console.log("Backwards");
do{
  console.log(ingredients[i]);
  i--;
}while(i >= 0)
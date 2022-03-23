/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let firstArray = ["Eric", "KA", "Jake", "Mom", "Dad", "Carl", "Beppie"];
console.log("OG: ", firstArray);

firstArray.pop();
console.log("Remove last: ", firstArray);

firstArray.unshift(firstArray.pop());
console.log("Last item now first:", firstArray);

firstArray.sort();
console.log("Sort", firstArray);

let findItem = firstArray.find(function (item) {
  if (item === "KA") {
    return item;
  }
});
console.log("Find KA:", findItem);

firstArray.splice(firstArray.indexOf(findItem), 1);
console.log("Remove KA", firstArray);

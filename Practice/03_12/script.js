/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import IPhone from "./iPhone.js";

const ericiPhone = new IPhone(
  "Eric's Phone",
  "Black",
  6,
  true,
  true,
  false,
  true
);

console.log("The ericiPhone object:", ericiPhone);
console.log("The year value:", ericiPhone.yearOld);

console.log("Glitter before:", ericiPhone.accessories.glitter);

ericiPhone.newAccessories(true, true, true);

console.log("Glitter after:", ericiPhone.accessories.glitter);

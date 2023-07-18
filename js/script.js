/*Q1: 
1. Create an array called grades and put the following values: 56, 87, 99, 40
2. Add another element at the end of the array with value: 68
3. Remove the 1st element of the array
4. Change 40 to 60.
5. Create a variable called average and compute for the average of the grades array.
    Tip: you can create another variable as a placeholder for the sum first.
*/

const grades = [56, 87, 99, 40]; //Create an array called grades and put the following values:  56, 87, 99, 40
console.log(grades);
grades.push(68); // Add another element at the end of the array with value: 68                  56, 87, 99, 40, 68
console.log(grades);
grades.shift(); // Remove the 1st element of the array                                          87, 99, 40, 68
console.log(grades);
grades[2] = 60; // Change 40 to 60.                                                             87, 99, 60, 68
console.log(grades);
let average = 0
average += grades[0];
average += grades[1];
average += grades[2];
average += grades[3];
average = average / grades.length;

console.log(average);



/*Q2:
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
Feel free to put any value.
2. Use the for-in loop to display both the properties and values of the object.
*/

const vehicle = {
  make: "Ram",
  brand: "2500",
  year: 2019,
  numWheels: "three",
  isEnvironmentFriendly: false
};

console.log(vehicle);

// Loop through years
for (let x in vehicle) {
  console.log(x + " " + vehicle[x]);
}


/*

Color List:
- Create a function that can take in arrays
- Create an array of colors.
- Create an array of suffixes for placement.
Filter through both arrays and print out the placement and color for each individual color until all of the clors are listd out with appropriate placement.
Stop at 10

*/

function colors() {

    let color = ["red", "blue", "yellow", "green", "orange", "pink", "purple", "white", "black", "grey"];

    let suffix = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"];

 for (let i = 0; i <10; i++) {
     let placement = color[i] + ' is ' + suffix[i];
     console.log(placement);

 }
}

colors(); // this code works. this was my solution with wes.


let color = ["red", "blue", "yellow", "green", "orange", "pink", "purple", "white", "black", "grey"];

let suffix = ["st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th"];

function colorNumbers(colorArray, suffixArray) {

    for (let i = 0 ; i < 10; i++) {

console.log(`${i+1}${suffixArray[i]} is ${colorArray[i]}`)
    }


};

colorNumbers(color, suffix);  //this was ing's solution



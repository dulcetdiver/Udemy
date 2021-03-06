//********************
// Values and Variables
//********************

// let country = "USA";
// let continent = "North America";
// let population = 350000000;

// console.log(country, continent, population);

//********************
//Data Types
//********************
// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

//********************
//let, const and var
//********************
// language = "English";
//const isIsland = false;
//console.log(language, isIsland);
//syntax error, isIsland has already been declared

//********************
//Basic Operators
//********************
// let countrySplitInHalf = population / 2;
// let increaseCountryPopBy1 = population + 1;
// let Finland = 6000000;
// let compareCountry = population > Finland;
// let avgPopCountry = 33000000;
// let compareCountry2 = avgPopCountry >= population;
// let description =
//   country +
//   " is in " +
//   continent +
//   ". and its " +
//   population +
//   " million people speak " +
//   language +
//   "!";
// console.log(countrySplitInHalf);
// console.log(increaseCountryPopBy1);
// console.log(compareCountry);
// console.log(compareCountry2);
// console.log(description);

//********************
//Strings and Template Literals
//********************
// console.log(
//   `${country} is in ${continent} and its ${population} million people speak ${language}`
// );
//********************
//Taking Decisions: if / else Statements
//********************
// let usaPOP = 350000000;

// if (usaPOP > 33000000) {
//   console.log("USA population is above average");
// } else {
//   console.log("USA is below average in population and a lot of other things");
// }

//********************
//Type Conversion and Coercion
//********************
//addition sign interpreted as concatenation in type coercion
// console.log("9" - "5"); //4
// console.log("19" - "13" + "17"); //617 add sign for concatenation
// console.log("19" - "13" + 17); //23
// console.log("123" < 57); //false
// console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

//********************
//Equality Operators: == vs. ===
//********************
// let numNeighbors = prompt(
//   "How many neighbor countries does your country have?"
// );

// numNeighbors = Number(numNeighbors);
// if (numNeighbors === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//   console.log("more than 1 border!");
// } else {
//   console.log("no borders");
// }

//********************
//Logical Operators
//********************

// let countryPop = 350000000;
// let countrySpeakEnglish = true;
// let isCountryIsland = false;

// if (countryPop < 50000000 && countrySpeakEnglish && isCountryIsland) {
//   console.log("Come live in the USA!");
// } else {
//   console.log("USA doesnt meet your criteria");
// }

//********************
//The switch Statement
//********************
// let language = "english";
// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers");
//     break;
//   case "spanish":
//     console.log(`2nd place in native speakers`);
//     break;
//   case "english":
//     console.log(`third place`);
//     break;
//   case "hindi":
//     console.log(`4th place`);
//     break;
//   case "arabic":
//     console.log(`5th place`);
//     break;
//   default:
//     console.log("great language too!");
// }

//********************
//The Conditional (Ternary) Operator
//********************

// const population = 200000;
// const country = "USA";

// console.log(
//   `${country} population is ${
//     population > 33000000 ? "above" : "below"
//   } average!`
// );

//********************
// Functions
//********************
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const countryStats = describeCountry("USA", 1234, "Berka");
// console.log(countryStats);

// //********************
// //Function Declarations vs. Expressions
// //********************
// //function declaration
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// console.log(
//   `Your country represents ${percentageOfWorld1(
//     1441
//   )} percent of the world population.`
// );

// //function expression
// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// console.log(
//   `Your country represents ${percentageOfWorld2(
//     1500
//   )} percent of the world population.`
// );
// //********************
// //Arrow Functions
// //********************
// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// console.log(
//   `Your country represents ${percentageOfWorld3(
//     2000
//   )} percent of the world population.`
// );
//********************
//Functions Calling Other Functions
//********************
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// function describePopulation(country, population) {
//   return `Your ${country} represents ${percentageOfWorld1(
//     population
//   )} percent of the world population.`;
// }

// console.log(describePopulation("China", 1234));
// console.log(describePopulation("America", 12));
// console.log(describePopulation("Europe", 525234));
//********************
//Introduction to Arrays
//********************
// let population = [1243, 12, 123, 1564];
// if (population.length >= 4) {
//   console.log("True, has four elements");
// } else {
//   console.log("false, does not have more than 4 elements");
// }

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// let percentages = [
//   percentageOfWorld1(population[0]),
//   percentageOfWorld1(population[1]),
//   percentageOfWorld1(population[2]),
//   percentageOfWorld1(population[3]),
// ];
// console.log(percentages);
//********************
//Basic Array Operations (Methods)
//********************
// let neighbors = ["Greenland", "Canada", "Mexico"];
// //add to end of array
// neighbors.push("Utopia");
// console.log(neighbors);
// //remove at the end of array
// neighbors.pop("Utopia");
// console.log(neighbors);

// if (neighbors.includes("Germany")) {
//   console.log("This is a central european country");
// } else {
//   console.log("Probably not a central european country");
// }
// //change array value of selected index
// let indexOf = neighbors.indexOf("Canada");
// neighbors[indexOf] = "Republic of Canada";
// console.log(neighbors);

//********************
//Introduction to Objects
//********************
// const myCountry = {
//   country: "USA",
//   capital: "no capital",
//   language: "English",
//   population: 350000000,
//   neighbors: ["Canada", "Mexico", "Greenland"],
// };
//********************
//Dot vs. Bracket Notation
//********************
//use the myCountry object
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people and ${myCountry.neighbors.length} neighboring countries and ${myCountry.capital}`
// );
//********************
//Object Methods
//********************
// const myCountry = {
//   country: "USA",
//   capital: "no capital",
//   language: "English",
//   population: 350000000,
//   neighbors: ["Canada", "Mexico", "Greenland"],
//   describe: function () {
//     return `My country is the ${this.country} and it has ${this.capital}. Most of us speak ${this.language} and have a population of ${this.population} million. We have ${this.neighbors.length} neighboring countries, which are ${this.neighbors[0]}, ${this.neighbors[1]}, and ${this.neighbors[2]}`;
//   },
//   checkIsland: function () {
//     if (this.neighbors.length > 0) {
//       this.isIsland = false;
//       return `${this.country} has neighboring countries`;
//     } else {
//       this.isIsland = true;
//       return `${this.country} does not have any neighboring countries as is an Island`;
//     }
//   },
// };
// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());
// console.log(myCountry);
//********************
//Iteration: The for Loop
//********************
// for (vote = 1; vote <= 50; vote++) {
//   console.log(`Voter number ${vote} is currently voting`);
// }
//********************
//Looping Arrays, Breaking and Continuing
//********************
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// let populations = [234, 1324, 223, 555];
// let percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//   const percentOfPopulation = percentageOfWorld1(populations[i]);
//   percentages2.push(percentOfPopulation);
// }

// console.log(percentages2);
//********************
//Looping Backwards and Loops in Loops
//********************
// let listOfNeighbors = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbors.length; i++) {
//   for (let y = 0; y < listOfNeighbors[i].length; y++) {
//     console.log(`Neighbor: ${listOfNeighbors[i][y]}`);
//   }
// }

//********************
//The while Loop
//********************
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
let populations1 = [234, 1324, 223, 555];
let percentages3 = [];
let i = 0;
while (i < populations.length) {
  const percentOfPopulation = percentageOfWorld1(populations1[i]);
  percentages3.push(percentOfPopulation);
  i++;
}

console.log(percentages3);

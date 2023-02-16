 //  DONE Use a do...while loop to console.log the numbers from 1 to 1000.

const countToThousand = () => {
    let counter = 1
    do {
        console.log(counter);
        counter++
    } while (counter <= 1000)
}

countToThousand()

// DONE Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

// DONE Create a function that logs out the keys of the object using Object.keys().

const personKeys = () => {

console.log(Object.keys(person));}

personKeys()

// DONE Create a function that logs out the keys and values of the object using Object.entries().

const personValues = () => { 
    console.log(Object.entries(person)); 
}

personValues()

// DONE Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.


const arrayOfPersons = [
   
{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
},

{
    firstName: "John",
    lastName: "Anderson",
    birthDate: "Sept 20, 1994",
    gender: "male"
},

{
    firstName: "Dorothy",
    lastName: "Lewis",
    birthDate: "May 16, 1945",
    gender: "female"
},

{
    firstName: "Don",
    lastName: "Michaels",
    birthDate: "October, 4 2007",
    gender: "male"
}

]
// DONE Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.
const peopleBirthday = () => {
    for (const peep of arrayOfPersons) {
        let birthYear = peep.birthDate.slice(-4)
        if (birthYear % 2 != 0)
        {
            console.log(peep.birthDate);
        }

    }
}

peopleBirthday()

// DONE Use .map() to map over the arrayOfPersons and console.log() their information.

const mapOfPeople = (person) => {
    return [person.firstName, person.lastName, person.birthDate, person.gender].join(" ");
}

console.log(arrayOfPersons.map(mapOfPeople))

// DONE Use .filter() to filter the persons array and console.log only males in the array.


const onlyMales = arrayOfPersons.filter(person => (person.gender === "male"));

console.log(onlyMales);

// Create a function that returns true if the value of birthDate is before Jan 1, 1990. 
const bornBefore = () => {
    for (const peep of arrayOfPersons){
        if (peep.birthDate.slice(-4) < "1990") {
            console.log(peep.birthDate)
        }
}
}

bornBefore()

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990. Filter like onlyMales

const olderThanThirtyThree = arrayOfPersons.filter(person => (person.birthDate.slice(-4) < "1990"));

console.log(olderThanThirtyThree);

// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
const olderThanTwentyOne = () => {
    for (const peep of arrayOfPersons){
        if (peep.birthDate.slice(-4) <= "2002") {
            console.log(peep.birthDate)
        }
}
}

olderThanTwentyOne()

// BONUS - .filter() out the people in the array who are younger than 21.

const youngerThanTwentyOne = () => {
    for (const peep of arrayOfPersons){
        if (peep.birthDate.slice(-4) >= "2002") {
            console.log(`The birthday for the person younger than 21 is ${peep.birthDate}`)
        }
}
}

youngerThanTwentyOne()

//.find and .findIndex assignment

// Whiteboard
// Code plan
// Pseudo code
// JavaScript code in a Repl.it for both functions
// Turn in URL of Repl.it

// Build array

const ages = [5, 10, 18, 22, 37, 39, 43, 57, 68]

// Use .find to find first age younger than 30

const youngerThanThirty = ages.find(number => (number < 30));

console.log(youngerThanThirty);

// Use .findIndex to find index of first age over 40

const olderThanForty = ages.findIndex(number => (number > 40));

console.log(olderThanForty);





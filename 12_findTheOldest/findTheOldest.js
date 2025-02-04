const findTheOldest = (people) => people.reduce((oldest, person) => calculateAge(oldest) < calculateAge(person) ? person : oldest)

function calculateAge(person) {
    return person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth
}

// const DEPRECATEDfindTheOldest = function (people) {
//     let oldestPerson
//     let oldestPersonAge = 0
//     for (const person of people) {

//         let currentPersonAge = (person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear()) - person.yearOfBirth
//         console.log(currentPersonAge)
//         if (currentPersonAge > oldestPersonAge) {
//             oldestPerson = person
//             oldestPersonAge = currentPersonAge
//         }
//     }
//     return oldestPerson
// };

// Do not edit below this line
module.exports = findTheOldest;


// person.yearOfDeath - person.yearOfBirth
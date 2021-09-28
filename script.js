// Hoisting *Only the declarations using the var keyword are hoisted

// setName();
// function setName() {
//     var name = 'Tearyn';
//     console.log(name);
// }
// name = 'Tarrin';
// var name;
// console.log(name);

// name = 'Tarrin';
// let name;
// console.log(name)

// console.log('The Beginning');
// let avg = findAvg(2, 2);
// console.log('The Middle', avg);
// function findAvg(a, b) {
//     console.log('The End');
//     var answer = (a + b) / 2;
//     return answer;
// }


// Scoping 

// let fruits = ['strawberry', 'blueberry', 'blackberry'];

// //let favFruit;

// function printFruit() {
//     let favFruit = fruits[1];
//     console.log(fruits[0]);
    
//     function printFavFruit() {
//         console.log(favFruit);
//         let leastFav = 'grapefruit';
//         console.log(leastFav);
//     }   
// }


// printFruit();

// function printFavFruit() {
//     console.log(favFruit);
// }

helloYou();

function helloYou() {
    console.log('Hello, Tarrin!');
} 



let supAlert = function (){
    alert('Hi there, Tarrin!');
}

supAlert();

console.log('End of Script');
'use strict'

let name = "Vadim";
let age = 2001;
function x(){
    console.dir(`Hello, ${name}`);
}
x()


const range = (startNumber, endNumber) => {
    let array = [];
    for (let number = startNumber; number <= endNumber; number++){
        array.push(number);
    }
    return array;
}

console.log(range(15,30));

const rangeOdd = (startNumber, endNumber) => {
    const array = range(startNumber, endNumber);
    let arrayFinal = [];
    for (const number of array){
        if (number % 2 !== 0){
            arrayFinal.push(number);
        };
    }
    return arrayFinal;
};

console.log(rangeOdd(15,30));

const average = (a,b) => {
    const result = (a+b)/2;
    return result;
};

const square = x => x**2;
const cube = x => x**3;


const calculate = () => {
    let number = 0;
    const numberArray = [];

    while (number <= 9) {
        const avg = average(square(number), cube(number));
        numberArray.push(avg);
        number++;
    }

    return numberArray;
};

console.log(calculate());

const fn = () => {
    const obj1 = {name: "Marcus"};
    let obj2 = {name: "Roma"};

    obj1.name = "Marcus Aurelius"; //значення поля name зміниться
    obj2.name = "Roma Aurelius";   //значення поля name зміниться

    
    //obj1 = {name: "Marcus Aurelius Bonapetito"};
    //Помилка через те, що ми не можемо змінювати значення константої
    obj2 = {name: "Roma Aurelius Bonapetito"};
    //Спрацьовує, так як obj2 - змінна
    

    console.dir(obj1);
    console.dir(obj2);
};

fn();


const createUser = (name, city) => {
    return {name, city};
};

console.dir(createUser("Roma","Kyiv"));

const phoneBoook = [
    {name: "Marcus", phone: "+380445554433"},
    {name: "Roma", phone: "+380448884433"},
    {name: "Timur", phone: "+380447774433"}
];

const findPhoneByName = (name) => {
    for (const person of phoneBoook){
        if (person.name === name){
            return person.phone;
        };
    }
};

console.log(findPhoneByName("Timber"));
console.log(findPhoneByName("Marcus"));
console.log(findPhoneByName("Roma"));

const phoneBoookCollection = {
    Marcus: "+380445554433",
    Roma: "+380445554432",
    Timber: "+380445554431",
};

const findPhoneByNameCollection = (name) => {
    return phoneBoookCollection[name];
};

console.log(findPhoneByNameCollection("Timber"));
console.log(findPhoneByNameCollection("Marcus"));
console.log(findPhoneByNameCollection("Roma"));
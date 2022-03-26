console.log('Hello JS');

// Variables and primitive types

// let myLet = "myLet";
// const myConst = 5;
// const myConst2 = '5';
// var myVar = true;
//
// const myNull = null;
// const myUndefined = undefined;

// console.log("myLet is type of: " + typeof  myLet);
// console.log("myConst is type of: " + typeof  myConst);
// console.log("myConst2 is type of: " + typeof  myConst2);
// console.log("myNull is type of: " + typeof  myNull);
// console.log("myUndefined is type of: " + typeof  myUndefined);

// Changing declaration of variable

// let myChange = 7;
// console.log("myChange is type of: " + typeof  myChange);
// myChange = '7';
// console.log("myChange is type of: " + typeof  myChange);
//
// const myChange2 = 7;
// myChange2 = 8;

// let myObject = { x: 7 };
// console.log(myObject)
// myObject.x = 8;
// console.log(myObject)
// myObject = { y: 9 };
// console.log(myObject)

// const myObject = { x: 7 };
// console.log(myObject)
// myObject.x = 8;
// console.log(myObject);
// myObject = { y: 9};

// Hoisting

// console.log(myVar);
// var myVar = true;

// console.log(myVar);
// const myVar = true;

// Block var
// for(var i =0; i<10; i++){
//     console.log('i: ', i);
// }
// console.log('i after loop:', i);

// Block let
// for(let i =0; i<10; i++){
//     console.log('i: ', i);
// }
// console.log('i after loop:', i);

// 1. Create array of elements from 0 to 50 using a loop
// const myArr = [];
// for(let i = 0; i <= 50; i++){
//     myArr.push(i);
// }
// console.log(myArr)

// const myArr = [];
// for(let i = 0; i <= 100; i+=2){
//     console.log(i);
//     myArr.push(i);
// }
// console.log(myArr);

// const myArr = [];
// for(let i = 0; i<=100; i++){
//     console.log(i);
//     if(i % 2 === 0) {
//         myArr.push(i);
//     }
// }
// console.log(myArr);

// Functions

// function myFunction(){
//     console.log('myFunction')
// }
// myFunction();

// const myFunction = () =>{
//     console.log('myFunction const');
// }

// const myFunction = () => console.log('myFunction const');
// console.log(typeof myFunction);
// myFunction();

// function myFunction(n, m){
//     console.log('n', n);
//     console.log('m', m)
//     return n + m;
// }
// const result = myFunction(10,11);
// console.log(result);


function generateArray(arraySize) {
    if (typeof arraySize !== 'number') {
        throw 'arraySize must be number type'
    }
    const arr = [];
    for (let i = 1; i <= arraySize; i++) {
        arr.push(i);
    }
    return arr;
}

// const result = generateArray(67);
// const result = generateArray(true);
// console.log(result);


//Array Operators examples

// const myArray = generateArray(100);
// const myArrayMapped = myArray.map((item, index) => {
//     console.log('item', item);
//     console.log('index', index);
//     console.log('--------------------------------')
//     return item;
// });
// console.log(myArrayMapped);

const myArray = generateArray(100);
console.log(myArray)
// const myArrayMapped = myArray.map((item, index) => {
//     return { index: index, value: item};
// });
const myArrayMapped = myArray.map((item, index) => ({index: index, value: item}));
const myArrayReducedMap = myArray.reduce((prev, current, index) =>
    ([...prev, {value: current, index: index}]), [])
// myArrayMapped = myArrayReducedMap
console.log(myArrayMapped);
console.log(myArrayReducedMap)

const myArrayFiltered = myArrayMapped.filter(item => {
    return item.value % 2 === 0;
});
const myArrayReducedFilter = myArrayReducedMap.reduce((prev, current) => {
    const ret = prev;
    if (current.value % 2 === 0) {
        ret.push(current)
    }
    return ret;
}, []);
// console.log(myArrayFiltered);
// console.log(myArrayReducedFilter);

const myArrayItem = myArrayFiltered.find(item => {
    return item.value == 50;
})
const myArrayItem2 = myArrayFiltered.find(item => {
    return item.value == 51;
})

const myArrayItemReduced = myArrayReducedFilter.reduce((prev, current) => {
    if (prev && prev.hasOwnProperty('value') && prev.value === 50) {
        return prev;
    }
    if (current && current.hasOwnProperty('value') && current.value === 50) {
        return current;
    }
    return undefined;
})
// console.log(myArrayItem);
// console.log(myArrayItem2);
// console.log(myArrayItemReduced);

















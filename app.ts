console.log("nomer 1");

let arr:number[] = [1, -2, -4, 1.4, 6, 8, -3, 5];
function sumPositivNumbs(array:number[]) {
    let sum:number = 0;
    let positiv_numbs = array.filter((numbs) => numbs > 0);
    for (const i of positiv_numbs) {
        sum += i;
    };
    return sum;
    
};
console.log(sumPositivNumbs(arr));

console.log("nomer 2");

let str_arr: string[] = ["laptop", "thinkpad", "radio", "pixel", "enter"];
function capsString(arr:string[]) {
    let filtered_str_arr:string[] = arr.map((str) => str.toUpperCase());
    return filtered_str_arr;
};
console.log(capsString(str_arr));

console.log("nomer 3");

const U_arr = [
    {
        name: "Dania",
        age: 19,
        city: "Kyiv"
    },

    {
        name: "Anna",
        age: 25,
        city: "Batumi",
    },

    {
        name: "Andrew",
        age: 42,
        city: "Paris"
    }
];

function newKeyInObj(arr:object[]) {
    let obj_withnewKey = arr.map((obj => ({...obj, newKey:true})));
    return obj_withnewKey;
};
console.log(newKeyInObj(U_arr));




console.log("nomer 4");

let numbers_arr:number[] = [2, 1, 5, -24, 42.5, 7];
function iPlusTen(arr:number[]) {
    let tensNumber_arr = arr.map((i) => i += 10);
    return tensNumber_arr;
};

console.log(iPlusTen(numbers_arr));

console.log("nomer 5");
let string_arr_reverse: string[] = ["dimA", "annA", "paveL"];
function reserveString(arr:string[]) {
    let reversed = arr.map((str) => str.split("").reverse().join(""));
    return reversed;    
};
console.log(reserveString(string_arr_reverse));

//console.log("nomer 6");

/* let str_for_obj:string = "Hello, developer";
let arr_obj:object[] = [
    {
        phrase:"Hello, world",
    },

    {
        phrase:"Hello, developer"
    },

    {
        phrase:"Hello, developer!"
    },
    {
        phrase:"Hello, deveLoper"
    },
    {
        phrase:"Hello, developer"
    }
];

function detectingthepresenceofaphrase(str:string, arr:object[]) {
    let onlyTrueObjs = arr.filter((obj => {}) )
}
 */


console.log("nomer 7");
let kvadrat_of_numbs_arr: number[] = [3, 1, 5, 7, 2, 8];
function kvadratOfNumber(arr:number[]) {
    let after_map = arr.map((i) => i * i);
    return after_map;
};
console.log(kvadratOfNumber(kvadrat_of_numbs_arr));

console.log("nomer 8");
let arr_string: string[] = ["alfa", "beta", "ceta", "figma"];
function firstSymbolOfStr(arr:string[]) {
    let firtsLetter_arr = arr.map((str) => str.slice());
    return firtsLetter_arr; 
};
console.log(firstSymbolOfStr(arr_string));

console.log("nomer 9");
let arr_of_objs:object[] = [
    {
        name: "Anna",
        age: 31,
        city: "NewYork"
    },
    {
        name: "Mike",
        age: 24,
        city: "Berlin"
    },
    {
        name: "Karl",
        age: 43,
        city: "Madrid"
    }
];
function changeValueOfKey(arr:object[]) {
    let after_filter = arr.map((obj => ({...obj, name:"Gio"})));
    return after_filter;
};
console.log(changeValueOfKey(arr_of_objs));


console.log("nomer 10");

let just_numbs:number[] = [2.13, 4.81, 7.96, 8.00031];

function absoluteValueOfNumbs(arr:number[]) {
    let abolute_numbers = arr.map((i) => Math.floor(i));
    return abolute_numbers;
};
console.log(absoluteValueOfNumbs(just_numbs));
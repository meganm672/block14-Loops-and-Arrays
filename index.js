//Only Odds

//create javascript code that accepts an array of numbers

//return new array with only odd numbers from original array

//if there is only one odd number return single value array

const array1= [2,4,6,8,11,20,15,22];
console.log(array1)
const oddNum1 = [];

for(let i=0; i < array1.length; i++){
    if(array1[i] % 2 !== 0){
      oddNum1.push(array1[i]);
    }
}
console.log(oddNum1);

const array2= [1,2,3,4,5,6,7,8,9,10];
const oddNum2 = [];
console.log(array2)
for(let i=0; i < array2.length; i++){
    if(array2[i] % 2 !== 0){
      oddNum2.push(array2[i]);
    }
}
console.log(oddNum2);

const array3= [70,42,55,81,21,91,34];
const oddNum3 = [];
console.log(array3)
for(let i=0; i < array3.length; i++){
    if(array3[i] % 2 !== 0){
      oddNum3.push(array3[i]);
    }
}
console.log(oddNum3);

const array4= [2,4,6,8,10,11,12]; 
const oddNum4=[];
console.log(array4)
for(let i=0; i < array4.length; i++){
    if(array4[i] % 2 !== 0){
      oddNum4.push(array4[i]);
    }
}
console.log(oddNum4);

//Vowel versus Consonant

//create javascript code that acceps a string of lowercase letters

//print the word followed by how many consonants and vowels it has

//'a' 'e' 'i' 'o' 'u' are vowels

//all other letters are a consonant


let vowels = 0;

let consonants = 0;

const hello = "hello";
console.log(hello)

for(let i=0; i < hello.length; i++){
    let char = hello[i];
    if( char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'){
        vowels++;
    }else{
        consonants++;
    }
}
console.log("hello has "+consonants + " consonants and "+ vowels + " vowels");


vowels = 0;
consonants = 0;

const stringInst = "ukelele";
console.log(stringInst);

for(let i=0; i < stringInst.length; i++){
    let char = stringInst[i];
    if( char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'){
        vowels++;
    }else{
        consonants++;
    }
}
console.log("ukelele has "+consonants + " consonants and "+ vowels + " vowels");

vowels = 0;
consonants = 0;

const awesome = "awesome";
console.log(awesome)

for(let i=0; i < awesome.length; i++){
    let char = awesome[i];
    if( char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'){
        vowels++;
    }else{
        consonants++;
    }
}
console.log("awesome has "+consonants + " consonants and "+ vowels + " vowels");

vowels = 0;
consonants = 0;


const onomonopia = "onomonopia";
console.log(onomonopia);

for(let i=0; i < onomonopia.length; i++){
    let char = onomonopia[i];
    if( char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'){
        vowels++;
    }else{
        consonants++;
    }
}
console.log("onomonopia has "+consonants + " consonants and "+ vowels + " vowels");

vowels = 0;
consonants = 0;

const book = "textbook";
console.log(book)

for(let i=0; i < book.length; i++){
    let char = book[i];
    if( char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'){
        vowels++;
    }else{
        consonants++;
    }
}
console.log("textbook has "+consonants + " consonants and "+ vowels + " vowels");

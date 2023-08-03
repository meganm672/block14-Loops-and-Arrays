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


const vowels = [];

const consonants = [];

const hello = "hello";
console.log(hello)

for(let i=0; i < hello.length; i++){
    if( hello[i] === 'a' ||
    hello[i]=== 'e' ||
    hello[i] === 'i' ||
    hello[i] === 'o' ||
    hello[i] === 'u'){
        vowels.push(hello[i]);
    }else{
        consonants.push(hello[i]);
    }
}
console.log("The Vowels are :" + vowels);
console.log("The Consonants are :" + consonants);

const stringInst = "ukelele";
console.log(stringInst);

for(let i=0; i < stringInst.length; i++){
    if( stringInst[i] === 'a' ||
    stringInst[i]=== 'e' ||
    stringInst[i] === 'i' ||
    stringInst[i] === 'o' ||
    stringInst[i] === 'u'){
        vowels.push(stringInst[i]);
    }else{
        consonants.push(stringInst[i]);
    }
}
console.log("The Vowels are :" + vowels);
console.log("The Consonants are :" + consonants);

const awesome = "awesome";
console.log(awesome)

for(let i=0; i < awesome.length; i++){
    if( awesome[i] === 'a' ||
    awesome[i]=== 'e' ||
    awesome[i] === 'i' ||
    awesome[i] === 'o' ||
    awesome[i] === 'u'){
        vowels.push(awesome[i]);
    }else{
        consonants.push(awesome[i]);
    }
}
console.log("The Vowels are :" + vowels);
console.log("The Consonants are :" + consonants);

const onomonopia = "onomonopia";
console.log(onomonopia);

for(let i=0; i < onomonopia.length; i++){
    if( onomonopia[i] === 'a' ||
    onomonopia[i]=== 'e' ||
    onomonopia[i] === 'i' ||
    onomonopia[i] === 'o' ||
    onomonopia[i] === 'u'){
        vowels.push(onomonopia[i]);
    }else{
        consonants.push(onomonopia[i]);
    }
}
console.log("The Vowels are :" + vowels);
console.log("The Consonants are :" + consonants);

const book = "textbook";
console.log(book)

for(let i=0; i < book.length; i++){
    if( book[i] === 'a' ||
    book[i]=== 'e' ||
    book[i] === 'i' ||
    book[i] === 'o' ||
    book[i] === 'u'){
        vowels.push(book[i]);
    }else{
        consonants.push(book[i]);
    }
}
console.log("The Vowels are :" + vowels);
console.log("The Consonants are :" + consonants);


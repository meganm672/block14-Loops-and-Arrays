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

//Vowel ver
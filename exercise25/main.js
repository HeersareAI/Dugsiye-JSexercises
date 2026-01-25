const array1 = [1, 2, 3];
const array2 = [...arr1, 4, 5, 6, 7, 8, 9, 10];
console.log(array2); 

function multiply(...numbers) {
    return numbers.reduce((product, n) => product * n, 1);
}
console.log(multiply(2, 3, 4, 5, 10)); 
 
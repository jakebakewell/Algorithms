// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
sigma(15);

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num) {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product = product * i;
    }
    console.log(product);
}
factorial(10);

// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fibonacciSequence(num) {
    let arr = [0, 1];
    for (let i = 2; i <= num; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    console.log(arr[num]);
    return arr[num];
}
fibonacciSequence(8);

// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function returnSecondToLastVal(array) {
    if (array.length >= 2) {
        console.log(array[array.length - 2]);
        return array[array.length - 2];
    }
    else if (array.length < 2) {
        console.log("Null");
        return "Null";
    }
}
returnSecondToLastVal([42, true, 4, "Liam", 7]);

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function returnNthToLastVal(array, num) {
    if (array.length > num) {
        console.log(array[array.length - num]);
        return array[array.length - num];
    }
    else if (array.length <= num) {
        console.log("Null");
        return "Null";
    }
}
returnNthToLastVal([5, 2, 3, 6, 4, 9, 7], 3);

// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function returnSecondLargestVal(arr) {
    let max = arr[0];
    let secondLarg = arr[1];
    if (arr.length >= 2) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            else if (arr[i] < max && arr[i] > secondLarg) {
                secondLarg = arr[i];
            }
        }
    }
    else if (arr.length < 2) {
        console.log("Null");
        return "Null";
    }
    console.log(`The second largest value in the array is ${secondLarg}`);
    return secondLarg;
}
returnSecondLargestVal([42, 1, 4, 3.14, 7]);

// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function doubleTrouble(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
        newArray.push(array[i]);
    }
    console.log(array);
    console.log(newArray);
    return newArray;
}
doubleTrouble([4, "Ulysses", 42, "false"]);

function doubleTroubleBubble(array){
    for (let i = array.length - 1; i >= 0; i--){
        array.splice(i, 0, array[i]);
    }
    console.log(array);
    return array;
    }
doubleTroubleBubble([4, "Ulysses", 42, "false"]);
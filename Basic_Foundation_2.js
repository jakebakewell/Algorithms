/* Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5]. */

function makeItBig(array) {
    let bigString = 'Big';
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = bigString
        }
    }
    console.log(array);
    return array;
}
makeItBig([-2, 4, -3, 5, 7, -9]);

/* Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array. */

function printLowReturnHigh(array) {
    let lowest = array[0];
    let highest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < lowest) {
            lowest = array[i];
        }
        if (array[i] > highest) {
            highest = array[i];
        }
    }
    console.log(lowest);
    console.log(highest);
    return highest;
}
printLowReturnHigh([3, -2, 5, -4, 7, 9]);

/* Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array. */

function printOneReturnAnother(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            console.log(array[i]);
            break
        }
    }
    console.log(array[array.length - 2]);
    return array[array.length - 2];
}
printOneReturnAnother([3, 4, 7, 5, 8, 11, 13]);

/* Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array. */

function doubleArrayVals(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    console.log(array);
    console.log(newArray);
    return array, newArray;
}
doubleArrayVals([4, 3, 7, 10]);

/* Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it. */

function countPositiveValsInArray(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            count = count + 1;
        }
    }
    array[array.length - 1] = count;
    console.log(`${count} positive values in array`);
    console.log(array);
    return array;
}
countPositiveValsInArray([1, 2, 5, 4, 6, 8, 7, 9, 11, 3]);

/* Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!". */

function evensAndOdds(array) {
    let oddCount = 0;
    let evenCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            oddCount = oddCount + 1;
            evenCount = 0;
            if (oddCount == 3) {
                console.log("That's odd!");
            }
        }
        else if (array[i] % 2 == 0) {
            evenCount = evenCount + 1;
            oddCount = 0;
            if (evenCount == 3) {
                console.log("Even more so!");
            }
        }
    }
}
evensAndOdds([7, 9, 43, 2, 8, 4, 5, 7, 41]);

/* Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr. */

function incrementTheSeconds(array) {
    for (let i = 0; i < array.length; i++) {
        if (i == array.length - 1) {
            break;
        }
        else if (i % 2 == 0) {
            array[i + 1] = array[i + 1] + 1;
        }
    }
    console.log(array);
    return array;
}
incrementTheSeconds([1, 3, 5, 6, 2, 8, 4]);

/* Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward? */

function previousLengths(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    console.log(arr);
    return arr;
}
previousLengths(["Dojo", "Naruto", "Alfonse", "Chizuru"]);

/* Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array. */

function addSeven(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    console.log(arr);
    console.log(newArr);
    return newArr;
}
addSeven([2, 1, 5, 7, 3]);

/* Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values). */

function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr);
    return arr;
}
reverseArray([2, 4, 3, 6, 8, 9]);

/* Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5]. */

function makePositivesNegatives(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            temp = array[i] * -1;
            newArray.push(temp);
        }
        else if (array[i] < 0) {
            newArray.push(array[i]);
        }
    }
    console.log(array);
    console.log(newArray);
    return newArray;
}
makePositivesNegatives([-1, 3, -10, 8, 4, -5]);

/* Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once. */

function alwaysHungry(arr) {
    let foodCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            foodCount = foodCount + 1;
            console.log("yummy");
        }
    }
    if (foodCount == 0) {
        console.log("I'm hungry")
    }
}
alwaysHungry([2, "food", "food", "food", 9]);

/* Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time. */

function swapTowardCenter(arr) {
    for (let i = 0; i < arr.length / 2; i += 2) {
        let temp = 0;
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr);
}
swapTowardCenter([6, 2, 4, 3, 5, "Ninja", 42, "Dojo", 24]);

/* Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9]. */

function scaleTheArray(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * num);
    }
    console.log(`${arr} is scaled by ${num}`);
    console.log(`new scaled array ${newArr}`);
    return newArr;
}
scaleTheArray([2, 5, 1, 8, 6], 3);
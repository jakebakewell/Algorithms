/* function printArrayVals(array) {

    for (var i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
printArrayVals([4, 2, 5, 7, 8]); */


/*function printAverageOfArray(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    console.log(sum/array.length)
}
printAverageOfArray([4,6,2,8]); */


/*function returnOddsArray1To255() {
    var array = [];
    for (var i = 1; i <= 255; i++) {
        if (i % 2 == 1) {
            array.push(i)
        }
    }
    return array;
}
returnOddsArray1To255(); */

/*function squareArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr);
}

squareArrayVals([1,2,3,4]) */

/*function zeroOutArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    console.log(arr);
    return arr;
}

zeroOutArrayNegativeVals([-1,2,3,-4,-6]); */

function printMaxMinAverageArrayVals(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    console.log(`The max value is: ${max}, the min value is ${min}, and the average of all the values is ${sum / arr.length}`);
}

printMaxMinAverageArrayVals([1, 2, 3, 4]);

function swapStringForArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
    return arr;
}

swapStringForArrayNegativeVals([-1, 2, 3, -4]);


function shiftArrayValsLeft(arr) {
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = 0;
    console.log(arr);
    return arr;
}
shiftArrayValsLeft([1, 2, 3, 4, 5]);

function printFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}
printFizzBuzz();
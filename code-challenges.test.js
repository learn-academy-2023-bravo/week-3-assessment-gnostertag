// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibSequence",()=>{
  
  const fibLength1 = 6
  const fibLength2 = 10

  it("returns an array that contains the numbers of the fibonacci sequence", ()=> {

    expect(fibSequence(fibLength1)).toEqual ([1, 1, 2, 3, 5, 8])
    expect(fibSequence(fibLength2)).toEqual ([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    
  })
})
// FAIL  ./code-challenges.test.js
//   fibSequence
//     ✕ returns an array that contains the numbers of the fibonacci sequence (1 ms)

//   ● fibSequence › returns an array that contains the numbers of the fibonacci sequence

//     TypeError: "fibSequence" is not a function

// Expected output: [1, 1, 2, 3, 5, 8]

// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
//Pseudo:
//Input:number greater than 2
//Output: array
//we will create a function called fibSequence that will first check if the number is greater than 2. If not it will return an eror. Then we will create a function fibNum that will take in an array of 0 and 1 because 0 and 1 are the always the first two numbers of the fib sequence. next a for loop to calculate the numbers of the fib sequence and store them in an array. Then console log the given fibLength numbers and we should expect to see [ 1, 1, 2, 3, 5, 8 ] and [  1,  1,  2,  3,  5,  8, 13, 21, 34, 55].

const fibSequence = (num) => {
  if (num < 3) {
    return ("something went wrong")
  }

const fibNum = ([1,1]); {
for (let i =2; i<num; i++){
  fibNum[i] = fibNum[i-1] +fibNum[i-2];
}
return fibNum;
}}

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.



describe("lowToHigh",()=>{
  
  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60
  }
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
  }
     it("returns an array of the values from least to greatest", ()=> {
  
      expect(lowToHigh(studyMinutesWeek1)).toEqual ([15, 15, 20, 30, 30, 60, 90])
      expect(lowToHigh(studyMinutesWeek2)).toEqual ([10, 15, 20, 45, 60, 65, 100])
      
     })
    })

    // FAIL  ./code-challenges.test.js
    // lowToHigh
    //   ✕ returns an array of the values from least to greatest (1 ms)
  
    // ● lowToHigh › returns an array of the values from least to greatest
  
    //   TypeError: "lowToHigh" is not a function

    
// Expected output: [15, 15, 20, 30, 30, 60, 90]

// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

//pseudo:
//Input: object
//output: array of the values sorted from least to greatest.
//Create a function called lowToHigh. Then use the Object.values method to isolate the values from each object. Then we will use the .sort method to put those isolated values in order of least to greatest. We should expect to see [15, 15, 20, 30, 30, 60, 90] and [10, 15, 20, 45, 60, 65, 100] respectively.




const lowToHigh = (obj) => {
return Object.values(obj).sort((a,b)=>a-b)
}




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.



describe("accuSum",()=>{

  const accountTransactions1 = [100, -17, -23, -9]
  const accountTransactions2 = [250, -89, 100, -96]
  const accountTransactions3 = []

  it("returns an array of the accumulating sum", ()=>{

    expect(accuSum(accountTransactions1)).toEqual ([100, 83, 60, 51])
    expect(accuSum(accountTransactions2)).toEqual ([250, 161, 261, 165])
    expect(accuSum(accountTransactions3)).toEqual ([])
  })
})

// FAIL  ./code-challenges.test.js
// accumulatingSum
//   ✕ returns an array of the accumulatingSum (2 ms)

// ● accumulatingSum › returns an array of the accumulatingSum

//   TypeError: "accumulatingSum" is not a function

// Expected output: [100, 83, 60, 51]

// Expected output: [250, 161, 261, 165]

// Expected output: []

// b) Create the function that makes the test pass.
//pseudo
//input: array
//output: an array of accumulating sums.
//First im going to create a function called accuSum. Then we'll create a new variable called sum and set that = 0. Its equal to 0 because I want 0 to be th initial value before we use any methods. Next ill use the .map function to iterate over the array and at each iteration i want the current value to be added to the sum. Then ill create a function for of the given arrays and call them to get the expected outputs of [100, 83, 60, 51] , [250, 161, 261, 165] , and [].


const accuSum = (arr) => {
  let sum = 0
  return arr.map((value) => {
     return sum+= value
  })
}


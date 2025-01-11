//arrays

let element;
const arr = ["Banana", "orange", "apple"];
const arr2 = ["Honda", "Baja"];
console.log(arr.toString());
console.log(arr.join("/"));
arr.shift(); //removes the first element from the beggining of the  array
arr.unshift("apple"); //insert the new element at the beggining of the array
const newarr = arr.concat(arr2); //concat two array and return the new array / also accepts the string

arr.copyWithin(2, 0); //Copy to index 2, all elements from index 0:
arr.flat(); // return new array by reducing old multi dimensional array to single dimensonal
arr.indexOf(element); //find the index of element and return -1 if not found
arr.lastIndexOf(element); //return last occurenece of element

//sorting in the array

/*
 work on the non-numeric values
 sort() and reversed () do changed the origianl array
 toSorted and toReversed() create the new array
 */
 const newSortedarr=arr.toSorted(); //return new sorted array without changing the original array
 console.log(newSortedarr)

 //work on the numeric values

 const points =[40,100,1,5,25,10]
 points.sort(function(a,b){
   return a-b
 });

 const cars=[
   {type:"Volvo",year:2016,
   type:"Saab",year:2001,
   type:"BMW",year:2010
   }
 ]
   cars.sort(function(a,b){
   return a.year-b.year
   });

   //comparing string properties
   cars.sort(function(a,b){
     let x=a.type.toLowerCase();
     let y=b.type.toLowerCase();
     if(x<y) return -1;
     if(x>y) return 1;
     return 0;
   });

   


//FIND FUNCTION
/*this is special function like it will return the first element from the array who passed the given
 function condition */
const number = [4, 9, 16, 25, 29];
let first = number.find(myFunction);

function myFunction(value, index, array) {
  return value > 16;
}
number.findIndex(myFunction); //return the index of first condition passed value

//HIGH ORDER FUNCTIONS
//NOTE:- IF YOU ARE USING THE HIGH ORDRE FUNCRION CHAINING AND IN THAT CHAINING IF YOU ARE USING
// anonymous FUNCTION THEN ALWAY USE THE RETURN STATEMENT IN EACH AND EVERY HIGH ORDER FUNCTION
const nums = [2, 1, 42, 5, 53];

//filter
const finalarr = nums
  .filter(function (x) {
    return x % 2 == 0;
  })
  .map((x) => x + 3);

//map function
const finalarr2 = nums.map(function (x) {
  return x * 2;
});

//reduce function
console.log(
  nums.reduce(function (accumalator, currentValue) {
    return accumalator + currentValue;
  }, 0)
); //acculator initial value and it return only single value

console.log(finalarr);
console.log(finalarr2);
console.log(arr);
console.log(newarr);

//prmoises and how the chaining works

 const vehicals = ["car", "bike", "honda"]

 function takeName(dt){
   console.log(dt)
 }
 orderDetails(vehicals)
   .then(function (data) {
     console.log(data);
     return data[1];
   }).then(function(dt){
       takeName(dt)
   } 
   )
   .catch(function (err) {
     console.log(err);
   }).then(function(dt){
       console.log("hekk")
   } 
   ).catch(function (err) {
     console.log(err);
   })


 function orderDetails(vehicals) {
   const promise = new Promise(function (Resolve, Reject) {
     if (cardValid(vehicals)) {
       setTimeout(() => {
           Resolve(vehicals);
       }, 1000);
       
     } else {
       const err = new Error("something is wrong");
       Reject(err);
     }
   });
   return promise;
 }
 function cardValid(vehicals) {
   return true;
 }

function prmoiseExample() {
  checkTime1().then(function () {
    console.log("this is output");
  });
  console.log("this is non blocking call");
}

prmoiseExample()

//async await
/*
   difference between the async/await and normal promises chaining 
   ---------------------------------------------------------------------
   await simply stop the flow of that whole function and remove the function from call stack 
   and then check that if the promise get resolved then put the function back again into the call stack.
   not like earlier promises who just put the promises into the microstask queue and allow other task which
   are not written in the .then() to get executed.
   but in the async function the other statements which are written after the await will only get execute
   only after the promise will get resolved.

 */
function checkTime1() {
  const pm2 = new Promise(function (Resolve, Reject) {
    if (true) {
      setTimeout(function () {
        Resolve(console.log("timeout after 5 second"));
      }, 5000);
    } else {
      Reject("error in first timeout");
    }
  });
  return pm2;
}

function checkTime2() {
  let a = 10;
  const pm = new Promise(function (Resolve, Reject) {
    if (true) {
      setTimeout(() => {
        Resolve(a);
      }, 10000);
    } else {
      const err = new Error("error in second timeout");
      Reject(err);
    }
  });
  return pm;
}
async function checkAsync() {
  const data = await fetch("https://dummyjson.com/products");
  const datajson = await data.json();
  // console.log(datajson)

  const first = await checkTime2();
  console.log(first);
  console.log("this will execute after printing first value");

  const second = await checkTime1();
  console.log("2nd time ineterval has been ended");
}
checkAsync();


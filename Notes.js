// const currentDate = Date();
// console.log("Current date : " + currentDate);

//    How to calculate time to execute a programme

// function calculateSum(){
//     let a = 0;
//     for (let i = 0; i < 10000000000000; i++) {
//     a = a + i;
//     return a;
        
//     }
// }

// const beforeTime = new Date();
// const beforeTimeInMs = beforeTime.getTime();
// calculateSum();

// const afterTime = new Date;
// const afterTimeInMs = afterTime.getTime();

// console.log(afterTimeInMs - beforeTimeInMs);


  /*********************JSON*************** */
  //             It converts objects into strings
  //             JSON.parse
  //            JSON.stringify

//   const user = {
//     name: "Aman",
//     gender: "male"
//   }

// console.log(user);
// // const userInStrings = JSON.stringify(user);
// // console.log(userInStrings);
// const userInObject = JSON.parse(user);
// console.log(userInObject);

// **********************Math Functions*********** 



//******************** Objects**********************/
   
/*const object = {
  key1 : "value1",
  key2 : "value2",
  key3 : "value3"
}

function objectMethods(object){
  console.log("OriginalObject : ", object );

  let keys = Object.keys(object);
  console.log("After Object.keys() :", keys);

  let values = Object.values(object);
  console.log("After Object.values : ", values);

  let entries = Object.entries(object);
  console.log("After Object.entries(): ", entries);

  let hasProp = object.hasOwnProperty("key3");
  console.log("After object.hasOwnProperty(): ", hasProp);

  let newObj = Object.assign({}, object, { key4: "value4"});
  console.log("After Object.assign(): ", newObj);
}
objectMethods(object);*/


// ************************Aync, Await And Promises ****************************


  //              setTimeout() function is a async function.
  //              
  /*function findSum(n){
    let ans = 0;
    for ( let i = 0; i < n; i++){
      ans += i;
    }
    return ans;
  }

  function findSumTill100(){
    console.log(findSum(100));
  }

  setTimeout(findSumTill100, 1000);
  console.log("Hello world");*/





  //****************fs.readFile___________async function************ */


  /*const fs = require("fs");
  //File system module

  fs.readFile("a.txt","UTF-8",function(err, data){
    console.log(data);
  });
  console.log("Hi there");
  let a = 0;
  for( let i = 0; i < 1000000000; i++){
    a = a + i;
  }
  console.log(a);
  console.log("Hi there 2");
  */
  // Hi there
  //4999999999067109000
  //Hi there 2
  //Hi there, from a.txt

  /*
  console.log("Hi there");

  setTimeout( function(){
    console.log("from inside the loop 1")
  },20000);

  setTimeout(function(){
    console.log("from loop 2")
  },10000);

  let a = 0;
for ( let i = 0; i < 10 ;i++){
  a = a + 1;
}

console.log(a);
*/



  // latentflip website can be used to understand javascript web aecitecture


  

  // ***************PROMISES***************************//

  // Until now , we've only used other peoples async functions.How can we create async function on our own?

  //Usually all async functions you will write will be on top of JS provided async functions 
  //like setTimeout and fs.readfile

  //Lets create our own async function

  // const fs = require('fs');
  // function amansReadFile(){
  //   console.log("Inside amansReadFile");
  //   return new Promise(function(resolve){
  //     console.log("inside promise");
  //     fs.readFile("a.txt", "utf-8", function(err, data){
  //       console.log("before resolve data");
  //       resolve(data);
  //     })
  //   })
  // };

  // // callback function to call

  // function onDone(data){
  // console.log(data)};
  // amansReadFile().then(onDone);


  // Here is how this works
  // 1) amansReadReadFile will execute
  // 2) amanReadsFile will return the promise
  // 3) now after returning promise, call onDone function(.then gets called whenever the async function resolves);
  // 4) onDone function will print the returned data

  //creating a promise
  // you need to pass in a function as arguement which has to resolve as  the first arguement


//   function amansAsyncFunction(){
//     let p = new Promise(function(resolve){
//       resolve("Hi there");
//     })
//     return p;
//   }
//   const value = amansAsyncFunction();
// value.then(function(data){
//   console.log(data);
// })



// *******************ASYNC AWAIT**********************





// // Normal Promise code
// function amansAsyncFunction(){
//   let p = new Promise(function(resolve){
//     //do some async logic here
//     resolve("Hi there");
//   })
//   return p;
// }
// const value = amansAsyncFunction();
// value.then(function(data){
// console.log(data);
// });

// //Using Async and Await function

// function amansAsyncFunction(){
//   let p = new Promise(function(resolve){
//     //do some async logic here
//     resolve("Hi there");
//   })
//   return p;
// }
// async function main(){ 
//  let value = await amansAsyncFunction();

// console.log(value);
// }


// const fs = require("fs");
// function putCopyrightToFile(cb){
//   fs.readFile("a.txt","utf-8", function(err, data){
//     data = data + " copyright 2024 Aman Yadav";
//     fs.writeFile("a.txt", function (){
//       cb(); 
//     })
    
//   })
// };
// putCopyrightToFile(function(){
//   console.log("copyright has been put")
// });



// function promisifiedMyOwnSetTimeout(duration){
//   const p = new Promise(function(resolve){
// setTimeout(function(){
//   resolve();
// }, duration) ; });
//   return p;
// };


// const ans = promisifiedMyOwnSetTimeout(5000);
// ans.then(function(){
//   console.log("Timeout is done.")
// })


// function myOwnASyncFunction(duration){

//   let p = new Promise(function (resolve){
//     setTimeout(function(){console.log("Inside promise")},duration);
//   });
// return p;
// } ;

//  const ans = myOwnASyncFunction(1000);
 
//  ans.then(
//  console.log(ans)
//  )




// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//      console.log("I am a promise.");
//     // resolve("success");
//     reject("error")
//   });
// }
// let promise = getPromise();
// promise.then((result) => {
//   console.log("fulfilled", result);
// });

// promise.catch((err) => {
//   console.log("some error occured", err);
// })


/***************************PROMISE CHAINING************************************** */

// function getData(dataId){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Got Data ",dataId);
//       resolve("Success")
//     }, 3000)
//   })
// }



// console.log("Fetching Data 1...")
// let promise1 = getData(1);

// *********************Callback Hell****************


// promise1.then((result) => {
//   console.log(result);
//   console.log("Fetching Data 2...");
//   let promise2 = getData(2)
//   promise2.then((result) => {
//     console.log(result)})
// })

//Actual Promise Chaining

// promise1.then((result) => {
//   console.log(result);
//   console.log("Fetching Data 2...")
//   return getData(2);
// }).then((res) => {
//   console.log(res)
// })


//There is another better  way than promises......ASYNC AWAIT

// async function getAllData(){
//   console.log("Fetching Data 1");
//   await getData(1);
//   console.log("Fetching Data 2");
//   await getData(2);
//   console.log("Fetching Data 3");
//   await getData(3);
//   console.log("Fetching Data 4");
//   await getData(4);
  
  
// };
// getAllData();

//If you dont want to call function every time
//and want function executes when defined, use IIFEs

//enclose your function into parenthesis and add a parenthesis next to previous ();
// (function)();

// ( async function (){
//    console.log("Fetching Data 1");
//    await getData(1);
//    console.log("Fetching Data 2");
//    await getData(2);
//    console.log("Fetching Data 3");
//    await getData(3);
//   console.log("Fetching Data 4");
//   await getData(4);
  
  
//  })();

 // These IIFEs are only usend when you need function only one time


 //*****************Node.js and Express ********************* */

 //What is ECMAScript?
  
 //ECMAScript is a language specification on which Javascript is based.




 //What is Javascript?

 //It is a scripting language that conforms on the ECMAScript specification.
 //Javascript includes additional features like DOM that are not part of ECMAScript.
 
 //Common JS browser engines:
 //V8 - used by google chrome/Chromium
 //SpiderMonkey - used by Firefox - C + rust




 //What is Node.js?
//Javascript is a language but node js is a run time
//JS was never meant to be run in backend eventually became very popular and is a popular choice of runtime in backend


 //What is Bun?
 //Other than the fact that JS is single threaded ,Node.js is slow(many reasons of it)
 //some smart peoples wanted to re-write the JS runtime for backend and 
 //introduced Bun.
 //It is written in Zig


 /**********************Node.js******************** */

 //What can you do with Node.js?
 //1)Create Clis(Command Line Interface) 2)Create video player
 //*******3)Create a game 4)Create an HTTP Server.***********biggest use of Node.js


 //What is an HTTP server?
 //1)A protocol that is defined for machines to communicate
 //2)specifically for website, it is the most common way for your website frontend to talk to its backend.
// FRONTENDS -  you write code for only frontend.
//  BACKEND -  you write code for backend. A place where pro priority work happens.
//
//In the end, its the client throwing some information at a server
//Server doing something with information
//server responding back with final result



/************** Things clients needs to know************* */

/**************HTTP (Client side)*****
 * 1)protocol(HTTP/HTTPs)
 * ------Usually communication happens like this
 *        ------Client side
 * 
 *             protocol      URL            conversation
 *             _______ ________________ _____________________
 *             https://chat.openai.com/backend-api/conversation
 *              
 *             
 *             header - cookies(123@as3646486@fgs4486)
 *             Body - What is 2+2 , usually in JSON
 *             Methods - POST
 * 
 * 
 *         -------Server side

 *             Response header - -----
 *             Response body - 2 + 2 is equal to 4
 *             status code - 200
 * 
 *         ------Things happens in your browser after you fire this request
 *                (We will get to how to fire request to a backend server later)
 *             1)Browser parses the URL
 *             2)Does a DNS Lookup(Converts google.com to an IP)
 *             3)Establishes a coonnection to the IP 
 *         
 *         -------Things that happens on your after the request is recieved
 *             1)You get the inputs(Route, body, headers)
 *             2)Yo do some logic on the input ,calculate the output
 *             3)You return the output body,headers and status codes
 * 
 *         -------Common methods you can send to your BE Server
 *             1)GET
 *             2)POST
 *             3)PUT
 *             4)DELETE
 * 
 *         -------Common status codes the backend responds with
 *             1) 200 - Everything os ok
 *             2) 404 - Page/Route is not found
 *             3) 403 - Authentication issue
 *             4) 500 - Internal server error
 *  
 * 
 * 
 * 
 * 
 * 
 * 2) Address(URL/IP/Port)
 * 3)Route
 * 4)Headers body query Params
 * 4)Methods
 */

/***********HTTP(Server Side)********
 * 1)Response Headers
 * 2)response Body
 * Status Codes
 * 
 * 
 * 
 * ********************Creating a HTP Server***************
 * 
 * Similearly,There are mainy libraries that let you create HTTP SErver .The most
 * famous one is Express.
 * ----------create an HTTP server from scratch in c/C++,its a challenge
 * 
 *library that we are using - express
 lets create 
 * 
 * 
 * 
 */





























  
 

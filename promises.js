const promiseOne = new Promise(function(resolve, reject){
  // do an async task
  // DB calls, cryptography, network call
  setTimeout(function(){
    console.log('Async task is complete');
    resolve()
  },1000)
})

promiseOne.then(function(){
  console.log("promise consumed");
})

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async task two");
    resolve();
  }, 1000)
}).then(function(){
  console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username: "user", email:"random.A.com"})
    },1000)
})
promiseThree.then(function(user){
  console.log(user);
})

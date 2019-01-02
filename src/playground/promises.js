import { resolve } from "path";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
resolve('This is my resolved data');
  }, 1500)
   resolve('This is my resolved data');
})

promise.then((data) =>{
  console.log(data);
});


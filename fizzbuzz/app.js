fizzbuzzObj = {
    fizzbuzz: 0,
    fizz: 0,
    buzz: 0
}
// let fizzbuzzCount = 0
// let fizzCount = 0
// let



for(let i = 1; i <= 100; i++){
   //console.log(i,[i])

   if(i % 3 === 0 && i % 5 === 0){
       console.log("FizzBuzz");
       fizzbuzzObj.fizzbuzz +=1;
   } else if(i % 3 === 0){
       console.log("Fizz");
       fizzbuzzObj.fizz +=1;
   } else if (i % 5 === 0){
       console.log("Buzz")
       fizzbuzzObj.buzz +=1;
   } else console.log(i)

   

 }
 console.log(fizzbuzzObj)




 






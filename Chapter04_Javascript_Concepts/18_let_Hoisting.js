// console.log(score);
let score = 100; // This will cause a ReferenceError due to temporal dead zone
{
    //tdz starts here
   // console.log(score); // This will also cause a ReferenceError
   // let score = 200;
    //typeof score; // This will return "number"
    //tdz ends here
    
    let score = 100;

    console.log(score);

}
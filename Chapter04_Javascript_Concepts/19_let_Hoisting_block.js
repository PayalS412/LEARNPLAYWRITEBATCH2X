let x="global";
if(true){
    // TDZ starts here
    // console.log(x); // This will cause a ReferenceError due to temporal dead zone
    let x="block scope";
    console.log(x); // Output: "block scope"
}
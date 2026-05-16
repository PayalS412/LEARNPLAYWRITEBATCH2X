let a=10;
console.log("Value of a:", a);
function printHello(){
    console.log("Hello, World!");
    let a=20; // Local variable 'a' inside the function
    console.log("Value of a inside function:", a);
    if(true){
        let a=30; // This 'a' is the same as the function-scoped 'a'
        console.log("Value of a inside if block:", a);
    } 
console.log("Value of a at the end of function:", a);
}
printHello();   
var a=10;
console.log("Value of a:", a);

function printHello(){
    console.log("Hello, World!");
    var a=20; // Local variable 'a' inside the function
    console.log("Value of a inside function:", a);
    if(true){
        var a=30; // This 'a' is the same as the function-scoped 'a'
        console.log("Value of a inside if block:", a);
    }
}
printHello();
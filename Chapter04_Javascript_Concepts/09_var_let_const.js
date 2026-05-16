var v=10;
let l=20;
const c=30;

console.log("var v:", v);
console.log("let l:", l);
console.log("const c:", c);

var browser = "Chrome";
var browser = "Firefox"; // Allowed with var redeclaration and reassignment
browser = "Edge"; // Allowed with var reassignment
console.log("browser (var):", browser);

let browser2 = "Chrome";
//let browser2 = "Firefox"; // Not allowed with let redeclaration
browser2 = "Edge"; // Allowed with let reassignment
console.log("browser (let):", browser2);

const browser3 = "Chrome";
// const browser3 = "Firefox"; // Not allowed with const redeclaration
// browser3 = "Edge"; // Not allowed with const reassignment
console.log("browser (const):", browser3);

var testcases=["login","logout","signup"];
for(var i=0;i<testcases.length;i++){
    console.log("Test case:", testcases[i]);
}
console.log("Value of i after loop with var:", i); // i is accessible outside the loop


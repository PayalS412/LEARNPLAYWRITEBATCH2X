// ============================================
// Chapter 03: Identifiers and Literals
// ============================================

// ============================================
// PART 1: IDENTIFIERS
// ============================================

console.log("===== PART 1: IDENTIFIERS =====\n");

// --- 1.1 Valid Identifier Rules ---
// Identifiers can contain: letters, digits, underscore (_), dollar sign ($)
// Identifiers CANNOT start with a digit

var $ = 10;
console.log("$ identifier:", $);

var _a = 12;
console.log("_a identifier:", _a);

var p = 10;
console.log("p identifier:", p);

var ab123 = 34;
console.log("ab123 identifier:", ab123);

// Invalid: var 123 = 123; // SyntaxError: Unexpected number

var Name = "Payal";
var name = "Shaurya";
console.log("Name (case-sensitive):", Name);
console.log("name (case-sensitive):", name);

var sky_lab = "hello";
console.log("sky_lab identifier:", sky_lab);

var sky$lab = "hello";
console.log("sky$lab identifier:", sky$lab);

var sky1232 = "hello";
console.log("sky1232 identifier:", sky1232);

// --- 1.2 Unicode Identifiers ---
var firstName = "Rahul";
console.log("firstName:", firstName);

var _privateVar = "secret";
console.log("_privateVar:", _privateVar);

var $$ = 100;
console.log("$$ identifier:", $$);

// --- 1.3 Reserved Words (Cannot be used as identifiers) ---
// var var = 10; // SyntaxError
// var function = 10; // SyntaxError
// var if = 10; // SyntaxError
// var for = 10; // SyntaxError
// var class = 10; // SyntaxError

// --- 1.4 Case Sensitivity ---
var myVar = 10;
var MyVar = 20;
var MYVAR = 30;
console.log("\nCase sensitivity demo:");
console.log("myVar:", myVar);
console.log("MyVar:", MyVar);
console.log("MYVAR:", MYVAR);

// 1. camelCase (standard for JS variables and functions)
let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;



// 2. PascalCase (standard for JS classes and constructors)
let UserProfile = "PascalCase";
let ShoppingCart = "class name style";



// 3. snake_case (underscore separated)
let user_name = "snake_case";
let total_price = 49.99;
let is_logged_in = false;


// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
const API_KEY = "abc123";
const DATABASE_URL = "localhost";


// 5. Hungarian Notation (prefix with type - older style)
let strName = "string prefix";
let bActive = true;       // boolean
let nCount = 5;           // number
let arrItems = [];        // array

//6. Unicode letters and Unicode escape sequences are allowed
let café = "Unicode letter é";
let 变量 = "Chinese characters";
let \u0041 = "Unicode escape for A"; // Equivalent to: let A = ...
let \u005f = "Unicode escape for _"; // Equivalent to: let _ = ...

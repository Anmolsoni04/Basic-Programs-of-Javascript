
    
    //1) WAYS TO PRINT IN 


    //a) console.log("Hello world");
    //b) alert("mai agya");
    //c) document.write("Hello my name is anmol soni"),, we can print statement by using this function also!

    
    //2) JAVASCRIPT CONSOLE API//:


    // console.log("hello", 6 + 6, "Anmol");
    // console.error("forbiddon");  //this is the func for error
    // console.warn("This is warning");  // this is the func for warning
    
    // 3) Variables in JAVASCRIPT://


    var num1 = 10;
    var num2 = 10;
    //console.log(num1 + num2);
    
    //4) Datatypes in Javascript: js store diff types of dt//

    //STRINGS:
    var str1 = "Anmol soni is the student of itm";
    var str2 = "He is doing btech cs";
    
    //INTEGER:
    var numb1 = 30;
    var numb2 = 100;

    //Booleans:
    var bool1 = true;
    var bool2 = false;

   

    //Object:
    var vegetables = {
        Anmol: 2,
        Ansh: 4,
        Vaibhav: 6
    }
    
    //Conclusion in datatypes in js:
    /* There are 2 types of datatypes in js:
    a) primitive datatypes: number, string, boolean, undefined, null, symbol
    b) Referenced datatypes: ARRAYS & objects
    */

    //Arrays:
    var arr1 = [1,4,2,2,1];

//OPERATORS IN JAVASCRIPT:
//1) Arithmetic Operators(+,-,*,/):

var m = 20;
var n =30;
// console.log("The sum of m and n is: ", m+n);
// console.log("The subtraction of m and n isL ", n-m);
// console.log("The multiplication of m and n is: ", m*n);
// console.log("The division of m and n is: ", n / m);

//2) Comparision operators:
  
var num1 = 3;
var num2 = 4;
console.log(num1 >= num2); // False
console.log(num1 <= num2); //True
console.log(num1 == num2); //False
console.log(num1 < num2); //True
console.log(num1 > num2); //false

//3) Assignment Operators:

var m1 = 50; 
var m2 = 40;
console.log(m1 += 1); //51
console.log(m2 -= 20); //20

//4) Logical Operators:

var p1 = true;
var p2 = false;
console.log(p1 || p2); //true      OR OPERATOR
console.log(p1 && p2); // false    AND OPERATOR
console.log(!p1); //false          NOT OPERATOR



//functions in javascript:

function add(a , b , c){
     ans = a + b + c;
    return ans;

}
output = add(20, 20, 20);
console.log("The sum of 3 numbers are: ", ans);

function percent(a2, b2){
    answer = a2 % b2;
    return answer;
}
finalans = percent(50, 20);
console.log(answer);

//Conditonal statements in javascript:

//Make the rule that the people who's age is greater than 18 years only they can drive the car.

var age = 100;
if(age > 18){
    console.log("Yes they can ride the car");
}
    else if(age > 15){
        console.log("No, they cannot ride the car");
    }
    else{
        console.log("no");
    }

//Loops In javascript:

// let ary = [2,4,6,8,10,12,14,16,18,20];
// for(let i = 0; i < ary.length; i++){
//     console.log(ary[i]);
// }
// let i = 0;
// // while(i < ary.length){
// //     console.log(ary[i]);
// //     i++;
// // }
// // do while loop:

// do{
//     //body
    
//     console.log(ary[i]);
//     i++;    
// }
// //condition
// while(i < ary.length);


//break and continue statements:

let ary = [2,4,6,8,10,12,14,16,18,20];
for(let i = 0; i < ary.length; i++){
    if(i == 5){
        break;
        //continue;
    }
    console.log(ary[i]);
}

//Array methods:
let nayarray = ["Anmol", "ansh", "Raghav", "Rishab", "Sidhant"];
fun = nayarray.pop(); // This function is used to remove the string from last
// nayarray.push("Harry");
console.log(fun); //will print the element which remove from the last
console.log(nayarray);


let myString = "Anmol is a good boy";
output = myString.replace("ansh", "Anmol");
console.log(output,myString);

//Dates in javascript:

let myDate = new Date();
console.log(myDate);
//These are some functions of date in jS
console.log(myDate.getFullYear()); 
console.log(myDate.getMinutes());
console.log(myDate.getUTCSeconds());
console.log(myDate.getUTCDay());

//DOM Manipulation:= Document Object Module(have doubt)
 

//Local storage in js:
//It helps the users to save the data in computer.


// let a = window.alert("What is your birthdate?");
// console.log(a);

//JSON= JavaScript Object Notation.
//This is used for exchange the data

let obj = {name: "Anmol", length: 1};
let jso = JSON.stringify(obj);
console.log(jso);
//Another function is known as Parse
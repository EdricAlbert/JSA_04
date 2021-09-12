//3. Convert Age to Days
console.log("Convert Age to Days")
function calcAge(age){
    let days = age*365;
    return days;
}
console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(7300));
//4. Return the Remainder from Two Numbers
console.log("Return the Remainder from Two Numbers")
function remainder(a,b){
    let c = a%b;
    return c;
}
console.log(remainder(1,3));
console.log(remainder(3,4));
console.log(remainder(-9,45));
console.log(remainder(5,5));
//5. Find the Perimeter of a Rectangle
console.log("Find the Perimeter of a Rectangle")
function findPerimeter(a,b){
    let c = (a+b)*2;
    return c;
}
console.log(findPerimeter(6,7));
console.log(findPerimeter(20,10));
console.log(findPerimeter(2,9));
//6. Return Something to Me!
console.log("Return Something to Me!")
function giveMeSomething(st){
    let s = "something "+st;
    return s;
}
console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));
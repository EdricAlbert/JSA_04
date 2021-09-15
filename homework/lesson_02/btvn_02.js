//1. Return the Remainder from Two Numbers
console.log("Return the Remainder from Two Numbers")
function remainder(a,b){
    let c = a%b;
    return c;
}
console.log(remainder(1,3));
console.log(remainder(3,4));
console.log(remainder(-9,45));
console.log(remainder(5,5));
//2. Find the Perimeter of a Rectangle
console.log("Find the Perimeter of a Rectangle")
function findPerimeter(a,b){
    let c = (a+b)*2;
    return c;
}
console.log(findPerimeter(6,7));
console.log(findPerimeter(20,10));
console.log(findPerimeter(2,9));
//3. Basketball Points
function points(a,b){
    return(a*2+b*3);
}
//4. The Farm Problem
function animals(a,b,c){
    return(a*2+b*4+c*4);
}
//5. Football Points
function footballPoints(a,b,c){
    return(a*3+b*1);
}
//6. Sum of Polygon Angles
function sumPolygon(a){
    return((a-2)*180);
}
//7. Let's Fuel Up!
function calculateFuel(a){
    b = a<=10 ? 100:a*10;
}
//8. Moving House
function yearsInOneHouse(a,b){
    return(a/(b+1));
}
//9. Frames Per Second
function frames(a,b){
    return(60*a*b);
}
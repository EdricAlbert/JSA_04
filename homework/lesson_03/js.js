//1. The pH Scale
function pHName(n){
    if (n<7){
        return "acidic";
    } else 
    if (n==7){
        return "neutral";
    } else
    if (n>7){
        return "alkaline";
    }
}
//2. BMI Calculator
function BMI(a,b){
    let res = b/((a/100)**2);
    if (res<18.5){
        return "underweight";
    } else 
    if (18.5<=res && res<=25){
        return "normal";
    } else{
        return "overweight";
    }
}
//3. Quadratic expression Calculate
function quadratic(a,b,c){
    if(a == 0) {
         if(b == 0) {
            if (c == 0) {
            	return('No Solution')
            } else {
                return('No Solution')
            }
        } else {
            return(-c/b)
        }
    } else {
        var delta = b*b - 4*a*c;
        if(delta > 0) {
            var x1 = (-b+Math.sqrt(delta))/(2*a);
            var x2 = (-b-Math.sqrt(delta))/(2*a);
            return(x1," and ",x2);
        } else if ( delta == 0) {
        	var sum = -b/2*a
            return(sum);
        } else {
            alert('No Solution')
        }
    }
}

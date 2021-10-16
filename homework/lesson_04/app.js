let a = [-1,1,2,3,4,5,6,7,8,9,10];
function findAmNumber(arrnumber){
    let b = [];
    for (let i=0; i<arrnumber.length; i++){
        if (arrnumber[i]>=0){
            b.push(arrnumber[i]);
        }
    }
    console.log(b);
}
findAmNumber(a);
function findDuongNumber(arrnumber){
    let b = [];
    for (let i=0; i<arrnumber.length; i++){
        if (arrnumber[i]<0){
            b.push(arrnumber[i]);
        }
    }
    console.log(b);
}
findDuongNumber(a);
// 1. Non-Female
const members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
];
function filterOutFemales(members){
    let member = members.filter((members) => members.gender != 'female');
    console.log(member); 
}
// 2.Diff Two Arrays
var p = [];
function diffArray(arr1, arr2) {
    var newArr = [];
    for (let i in arr1){
        p[i] = p[i] + 1;
    }
    for (let i in arr2){
        if (p[i]==0) {
            newArr.push(i);
        }
    }
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// 3.Sum of Minimums
function sumMinimums(arr1,arr2,arr3){
    arr1.sort(function(a, b){return a - b});
    arr2.sort(function(a, b){return a - b});
    arr3.sort(function(a, b){return a - b});
    console.log(arr1[0]+arr2[0]+arr3[0]);
}  
sumMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
])
//4. Online Shopping

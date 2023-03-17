//generics
function showStringData(a) {
    return a;
}
function showNumberData(a) {
    return a;
}
function showData(a) {
    return a;
}
showData("string");
var arrNum = [1, 2, 3, 5, 8, 13]; //Fibonacci
var arrStr = ["chu", "anh", "ngoc"];
// function w17304_map(arr:number[], callback?:(item:number) => number[]){
//     let temp =[]
//     for (let i = 0; i< arr.length; i++) {
//         const newItem =callback( arr[i]);
//    temp.push(newItem)
//     }
//     return temp
// }
// function w17304_map<T>(arr:T[], callback:(item:T)=>T):T[]{
//     let temp =[]
//     for (let i = 0; i< arr.length; i++) {
//         const newItem =callback( arr[i]);
//         temp.push(newItem)
//     }
//     return temp
// }
// const result1 = w17304_map(arrStr, (item) => {
//     return item + " - w17304"
// })
// console.log(result);
//--------------------------------------------
// const arrNum2 = [1,2,3,5,8,13]
// arrNum2.sort((a,b)=>{
//     return a-b
// })
// console.log(arrNum2);
//---------------------------------------------
// const arrStr = ["chu","anh","ngoc"]
var arrNum1 = [1, 2, 6, 5, 8, 13];
var arrStr1 = ['a', 'b', 'c', 'd', 'e'];
function sortInfo(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j]) < 0) {
                var temp_1 = arr[i];
                arr[i] = arr[j];
                arr[j] = temp_1;
            }
        }
    }
    return arr;
}
sortInfo(arrStr1, function (a, b) { return a < b ? -1 : 1; });
// sortInfo(arr4, (a, b) => a.localeCompare(b));
console.log(arrNum1);
console.log(arrStr1);

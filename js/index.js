let arr = [1, 5, 8, 10]
// 1-masala
// function lenghtArray(arr){
//     arr.lenght()
//     return arr
// }
// console.log(arr.length);

// 2-masala
// function toStringArray(arr){
//     return arr.toString()
// }
// console.log(toStringArray(arr));

// 3-masala
// function join(arr){
//     return arr.join(',')
// }
// console.log(join(arr));

// 4-masala
// function pushElement(arr, element){
//     arr.push(element)
//     return arr
// }
// console.log(pushElement(arr,5));

// 5-masala
// function popElement(arr){
    // arr.pop()
    // return arr
// }
// console.log(popElement(arr));

// 6-masala
// function shiftElement(arr){
//     arr.shift()
//     return arr
// }
// console.log(shiftElement(arr));

// 7-masala
// function unshiftElement(arr, element){
//     arr.unshift(element)
//     return arr
// }
// console.log(unshiftElement(arr));

// 8-masala
// function concat(arr, arr2){
//     return arr.concat(arr2)
// }
// let arr2 = [7, 5]
// console.log(concat(arr, arr2));

// 9-masala
// function splice(arr,index,delet,add){
//     let res = arr.splice(index, delet,add)
//     return res
// }
// console.log(splice(arr, 1, 2, 'yangi'));

// 10-masala
// function slice(arr, star, end){
//     return arr.slice(star, end)
// }
// console.log(slice(arr, 1, 3));

// 11-masala
// function lenght(arr1){
//     return arr1.lenght
// }
// let arr1 = 'salom'
// console.log(lenght(arr1));

// 12-masala
// function toString(arr){
//     return arr.toString()
// }
// console.log(toString(arr));

// 13-masala
// function join(arr){
//     return arr.join(' ')
// }
// console.log(join(arr));

// 14-masala
// function pushTwo(arr, element1, element2){
//     arr.push(element1, element2)
//     return arr
// }
// console.log(pushTwo(arr,4, 8));

// 15-masala
// function popTwo(arr){
//     arr.pop()
//     arr.pop()
//     return arr
// }
// console.log(popTwo(arr));

// 16-masala
// function shift(arr){
//     arr.shift()
//     arr.shift()
//     return arr
// }
// console.log(shift(arr));

// 17-masala
// function unshift(arr,element1,element2){
//     arr.unshift(element1)
//     arr.unshift(element2)
//     return arr
// }
// console.log(unshift(arr, 5, 8));

// 18-masala
// function concat(arr, arr2, arr3){
//     return arr.concat(arr2, arr3)
// }
// let arr2 = [2, 8]
// let arr3 = [57, 77]
// console.log(concat(arr, arr2, arr3));

// 19-masala
// function splice(arr,index,delet){
//     let res = arr.splice(index, delet)
//     return res
// }
// console.log(splice(arr,1, 3));

// 20-masala
// function slice(arr, start, end){
//    return arr.slice(start, end)
// }
// console.log(slice(arr,0,0));

// 21-masala
// function includes(arr,element){
//     return arr.includes(element)
// }
// console.log(includes(arr,10));

// 22-masala
// function indexOf(arr, element){
//     return arr.indexOf(element)
// }
// console.log(indexOf(arr, 10));

// 23-masala
// function lastIndexOf(arr,element){
//     return arr.lastIndexOf(element)
// }
// console.log(lastIndexOf(arr,3));

// 24-masala
// function find(arr,index){
//     return arr.find(index)
// }
// console.log(find(arr,num => num > 5));

// 25-masala
// function indexFind(arr,index){
//     return arr.findIndex(index)
// }
// console.log(indexFind(arr, num => num % 5 == 0));

// 26-masala
// function includes(arr, substring){
//     return arr.some(element => element.includes(substring))
// }
// let arr1 = ['sun', 'soup', 'fillar']
// console.log(includes(arr1,'fil'));

// 27-masala
// function indexOf(arr,element){
//     let index = arr.indexOf(element)
//     if(index == -1){
//         console.log('Element topilmadi');
//     } 
//     return index
// }
// console.log(indexOf(arr,3));

// 28-masala
// function lastIndexOf(arr,element){
//     let index = arr.lastIndexOf(element)
//     if(index == -1){
//         console.log('Element topilmadi');
//     } 
//     return index
// }
// console.log(lastindexOf(arr,10));

// 29-masala
// function find(arr){
//     return arr.find(num => num > 100)
// }
// let arr1 = [50, 540, 20, 101, 200]
// console.log(find(arr1));

// 30-masala
function findIndex(arr){
    return arr.findIndex(num => num < 50)
}
let arr1 = [100, 57, 6, 547]
console.log(findIndex(arr1));
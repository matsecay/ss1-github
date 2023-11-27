//1. array - mảng
/* mảng là tập trung nhiều giá trị trong 1 biến duy nhất
trong mảng có thể chứa đc nhiều kiểu dữ liệu khác nhau
( nhưng trong thực tế mảng sẽ chứa các kiểu giá trị đồng nhất )
*/

// cú pháp

// let arrList = [1, "hello", null, NaN, [1, 2, 3]];
// console.log(arrList);

// let arrNumber = [1, 2, 3, 4 ,5]; //lenghth: 5 
// index         0  1  2  3  4  length -1
// value chính là các giá trị có trong array 
// console.log(arrNumber);

// 2. làm việc với mảng
// CRUD - C -Create || R - Read || U - Update || D - delete - thêm đọc sửa xóa

//R Read one 
// let arrNumber = [1, 2, 3, 4, 5]
// console.log(arrNumber[0]);
// console.log(arrNumber[1]);
// console.log(arrNumber[2]);
// console.log(arrNumber[3]);
// console.log(arrNumber[4]);

//R read all
// let arrNumber = [1, 2, 3, 4, 5]
// for (let i=0; i < arrNumber.length; i++) {
//     console.log(i + " " + arrNumber[i]);
// }

//C - Create ( thêm )
// thêm vào đầu mảng: unshift()

// let arrNumber = [1, 2, 3, 4, 5]
// arrNumber.unshift(6)
// console.log(arrNumber);

//thêm vào cuối mảng: push(6)
// let arrNumber = [1, 2, 3, 4, 5]
// arrNumber.push(6)
// console.log(arrNumber);

// U - Update ( cập nhập )
// Update one:

// let arrNumber = [1, 2, 3, 4, 5];
// arrNumber[2] = 30;
// console.log(arrNumber);

//Update all
// let arrNumber = [1, 2, 3 ,4 ,5]
// //console.log(arrNumber.length);//5
// for (let i = 0; i < arrNumber.length; i++) {
//     // arrNumber[i] = arrNumber [i]*2;
//     arrNumber [i]*=2
// }
// console.log(arrNumber);


// D - delete 
// xóa phần tử đầu tiên - shift ()
// let arrNumber = [1, 2, 3 ,4 ,5]
// arrNumber.shift();
// console.log(arrNumber); //  2, 3, 4, 5

// xóa phần tử cuối - pop()
// let arrNumber = [1, 2, 3 ,4 ,5]
// arrNumber.pop();
// console.log(arrNumber); // 1, 2 ,3 ,4

// Xóa phần tử tại index biết trước - splice
// splice(index, amountDelete)

// let arrNumber = [1, 2, 3 ,4 ,5]

// arrNumber.splice(1, 2);

// ngoài ra có thể thêm vào vị trí, chuyển về số 0 rồi thêm 8, 9
// arrNumber.splice(1, 0, 8 ,9);
// console.log(arrNumber);// 1 8 9 2 3 4 5

//concat - nối mảng
// let arr1 = [3, 4];
// let arr2 = [5, 6];
// let arr3 = [];
// console.log(arr3.concat(arr1, arr2));

// reverse - đảo
// let arrNumber = [1, 2, 3 ,4 ,5];
// arrNumber.reverse();
// console.log(arrNumber); // 5 4 3 2 1

// sort - sắp xếp lại giá trị trong mảng
// let arrNumber = [5, 3 ,4, 2 ,1];
// arrNumber.sort();
// console.log(arrNumber); // 1 2 3 4 5


//bài1 nhập giá trị bất kì, tìm trong mảng [3, 4, 5 ,7, 9] nếu k có in ra false, có thì in ra true


// let arrNumber = [3, 4, 5 ,7, 9]
// let a = Number(prompt("nhập số bất kì"))
// let check = false;
// for (i=0; i<arrNumber.length; i++) {
//     if(arrNumber[i] === a) {
//         check = true;
//         break;
//     }
// }

// if(check) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// bài 2, tìm gia trị lớn nhất trong mảng, nhỏ nhất trong mảng

// let arr = [5, 3 ,8 ,9]
// let max = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (max<arr[i]) {
//         max = arr[i]
//     }
// }
// console.log(` số lớn nhất là: ${max}`);

// let arr = [5, 3 ,8 ,9]
// let min = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (min>arr[i]) {
//         min = arr[i]
//     }
// }
// console.log(` số lớn nhất là: ${min}`);


// bài 1 
// let arrNumber = [1,2,3]
// let huy = 0

// for (let a of arrNumber){
//         huy += a
//     }
// console.log(huy);

// bài 2 

// let arrNumber = [1,2,3]
// let max = arrNumber[0]
// for(i=0; i < arrNumber.length; i++) {
// if(max<arrNumber[i]) {
//     max = arrNumber[i]
// }
// }
// console.log(max);

// bài 3 

// let arrNumber = [10,8,2,6]
// let min = arrNumber[0]
// for(i=0; i < arrNumber.length; i++) {
//     if(min>arrNumber[i]) {
//         min = arrNumber[i]
//     }
// }
// console.log(min);

//bài 4 cách 1
// let arrNumber = [1, 2, 3, 4, 5];
// // let a = Number(prompt("nhập số bất kì"))
// let check = false;
// for (i=0; i<arrNumber.length; i++) {
//     if(arrNumber[i] === a) {
//         check = true;
//         break;
//     }
// }

// if(check) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

//bài 4 cách 2
// let arrNumber = [1, 2, 3, 4, 5];
// let input = +prompt("nhập giá trị")
// let checkNumber = arrNumber.includes(input)
// console.log(checkNumber);




//bài 5 cách 1: hàm có sẵn

// let arrNumber = [1, 2, 3, 4, 5];
// arrNumber.reverse();
// console.log(arrNumber);

//bài 5 cách 2: không sử dụng hàm
// let arrNumber = [1, 2, 3, 4, 5];
// let arr = []
// for (let i = arrNumber.length - 1; i>=0; i--) {
//     arr.push(arrNumber[i])
// }
// console.log(arr);

//bài 6 ( chưa xong )
// let arrNumber = [1, 2, 3, 4, 5];
// let chan = []
// for(i=0; i < arrNumber.length; i++) {
//     if (arrNumber[i]%2==0) {
//         chan.push(arrNumber[i])
//     }
// }
// console.log(chan);

//bài 7
// let arrNumber = [1, 2, 3, 2, 4, 2, 5]
// let a = Number(prompt("nhập số cần tìm"))
// let check = false;
// let count = 0
// for (i=0; i<arrNumber.length; i++) {
//     if(arrNumber[i] === a) {
//         check = true;
//         count+=1
//     }
// }

// if(check) {
//     console.log(` số lần xuất hiện của ${a} là ${count}`);
// }
// else {
//     console.log(` phần tử ${a} không có trong mảng `);
// }


//bài 8
// let arrNumber = [4, 2, 9, 5, 1]
// arrNumber.sort()
// console.log(arrNumber);



// thực hành array2
// bài 1 
// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join('+'));
 
//bài 2
// let strInput = "025468";
// let arrNumber = []
// for (i = 0; i < strInput.length; i++) {
//     if(strInput[i] % 2 === 0 && strInput[i + 1] % 2 === 0 ) {
//         arrNumber.push(strInput[i] + "-")
//     }
//     else{
//         arrNumber.push(strInput[i])
//     }
 
// } 
// console.log(arrNumber.join(""));

//bài 3 
// cách làm*
// hàm in thường => toLowerCase
// hàm in hoa =? toUpperCase

//let greeting = "hello"
//  console.log(greeting.toLowerCase());

let strInput = "The Quick Brown Fox"
let result = "";
for ( let i = 0; i < strInput.length; i++ ) {
    let arr = arr[i]
    if(arr = arr[i].toUpperCase()) {
        result += arr[i].toLowerCase();
    }
    else {
        result += arr[i].toUpperCase
    }
}
console.log(result);
//bài 4
// let input = prompt("nhập")
// let arr = input.split(',')

// let huy = 0
// for(let a of arr) {
//     huy += Number(a)
// }

// console.log(huy);

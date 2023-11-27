/*
Bài 4: Cho người dùng nhập vào 1 số bất kỳ. Kiểm tra xem số đó có phải số
nguyên tố hay không?
input: 13
output: true

Bài 5: Xây dựng hàm, kiểm tra chuỗi nào dài nhất
input: ["Black", "Pink", "Green", "Blue", "Yellow"]
output: Yellow

// Nâng cao: Cho người dùng nhập vào cách nhau bằng dấu ","
input: black, pink, green, blue, yellow
output: yellow

// Gợi ý: sử dụng .length để kiểm tra độ dài. black.length = 5

Bài 6: Xây dựng hàm, tính tổng các số chẵn trong mảng
input: [1,2,2,3,4,5,6,6,7]
output: 20

Bài 7: Cho người dùng nhập vào, xây dựng hàm tìm số lớn thứ 2 trong mảng
input: 3,5,7,6,4,8,20,55
ouput: 20

Bài 8: Cho người dùng nhập vào, tính trung bình cộng của các số đó
input: 8,9,7,4,8
output: 7.2 
*/

// bài 4: 

// function checkSoNguyen() {
//     let input =+prompt("Nhập số cần kiểm tra")
//     let check = true;
//     if(input < 2 ) {
//         check = false;
//     }
//     else {
//         for(let i = 2; i <input; i++) {
//             if(input % i ===0 ) {
//                 check = false;
//                 break;
//             }
//         }
//     }

//     if(check) {
//         console.log(` ${input} là số nguyên tố`);
//     } else {
//         console.log(` ${input} không là số nguyên tố`);

//     }
// }

// checkSoNguyen()

// bài 5:

// function longest() {
//     let input = prompt("Nhập các chữ cách nhau bằng dấu ","")
//     let strInput = input.split(",")
//     let max = strInput[0]
//     for ( let i = 1; i < strInput.length; i++) {
//         if(strInput[i].length > max.length) {
//             max = strInput[i]
//         }
//     }
//     return max;
// }
// console.log(longest());

// bài 6: 
// let arr = [1, 2, 2, 3, 4, 5, 6, 6, 7]
// let sum = () => {
//     let total = 0
//     for (i=0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0 ) {
//             total += arr[i]
//         }
//     }
// return total
// }

// console.log(sum());
// bài 7 
// function timSoLonThuHai(input) {
// let numbers = input.split(",");
// let soLonNhat = 0;
// let soLonThuHai = 0;

// for(let i = 0; i < numbers.length; i++) {
// if(numbers[i] > soLonNhat) {
//     soLonThuHai = +soLonNhat;
//     soLonNhat = +numbers[i];

// } else if (numbers[i] > soLonThuHai) {
//     soLonThuHai = numbers[i];
// break;
// }
// }
//      return soLonThuHai;
// }

// let input = prompt("Nhập các số cách nhau bằng dấu"," ");
// console.log(timSoLonThuHai(input));

//bài 8
// function average() {
//     let input = prompt("Nhập các số cách nhau bằng dấu phẩy")
//     let arr = input.split(",")
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += +arr[i]
//     }
//     return sum/arr.length;
// }

// console.log(average());

/* Bài 1: Cho người dùng nhập vào chuỗi số bất kì. Viết hàm sắp xếp chuỗi số đó từ bé đến lớn
input: 2,3,5,4,1
output: 1,2,3,4,5
*/




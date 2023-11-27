//console.log("hello");

// tu khoa khai bao bien
//var || let || const
// cu phap: [tu khoa khai bao bien][ten bien] = [value]

// var a = 10 khai báo lại và gắn lại đc giá trị
// // khai báo lại
// //var a = "hello"

// // gán lại 
// console.log(a);

// let a = 10; // không khai báo lại đc nhưng có thể gắn lại giá trị
// khai báo
// let a = 50

// gắn lại
// a = 60
// console.log(a);

//const a = 10; // không khai báo và gắn lại được
// console.log(a);

// phạm vi 
// debugger;
// let a = 30 
// console.log(a);

// alert("chuc")

// let a = confirm("điền số bạn thích")
// console.log(a); 

// bài 1: cho người dùng nhập 1 giá trị bật kì 
// document.write()
// let input = prompt("Nhập số tuổi của bạn")
// document.write(input)

//bài 2: cho người dùng điền 2 số. tính tổng 2 số đó
//input : 10 20
//output: 30

// let input1 = Number(prompt("điền số"))
// console.log(input1);

// let input2 = Number(prompt("điền thêm số"))
// console.log(input2);
// document.write(input1 + input2)
// let output = input1 + input2
// console.log(output);

/*
Bài 1: viết chương trình toán lý hóa sinh, tính trung bình
input 8 6 8
output 7.3
*/

// let VL = Number(prompt("Nhập điểm môn Vật Lý"))
// console.log(VL);
// let HH = Number(prompt("Nhập điểm môn Hóa Học"))
// console.log(HH);
// let SH= Number(prompt("Nhập điểm môn Sinh Học"))
// console.log(SH);
// let a = (VL + HH + SH)/3
// document.write(a.toFixed(2));

/*bài 2: viết ctinh chuyển từ độ C quá độ F 
độ C = (F-32)/1.8
độ F = (Cx1,8)+32
input: 1 độ C
Output: 33,8 độ F
*/



// let input1 = prompt("Nhập độ C") // không cần Number vì ngoại trừ toán + , sẽ tự ép kiểu dữ liệu
// let F = input1 * 1.8 + 32
// document.write(input1*1.8 + 32)


//Bài 4
// let Stron = prompt("Nhập bán kính hình tròn")
// document.write(Stron*Stron*3.14)

//Bài 5

// let Ctron = prompt("Nhập bán kính hình tròn")
// let kq = Ctron*2*3.14
// document.write(kq.toFixed(2))


let a = confirm("bạn đã đủ 18 tuổi chưa")



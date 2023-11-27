// 1 câu điều kiện
 
// nếu 1 + 1 = 2 alert ( đúng )

// if ( ) {
//     alert("đúng")
// }




// cú pháp
/*
if {
    //statements true
} else {
    //statements false
}
*/

/*ex1: cho người dùng điền vào 1 số bất kỳ. nếu số đó trong khoảng từ 
+ 1 < x < 9: thông báo cho người dùng diền số lớn hơn
+10: thông báo là chính xác
+ x < 10 : thông báo cho người dùng điền số nhỏ hơn
*/
// let a = prompt("điền 1 số bất kì")
// if (1<a&&a<9) {
//      alert("Số người dùng điền là" + a + "điền số lớn hơn")
//     }
// else if(a==10){
//     alert("đúng")
// }
// else {
//     alert("điền số bé hơn")
// }


/* ex2: cho người dùng nhập mật khẩu
nếu là Abc123 thì thông báo đúng
nếu không n*/

// let a = String(prompt(" điền mật khẩu "))
// if(a == "abc") {
//     alert("đúng")
// }
// else if (a=="") {
//     alert(" hãy điền mật khẩu ")

// }
// else { alert("mật khẩu sai")}

// 2. câu lệnh lặp (for)

// cú pháp:
/* for ( điểm bắt đầu; điều kiện lặp; bước nhảy)*/
// 0 1 2 3 4
// for(let i = 0; i <5; i++){
//     console.log(i);
//     console.log("hello");
// }

// cú pháp
// white ( điều kiện ){ statement}


// do{
//     console.log(123123);}
//     while ( 3 > 2 );
    // câu lệnh break thoát khỏi switch case và vòng lặp gần nhất
    // câu lệnh continue: dừng vòng lặp tại đó và nhảy sang vòng lặp tiếp theo

// breach & continue
// for ( let i = 0; i < 5; i++)
// {
//     if ( i === 3){
//         continue;
//     }
//     console.log(i); // 0 1 2 4
// }

//bài 1


// bmi = weight / ( height * height )
//  cho người dùng nhâp cân nặng, chiều cao
// tính bmi => thông báo cho người dùng

// let bmi = prompt("nhập cân nặng(kg)")
// let bmi1 = prompt(" nhập chiều cao(mét)")
// let a = bmi / (bmi1*bmi1)
// if(a < 18.5){
//     document.write("gầy")
// }
// else if ( 18.5<a&&a<24.9){
//     document.write("bình thường")
// }
// else if(a >= 25) { 
//     document.write("béo phì")
// }

// bài 2
let month = Number(prompt("nhập tháng bất kỳ"))

switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
     document.write(`${month} có 31 ngày`);
break;
    case 4:
    case 6:
    case 9:
    case 11:
     document.write(`${month} có 30 ngày`);
break;
    
case 2:

document.write(`${month} có 28 hoặc 29 ngày`);
break;
default
}
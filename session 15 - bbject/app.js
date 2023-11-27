//Object ( đối tượng)
// khái niệm: object là 1 khái niệm trừu tượng dùng để ám chỉ 1 vật, 1 sự việc cụ thể

//ví dụ
/*
đối tượng: mèo
lông dài, màu trắng, kêu meowmeow..
*/

// cú pháp

//[từ khóa khai báo] [tên object] = {key1: value1, key2: value 2,.... keuN: valueN }

// let student = {
//     name: " thịnh ",
//     age: 22,
//     address: "Lạng Sơn",
//     gender: "Nữ",
// };

// console.log(student);


//2. CRUD - Create / Read / Update / Delete 


//2.1 Create
// let student = {
//     name: " thịnh ",
//     age: 22,
//     address: "Lạng Sơn",
    
// };
// student.gender = "Nữ"; (tên object + tên )

// console.log(student);

// kiểu thêm mới key động (dynamic)

// let phone = "phone";
// let phoneNumber = "032615465"

// let student = {
//     name: " thịnh ",
//     age: 22,
//     address: "Lạng Sơn",
       //S06
//     [phone]: phoneNumber
// }
// console.log(student);

//2.2 Read
//Read one
// console.log(student.addree); ( tên đối tượng + key )

//Read all
//for in
// let student = {
//     name: " thịnh ",
//     age: 22,
//     address: "Lạng Sơn",
//     gender: "Nữ",
// };
// for (const key in student) {
//     console.log((key)); // các key có trong object 
//     console.log(student[key]); // các value có trong object 
// }

//2.3 Update

// let student = {
//     name: " thịnh ",
//     age: 22,
//     address: "Lạng Sơn",
//     gender: "Nữ",
// };
// student.name = "Khánh"
// console.log(student);

//2.4 Delete

// let student = {
//     name: " thịnh ",
//     age: 22,
//     address: "Lạng Sơn",
//     gender: "Nữ",
// };
// delete student.age;


// console.table(student); in ra bảng

//bài 1

// let person = {
//     name: " thịnh ",
//     age: 22,
//     address: "Lạng Sơn",
//     phone: "016524866",
// };

// console.log(`thông tin người dùng là:
//  tên: ${person.name} - tuổi: ${person.age} - địa chỉ: ${person.address} - sđt: ${person.phone} `);

//bài 2 
// let employee = {
//     name: "Huy",
//     salary: 12000,
//     deparment: "Nhân viên",
// }
// employee.salary = 2400;
// console.log(`thông tin nhân viên là:
//  Tên NV: ${employee.name} - Lương: ${employee.salary} - Chức vụ: ${employee.deparment} `);

//bài 3:
// let input = prompt("nhập 4 chữ cái C/R/U/D")
// let info = {
//     name:"Huy",
//     age: 20,
//     address: "Hà Nội",
// }
// if(input === "C") {
//     let inputName = prompt("nhập tên")
//    info.name = inputName
   
//     let inputAge = prompt("nhập tuổi")
//    info.age = inputAge
    
//     let inputAddress = prompt("nhập địa chỉ")
//    info.address = inputAddress
//     console.table(info);
// } else if (input === "R") {
// console.table(info);
// } else if ( input ==="U") {
//     let keyObj = prompt("Nhập key muốn update")
//     let check = false
// for ( const key in info) {
//     if(keyObj == key) {
//         let newValue = prompt("Nhập value mới")
//         check = true
//         info[key] = newValue;
        
//       }
//     }
//     if(check) {
//         console.table(info);
//     } else {
//         alert('không tìm thấy')
//     }
// } else if (input === "D") {
//     let deleteKey = prompt("Nhập key muốn xóa");
//     delete info[deleteKey];
//     console.table(info);
//   } else {
//     alert("Not found");
//   }


//bt
let products = [
    {
      id: 1,
      name: "Xiaomi portable charger 20000mah",
      Brand: "Xiaomi",
      Price: "428",
      Color: "White",
      Category: "Charger",
    },
    {
      id: 2,
      name: "VSmart Active 1",
      Brand: "VSmart",
      Price: "5487",
      Color: "Black",
      Category: "Phone",
    },
    {
      id: 3,
      name: "IPhone X",
      Brand: "Apple",
      Price: "21490",
      Color: "Gray",
      Category: "Phone",
    },
    {
      id: 4,
      name: "Samsung Galaxy A9",
      Brand: "Samsung",
      Price: "8490",
      Color: "Blue",
      Category: "Phone",
    },
  ];
//1.1
  // for (let i = 0; i < products.length; i++) {
  //   console.log(`
  //   --------------------------------
  //   Name: ${products[i].name}
  //   Price: ${products[i].Price}`);
  // }
  
//1.2
// for (let i = 0; i < products.length; i++) {
//     console.log(`
//     #${products[i].id} Name: ${products[i].name}
//     Price: ${products[i].Price}`)
// }

// let inputId = +prompt("Nhập id sản phẩm")

// for( let j = 0; j < products.length; j++) {
//   if(inputId === products[j].id) {

//     console.clear();
//     console.log(`
//     name: ${products[j].name},
//     Brand: ${products[j].Brand},
//     Price: ${products[j].Price},
//     Color: ${products[j].Color},
//     Category: ${products[j].Category}`)
//   }
// }

//1.3 
// let inputCategory = prompt("Nhập thể loại sản phẩm")

// let strCategory = ""

// for( let j = 0; j < products.length; j++) {
//   if(inputCategory === products[j].Category) {
//     console.clear()
//     strCategory += `
//     name: ${products[j].name}
//     Price: ${products[j].Price}
//     `;
//     console.log(strCategory);
//   }
// }

//1.4 Thêm thuộc tính provider vào trong product
// products[0].Provider = "PhukienzeroDientuccc"
// console.log(products);
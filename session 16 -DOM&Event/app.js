//1. DOM
// console.log(document);

//2. Selector ( bộ chọn trong DOM)
//ID, CLASS, Tagname

//ID
// let idDiv = document.getElementById("app")
// console.log(idDiv);

//Class
// let classDiv = document.getElementsByClassName("content")
// console.log(classDiv);
// console.log(classDiv[3]);

//Tagname
// let tagName = document.getElementsByTagName("div")
// console.log(tagName);

//querySelector
// Lấy thẻ đó ra dựa trên id, class, tagname
// id - "#nameID" ; class - ".className" ; tagName - "tagname"

// querySelectorAll
//let queryALL


// thuộc tính (Properties)
// Text & content
// innerHTML: giúp lấy toàn bộ nội dung là HTML có trong thẻ đó

// let p = document.getElementsByTagName("p")
// p[0].innerHTML = "hello world"
// console.log(p[0]);

// let aboutPage = document.getElementById("idAbout")
// console.log(aboutPage.innerHTML);

//innerText và textConent: Chỉ lấy nội dung là chữ trong thẻ

// let idDiv = document.getElementById("app")
// console.log(idDiv.textContent);

//4. value
// let input = document.getElementById("inputUser")
// console.log(input.value);

//5.Style
// khi sử dụng style trong js => viết theo camelCase
// background-color => backgroudColor

// let idDiv = document.getElementById("app")
// idDiv.style.color = "white";
// idDiv.style.backgroundColor = "pink";

//6. Children and PảentElement

// let ul = document.getElementById("ulList")
// console.log(ul.children[1]); // truy cập từ cha và con

// console.log(ul.children[2].parentElement);  // truy cập từ con lên cha 

//7. ClassList và Id

//id là lấy thuộc tính id có trong thẻ
// let ul = document.getElementById("ulList")
// ul.id = "idNew"
// console.log(ul.id);

//class: lấy class có trong thẻ
// let li = document.getElementsByClassName("liCl")
// console.log(li[0].classList[0]);

//8. Thêm và xóa classList
// thêm id
// let ul = document.getElementById("ulList")
// ul.classList = "ClNew"
// console.log(ul);


//thêm vào class

//10. event

// cách1

// function eventClick() {
//     alert("hello")
// }

// cách 2
// let button = document.getElementById("clickMe")

// button.onclick = () => {
//     alert("hello")

// }

//cách 3 
// let button = document.getElementById("clickMe")
// button.addEventListener("click", () => { alert("hello")
// })

// bài tập
let button = document.getElementById("clickMe")

button.onclick = () => {
    let idDiv = document.getElementById("app")
    idDiv.style.backgroundColor = "rgb("

}
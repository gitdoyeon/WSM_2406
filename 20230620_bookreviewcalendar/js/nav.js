// alert("딱히 없다")
// console.log("저도 없어요")


// sayHello();

// 1. HTML -> js
// 햄버거 메뉴 -> navToggleDiv
// 햄버거 메뉴 ㅑ -> navToggleI
// .nav-list -> navListUl
// const navToggleDiv = document.getElementById("nav_toggle");
// console.log(navToggleDiv);
// console.log(nav_toggle);

const navToggleI = nav_toggle.getElementsByTagName("i")[0];         
const navListUl = document.getElementsByClassName("nav-list")[0]; 

// 2. Event Handling
// nav_toggle.onclick = () => alert("안녕");  // 시험 나옴 // 바로 실행되지 않음 // 잘 ok
// nav_toggle.onclick = alert("안녕");     // 바로 실행됨  // not ok

nav_toggle.onclick = () => {
    // 햄버거 메뉴를 클릭하면, 햄버거메뉴 i <-> <i class="bi bi-x-lg"></i>
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");

    // 햄버거 메뉴를 클릭하면, .nav=list에 .show-menu 보여주기 <-> 안보여주기
    navListUl.classList.toggle("show-menu");
}

// ------------------------------------

// HTML -> js
// id
// const navToggleDiv = document.getElementById("nav_toggle");
// nav_toggle      // js 변수규칙 지켜야함

// class
// const navToggleDiv = document.getElementByClassName("nav-toggle")[0];

// tag
// const navToggleDiv = document.getElementByClassName("nav-toggle")[0];

// querySelector, querySelectorAll
// const navToggleDiv = document.querySelector("#nav_toggle");
// const navToggleDiv = document.querySelectorAll(".nav_toggle");
// const navToggleDiv = document.querySelectorAll("div")[0];

// URL book에 해당하는 parameter 값을 읽어오자 (String)
let url = new URL(location.href);
let book = url.searchParams.get("book");
console.log(`book : ${book} typeof: ${typeof book}`);      // "3" (string)

// book이 null이면 책장으로 가자
if(book === null) {
    location.href = "index.html";
}

// book값(String) -> bookId(number) 변환하자 "3"->3
// let bookId = Number(book);
let bookId = parseInt(book);     // string -> number 
console.log(`bookId : ${book} typeof: ${typeof bookId}`);   // 3 (number)

// books를 돌면서 bookId(number) 숫자와 같은 id값의 책을 가져오자
let bookData;
for(let bookOne of books) {         // === : 값과 자료형이랑 둘 다 맞을 때 ㅇㅈ
    if(bookId === bookOne.id) { 
        bookData = bookOne;
        break;
    }
}

// 제목
let title = bookData.title;
let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.img;

console.log(title, author, publisher, bookImage);

// HTML 요소 -> JS 변수
const bookImageDiv = document.getElementsByClassName("book-image")[0];
bookImageDiv.innerHTML = `<img src="${bookImage}">`;

const titleDiv = document.getElementsByClassName("title")[1];
titleDiv.innerHTML = title;

const authorDiv = document.getElementsByClassName("author")[1];
authorDiv.innerHTML = author;

const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher;
// const titleDiv = document.querySelectorAll(".title");       // 다른 방법

// 읽은 날짜 : 임시로 오늘의 날짜 표시
let now = new Date();

// 오늘의 날짜 구하자
let year = now.getFullYear();
let month = now.getMonth()+1;
let day = now.getDate();

// 사람이 알아보는 형식으로 바꾸자
let dateString = `${year}년 ${month}월 ${day}일`

// HTML -> JS
const readDateDiv = document.getElementsByClassName("read-date")[1];

// 오늘의 날짜 값 넣자
readDateDiv.innerHTML = dateString;
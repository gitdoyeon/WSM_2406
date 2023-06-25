//.book-item > img 태그의 src 속성 초기화하자

//HTML -> js
const bookItems = document.getElementsByClassName("book-item");
let i = 0
for (let bookItem of bookItems) {
    const bookItemImg = bookItem.getElementsByTagName("img")[0];    //.book-item 하나씩 꺼내어 img 태그 가져오자
    bookItemImg.src = books[i].img;    //data.js 에서 img 값 가져와서 img 태그에 적용하자
    i++;
}


// const bookItem = bookItems[0];
// console.log(bookItems)
// const bookItemImg = bookItem.getElementsByTagName("img")[0];
// console.log(bookItemImg)
// bookItemImg.src = books[0].img
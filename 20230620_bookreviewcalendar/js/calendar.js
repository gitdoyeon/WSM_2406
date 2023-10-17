var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;

const datesCoainterDiv = document.getElementsByClassName("dates container")[0];

const setCalendar = (year, month) => {
    //현재 월 제목에 표시하자
    //html -> js
    var titleMonthDiv = document.getElementsByClassName("month")[0];

    // 해당 달의 마지막 날짜까지 날짜 div 만들기
    // DatesContainerDiv의 자식들 DatesItemDiv clear
    // 방법1
    while(datesCoainterDiv.firstChild != undefined) {
        datesCoainterDiv.removeChild(datesCoainterDiv.firstChild);
    }
    //방법2
    // datesCoainterDiv.replaceChildren();

    // = `${month월}`;
    titleMonthDiv.innerHTML = `${month}월`;
    
    // 1~해당 월의 마지막 날짜까지 날짜 div만들기    
    //해당 월의 마지막날
    var thisMonthLastDate = new Date(year,  month + 1 - 1, 0).getDate();  //전달 마지막 날
    var date;

    for(let date=1; date<thisMonthLastDate; date++) {
        let dateItemDiv = document.createElement("div");    //<div></div>
        dateItemDiv.classList.add("date");
        dateItemDiv.classList.add("item");
        dateItemDiv.innerHTML = date;

        //dates.container에게 자식으로 붙이자
        datesCoainterDiv.appendChild(dateItemDiv)
    }

    // 1일을 해당 요일로 이동하자
    let firstDateDiv = datesCoainterDiv.querySelector(".date.item:nth-child(1)");
    // css: .date.item:bth-child(1) {grid-column-start: 6}
    // 1일의 요일 구하자 year, month -> month 1월의 요일 : 9월 : 5
    var firstDatDay = new Date(year, month-1, 1).getDay();
    firstDateDiv.style.gridColumnStart = firstDatDay + 1;

    // 토요일: 파란색으로 글자로 : 토요일 첫날 = 7
    let saturdayFirstDate = 7 - firstDatDay;
    let saturadayDivs = datesCoainterDiv.querySelectorAll(`.date.item:nth-child(7n+${saturdayFirstDate})`);
    for(let saturdayDiv of saturadayDivs) {
        //.date.item:nth-child(7n+2) {color: blue};
        saturdayDiv.style.color = "blue";
    }
    // 일요일: 빨간색으로 글자로
    let sundayFirstDate = 8 - firstDatDay;
    let sundayDivs = datesCoainterDiv.querySelectorAll(`.date.item:nth-child(7n+${sundayFirstDate})`);
    for(let sundayDiv of sundayDivs) {
        //.date.item:nth-child(7n+2) {color: blue};
        sundayDiv.style.color = "red";
    }
    console.log(thisMonthLastDate);
    
    //해당 월의 1일 요일
    var thisMonthFirstDay = new Date(year, month - 1, 1).getDay(); //0: sum, 1: mon, 2: tue, 3: wed, 4: the, 5: fri, 6: sat 
    console.log(thisMonthFirstDay);
};
setCalendar(year,month);

// < : 이전달
const leftDiv = document.getElementsByClassName("left")[0];
leftDiv.onclick = () => {
    month--;
    let prevMonth = new Date(year, month - 1);
    year = prevMonth.getFullYear();
    month = prevMonth.getMonth() + 1;
    setCalendar(year, month);
};

// > : 이후달
let rightDiv = document.getElementsByClassName("right")[0];
rightDiv.onclick = () => {
    month++;
    if(month == 13) {
        year++;
        month = 1;
    }
    setCalendar(year, month);
};

// month += 1;

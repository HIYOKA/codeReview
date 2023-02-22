/*let data = new Array();
let totalPage = 1000;

let date = new Date(); // ex) 2021-10-07 15:30:00
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let YearMonthDate = year + "-" + month + "-" + day;

for (let i = 1; i <= totalPage; i++) {
  data[i] = {
    notice_num: i,
    title: "제목" + i,
    writer: "작성자" + i,
    date_created: YearMonthDate,
    Lookkup_num: i,
    attachment_num: 0,
    content: `<p style = "text-align: center;">수정해야할 사항</p><br>
    <p>1 tab키 구현</p><br>`,
  };
}*/
let data = [];

async function getData() {
  const response = await fetch("http://localhost:3000/notice");
  data = await response.json();
}

window.onload = function () {
  getData().then(() => {
    // data is now populated with the notice data from the API
    console.log(data);
    const post_num = localStorage.getItem("post_num");
    console.log("post_num: ", post_num);
    displayNotice(data, post_num - 1);
  });
};

function displayNotice(data, index) {
  let h2 = document.getElementById("title");
  h2.textContent = data[index].title;

  let h3 = document.createElement("h3");
  h3.textContent =
    "   작성일  " +
    data[index].date_created +
    " | 작성자  " +
    data[index].writer +
    " | 조회수  " +
    data[index].Lookkup_num;

  // h2 다음에 h3 추가
  h2.insertAdjacentElement("afterend", h3);

  let div = document.createElement("div");
  div.className = "container2";
  div.innerHTML = data[index].content;

  let notice_info = document.getElementById("notice_info");
  notice_info.insertAdjacentElement("afterend", div);
}

/*let h2 = document.getElementById("title");
h2.textContent = data[1].title;

let h3 = document.createElement("h3");
h3.textContent =
  "   작성일  " +
  data[1].date_created +
  " | 작성자  " +
  data[1].writer +
  " | 조회수  " +
  data[1].Lookkup_num;

//h2 다음에 h3 추가
h2.insertAdjacentElement("afterend", h3);

let div = document.createElement("div");
div.className = "container2";
div.innerHTML = data[1].content;

let notice_info = document.getElementById("notice_info");
notice_info.insertAdjacentElement("afterend", div);*/

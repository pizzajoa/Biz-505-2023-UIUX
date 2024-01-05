const nav_list = document.querySelectorAll("li.main_nav");
const nav_click_handler = (event) => {};
//   const target = event.target;
//   const nav_text = target.innerText;
//   alert(nav_text + "메뉴 클릭");
// };

/*
JS에서는 함수의 매개변수로 직접 함수를 전달할 수 있다
*/
nav_list.forEach((item) => {
  item.addEventListener("click", (event) => {
    const target = event.target;
    const nav_text = target.innerText;
    alert((nav_text = "메뉴 클릭"));
  });
});

$(window).scroll(function () {
  const header = $("header");
  const logo = $(".logo>a>img");
  if ($(this).scrollTop() >= 100) {
    header.css({
      height: "120px",
      backgroundColor: "black",
    });
    logo.css({
      width: "80%",
    });
  }
});
$(window).scroll(function () {
  const header = $("header");
  const logo = $(".logo>a>img");
  if ($(this).scrollTop() <= 100) {
    header.css({
      height: "120px",
      backgroundColor: "transparent",
    });
    logo.css({
      width: "100%",
    });
  }
});

const asideMenu = document.querySelector(".menu_icon");
const asideContent = document.getElementById("aside_content");
const asideClose = document.getElementById("aside_close");
const asideShow = "aside_show";
function handleClick() {
  if (asideContent.classList.contains(asideShow)) {
    asideContent.classList.remove(asideShow);
  } else {
    asideContent.classList.add(asideShow);
  }
}

function closeClick() {
  if (asideContent.classList.contains(asideShow)) {
    asideContent.classList.remove(asideShow);
  } else {
    asideContent.classList.add(asideShow);
  }
}
asideMenu.addEventListener("click", handleClick);
asideClose.addEventListener("click", closeClick);
// aside 메뉴 js

const asideSearch = document.querySelector("#aside_search");
const asideSearchIcon = document.querySelector(".search_icon");
const asideInput = document.querySelector(".form_container");

function searchShow() {
  asideSearch.style.display = "block";
  asideInput.style.display = "block";
}
function searchHide() {
  asideSearch.style.display = "none";
  asideInput.style.display = "none";
}
asideSearchIcon.addEventListener("click", searchShow);
asideSearch.addEventListener("click", searchHide);

// menu js
$(function () {
  let win_w = $(window).width();
  $(window).on("resize", function () {
    win_w = $(this).width();
  });

  $(".menu_list").on("mouseover", function () {
    if (win_w > 960) {
      $(this).children(".menu_smenu").stop(1).slideDown(300);
    } else {
      $(".menu_list").off();
    }
  });
  $(".menu_list").on("mouseleave", function () {
    if (win_w > 980) {
      $(this).children(".menu_smenu").stop(1, 1).slideUp();
    }
  });
});

$(function () {
  const responsive_menu = document.querySelector(".responsive_menu_icon");
  const responsive_container = document.querySelector(
    ".responsive_menu_container"
  );
  const responsive_close = document.querySelector(".responsive_close");

  responsive_menu.addEventListener("click", clickMenu);
  responsive_close.addEventListener("click", closeMenu);

  function clickMenu() {
    responsive_container.style.display = "block";
  }
  function closeMenu() {
    responsive_container.style.display = "none";
  }
  $(".responsive_menu_list>a").on("click", function () {
    $(".responsive_menu_smenu").stop().slideUp();
    $(this).next(".responsive_menu_smenu").stop().slideToggle();
  });
});
// 탭 메뉴

const list = document.querySelectorAll(".favorite_tab_menu_list");
const content = document.querySelectorAll(".favorite_smenu");

list.forEach((item) => {
  item.addEventListener("click", tabHandler);
});

function tabHandler(item) {
  item.preventDefault();
  const tabTarget = item.currentTarget;
  const target = tabTarget.dataset.tab;
  list.forEach((title) => {
    title.classList.remove("active");
  });
  content.forEach((target) => {
    target.classList.remove("show");
  });
  document.querySelector("#" + target).classList.add("show");
  tabTarget.classList.add("active");
}

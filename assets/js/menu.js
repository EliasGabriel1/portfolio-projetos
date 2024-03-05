var menu = document.querySelector(".menu")
menu.addEventListener("click", openMenu);

function openMenu() {
    var el = document.querySelector("input")
    if (document.querySelector("body.hidden")) {
        el.checked = false
    } else {
        el.checked = true
    }
    document.querySelector("body").classList.toggle("hidden")
};

$(".routerlinks li a").hover(
  function () {
    //Ao posicionar o cursor sobre a div
    $(this).addClass("red");
    $(".routerlinks li a").addClass("pink");
  },
  function () {
    //Ao remover o cursor da div
    $(".routerlinks li a").removeClass("pink");
    $(this).removeClass("red");
  }
);

document.addEventListener("scroll", function () {
  if (window.scrollY > 690) {
    document.querySelector(".header-container").classList.remove("fillcase");
  } else if (window.scrollY < 690) {
    document.querySelector(".header-container").classList.add("fillcase");
  }
});

document.addEventListener("scroll", function () {
  if (window.scrollY > 800) {
    document.querySelector(".header-container").style.position = "fixed";
    document.querySelector(".header-container").style.width = "100%";
    document.querySelector(".header-container").style.top = "0";
  }else  if (window.scrollY > 80) {
    document.querySelector(".header-container").classList.remove("header-fixed");
    document.querySelector(".header-container").style.paddingBottom ="10px";
  } else if (window.scrollY < 800) {
    document.querySelector("body").style.marginTop = "0px";
    document.querySelector(".header-container").style.paddingBottom="0px";
    document.querySelector(".header-container").classList.add("header-fixed");
  }
});

var lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (window.scrollY > 800) {
      if (st > lastScrollTop) {
        document.querySelector(".header-container").style.top = "-77px";
      } else if((document.documentElement.scrollHeight-document.documentElement.scrollTop)>1100){
        document.querySelector(".header-container").style.top = "0";
      }
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);
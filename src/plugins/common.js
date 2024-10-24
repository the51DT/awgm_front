function dataVaule () {
  var addRule = (function (sheet) {
    if (!sheet) return;
    return function (selector, styles) {
      if (sheet.insertRule)
        return sheet.insertRule(
          selector + " {" + styles + "}",
          sheet.cssRules.length
        );
      if (sheet.addRule) return sheet.addRule(selector, styles);
    };
  })(document.styleSheets[document.styleSheets.length - 1]);

  var i = 101;
  while (i--) {
    addRule("[data-width='" + i + "%']", "width:" + i + "%");
    addRule("[data-left='" + i + "%']", "left:" + i + "%");
    addRule("[data-height='" + i + "%']", "height:" + i + "% !important");
  }
}

function tabFn() {
  const tagList = document.querySelectorAll(".tag");
  const tagCont = document.querySelectorAll(".tag_cont");
  tagList.forEach((el, i) => {
    el.addEventListener("click", () => {
      tagList.forEach((x) => {
        x.classList.remove("on");
      });
      tagCont.forEach((x) => {
        x.classList.remove("on");
      });
      tagList[i].classList.add("on");
      tagCont[i].classList.add("on");
    });
  });
}

function layerClose (type) {
  if (type === "card") {
    const closeBtn = document.querySelectorAll(".close--btn");

    closeBtn.forEach((el, i) => {
      el.addEventListener("click", () => {
        const cardTooltip = closeBtn[i].closest(".card--per__tooltip");
        const cardGage =
          cardTooltip.parentNode.querySelector(".card--per__gage");
        closeBtn[i].closest(".card--per__tooltip").style.display = "none";
        cardGage.classList.add("none-arrow");
      });
    });
  } else if (type === "medal") {
    const medalBtn = document.querySelector(".medal_btn > button");
    const medalPopBtn = document.querySelector(".medal_btn__pop > button");

    medalBtn.addEventListener("click", function (e) {
      const target = e.target;
      const targetMedalPop = target.closest(".medal_btn").querySelector(".medal_btn__pop");
      if (!targetMedalPop.classList.contains("on")) {
        targetMedalPop.classList.add("on");
      }
    });

    medalPopBtn.addEventListener("click", function (e) {
      const target = e.target;
      target.closest(".medal_btn__pop").classList.remove("on");
    });
  } else if (type === "popup") {
    const btnClose = document.querySelector(".popup__box--close");

    btnClose.addEventListener("click", function (e) {
      const target = e.target;
      target.closest(".popup").style.display = "none";
    });    

  } else {
    // console.log("unknown type");
  }
}

dataVaule();
tabFn();
layerClose();

window.onload = function() {
  dataVaule();
  tabFn();
  layerClose();
}

export default {
  tabFn,
  layerClose,
};
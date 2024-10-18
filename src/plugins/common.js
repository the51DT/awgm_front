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

dataVaule();
tabFn();

window.onload = function() {
  dataVaule();
  tabFn();
}
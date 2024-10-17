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
  console.log("data-value add rule")
}
dataVaule();

window.onload = function() {
  console.log("common.js load");
  dataVaule();
}
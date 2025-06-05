function dataVaule () {
  var style = document.createElement("style");
  document.head.appendChild(style);

  var addRule = function (selector, styles) {
    style.appendChild(document.createTextNode(selector + " {" + styles + "}"));
  };

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
        closeBtn[i].closest(".card--per__tooltip--wrap").style.display = "none";
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
  }
  else if (type === "invite") {
    const inviteOpenBtn = document.querySelector(".invite_btn__open");
    const invitePop = document.querySelector(".invite_btn__pop");
    const inviteCloseBtn = document.querySelector(".invite_btn__pop__close");
    
    if (inviteOpenBtn && invitePop) {
      inviteOpenBtn.addEventListener("click", () => {
        invitePop.classList.add("on");
      });
    }
    
    if (inviteCloseBtn && invitePop) {
      inviteCloseBtn.addEventListener("click", () => {
        invitePop.classList.remove("on");
      });
    }
  }
  // else if (type === "invite") {
  //   const inviteBtn = document.querySelector(".invite_btn > button");
  //   const invitePopBtn = document.querySelector(".invite_btn__pop > button");

  //   inviteBtn.addEventListener("click", function (e) {
  //     const target = e.target;
  //     const targetInvitePop = target.closest(".invite_btn").querySelector(".invite_btn__pop");
  //     if (!targetInvitePop.classList.contains("on")) {
  //       targetInvitePop.classList.add("on");
  //     }
  //   });

  //   invitePopBtn.addEventListener("click", function (e) {
  //     const target = e.target;
  //     target.closest(".invite_btn__pop").classList.remove("on");
  //   });
  // } 
  else if (type === "popup") {
    const btnClose = document.querySelector(".popup__box--close");

    btnClose.addEventListener("click", function (e) {
      const target = e.target;
      target.closest(".popup").style.display = "none";
      if (document.querySelector("html").classList.contains("pop-open")) {
        document.querySelector("html").classList.remove("pop-open");
      }
    });    

  } else {
    // console.log("unknown type");
  }
}

function posValue(list) {
  list.forEach((el) => {
    const elAttr = el.getAttribute("data-left");
    const attrNum = elAttr.replace("%", "")
    if (Number(attrNum) >= 60) {
      el.classList.add("ty02")
    } else {
      el.classList.remove("ty02");
    }
  });
}

const setVh = () => {
  let vh = 0;
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};
window.addEventListener("resize", setVh);

dataVaule();
tabFn();
layerClose();
setVh();

document.addEventListener("DOMContentLoaded", function () {
  dataVaule();
  tabFn();
  layerClose();
});

export default {
  posValue,
  tabFn,
  layerClose,
};
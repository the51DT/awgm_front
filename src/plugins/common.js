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
  else if (type === "paid_reward") {
    const paidRewardOpenBtn = document.querySelector(".paid_reward_btn__open");
    const paidRewardPop = document.querySelector(".paid_reward_btn__pop");
    const paidRewardCloseBtn = document.querySelector(".paid_reward_btn__pop__close");
    
    if (paidRewardOpenBtn && paidRewardPop) {
      paidRewardOpenBtn.addEventListener("click", () => {
        paidRewardPop.classList.add("on");
      });
    }
    if (paidRewardCloseBtn && paidRewardPop) {
      paidRewardCloseBtn.addEventListener("click", () => {
        paidRewardPop.classList.remove("on");
      });
    }
  }
  else if (type === "traffic_reward") {
    const trafficRewardOpenBtn = document.querySelector(".traffic_reward_btn__open");
    const trafficRewardPop = document.querySelector(".traffic_reward_btn__pop");
    const trafficRewardCloseBtn = document.querySelector(".traffic_reward_btn__pop__close");
    
    if (trafficRewardOpenBtn && trafficRewardPop) {
      trafficRewardOpenBtn.addEventListener("click", () => {
        trafficRewardPop.classList.add("on");
      });
    }
    if (trafficRewardCloseBtn && trafficRewardPop) {
      trafficRewardCloseBtn.addEventListener("click", () => {
        trafficRewardPop.classList.remove("on");
      });
    }
  }
  else if (type === "traffic_reward") {
    const trafficRewardOpenBtn = document.querySelector(".traffic_reward_btn__open");
    const trafficRewardPop = document.querySelector(".traffic_reward_btn__pop");
    const trafficRewardCloseBtn = document.querySelector(".traffic_reward_btn__pop__close");
    
    if (trafficRewardOpenBtn && trafficRewardPop) {
      trafficRewardOpenBtn.addEventListener("click", () => {
        trafficRewardPop.classList.add("on");
      });
    }
    if (trafficRewardCloseBtn && trafficRewardPop) {
      trafficRewardCloseBtn.addEventListener("click", () => {
        trafficRewardPop.classList.remove("on");
      });
    }
  }
  else if (type === "badges_reward") {
    const badgesRewardOpenBtn = document.querySelector(".badges_reward_btn__open");
    const badgesRewardPop = document.querySelector(".badges_reward_btn__pop");
    const badgesRewardCloseBtn = document.querySelector(".badges_reward_btn__pop__close");
    
    if (badgesRewardOpenBtn && badgesRewardPop) {
      badgesRewardOpenBtn.addEventListener("click", () => {
        badgesRewardPop.classList.add("on");
      });
    }
    if (badgesRewardCloseBtn && badgesRewardPop) {
      badgesRewardCloseBtn.addEventListener("click", () => {
        badgesRewardPop.classList.remove("on");
      });
    }
  }
    else if (type === "challenge_method") {
    const challengeMethodOpenBtn = document.querySelector(".challenge_method_btn__open");
    const challengeMethodPop = document.querySelector(".challenge_method_btn__pop");
    const challengeMethodCloseBtn = document.querySelector(".challenge_method_btn__pop__close");
    
    if (challengeMethodOpenBtn && challengeMethodPop) {
      challengeMethodOpenBtn.addEventListener("click", () => {
        challengeMethodPop.classList.add("on");
      });
    }
    if (challengeMethodCloseBtn && challengeMethodPop) {
      challengeMethodCloseBtn.addEventListener("click", () => {
        challengeMethodPop.classList.remove("on");
      });
    }
  }
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
    if (Number(attrNum) >= 10) {
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
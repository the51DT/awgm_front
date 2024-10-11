export const menuRoutes = [
  {
    text: "01 로그인",
    path: "/로그인",
    component: () => import("@/views/Gut00001.vue"),
    meta: { layout: "footerOnly" },
    subMenu: [
      {
        text: "로그인-Gut00001",
        path: "/로그인-Gut00001",
        isCompleted: true,
      },
      {
        text: "자녀계정 로그인-Gut00002",
        path: "/자녀계정 로그인-Gut00002",
        isCompleted: true,
        meta: { layout: "" },
      },
      {
        text: "자녀계정 비밀번호 변경-Gut0000201",
        path: "/자녀계정 비밀번호 변경-Gut0000201",
        isCompleted: true,
      },
      {
        text: "자녀계정 부모계정 인증-Gut0000202",
        path: "/자녀계정 부모계정 인증-Gut0000202",
        isCompleted: true,
      },
      {
        text: "자녀계정 등록-Gut00003",
        path: "/자녀계정 등록-Gut00003",
        isCompleted: true,
      },
      {
        text: "자녀계정 약관동의-Gut0000301",
        path: "/자녀계정 약관동의-Gut0000301",
        isCompleted: true,
      },
      {
        text: "자녀계정 약관동의(팀가입완료)-Gut0000302",
        path: "/자녀계정 약관동의(팀가입완료)-Gut0000302",
        isCompleted: true,
      },
    ],
  },

  {
    text: "02 홈",
    path: "/홈",
    component: () => import("@/views/Gut00004.vue"),
    meta: { layout: "none" },
    subMenu: [
      {
        text: "홈 첼린지-Gut00004",
        path: "/홈 첼린지-Gut00004",
        isCompleted: true,
      },
      {
        text: "팀활동 종료-Gut0000401",
        path: "/팀활동 종료-Gut0000401",
        isCompleted: true,
      },
      {
        text: "나의 인증 현황-Gut00007",
        path: "/나의 인증 현황-Gut00007",
        isCompleted: true,
      },
      {
        text: "공지사항 목록-Gut00005",
        path: "/공지사항 목록-Gut00005",
        isCompleted: true,
      },
      {
        text: "공지사항 상세-Gut00006",
        path: "/공지사항 상세-Gut00006",
        isCompleted: true,
      },
    ],
  },
  {
    text: "03 첼린지",
    path: "/첼린지",
    component: () => import("@/views/Gut00008.vue"),
    meta: { layout: "none" },
    subMenu: [
      {
        text: "홈 첼린지-Gut00008",
        path: "/홈 첼린지-Gut00008",
        isCompleted: true,
      },
      {
        text: "첼린지 미 진행시-Gut00007",
        path: "/첼린지 미 진행시-Gut00007",
        isCompleted: true,
      },
      {
        text: "(pu)미션 인증 공유-Gut0000701",
        path: "/(pu)미션 인증 공유-Gut0000701",
        isCompleted: true,
      },
      {
        text: "첼린지 이력보기-Gut00023",
        path: "/첼린지 이력보기-Gut00023",
        isCompleted: true,
      },
    ],
  },
  {
    text: "04 나의 팀",
    path: "/나의 팀",
    component: () => import("@/views/Gut00009.vue"),
    meta: { layout: "none" },
    subMenu: [
      {
        text: "나의 팀 목록-Gut00009",
        path: "/나의 팀 목록-Gut00009",
        isCompleted: true,
      },
      {
        text: "나의 팀 상세-Gut00010",
        path: "/나의 팀 상세-Gut00010",
        isCompleted: true,
      },
      {
        text: "(pu)팀 초대하기-Gut0001002",
        path: "/pu)팀 초대하기-Gut0001002",
        isCompleted: true,
      },
      {
        text: "팀 랭킹-Gut00011",
        path: "/팀 랭킹-Gut00011",
        isCompleted: true,
      },
      {
        text: "팀 관리-Gut00012",
        path: "/팀 관리-Gut00012",
        isCompleted: true,
      },
      {
        text: "팀원-Gut00013",
        path: "/팀원-Gut00013",
        isCompleted: true,
      },
      {
        text: "팀원상세-Gut00032",
        path: "/팀원상세-Gut00032",
        isCompleted: true,
      },
      {
        text: "팀만들기-Gut00014",
        path: "/팀만들기-Gut00014",
        isCompleted: true,
      },
    ],
  },
  {
    text: "05 마이",
    path: "/마이",
    component: () => import("@/views/Gut00009.vue"),
    meta: { layout: "none" },
    subMenu: [
      {
        text: "마이 index-Gut00015",
        path: "/마이 index-Gut00015",
        isCompleted: true,
      },
      {
        text: "회원정보-Gut00016",
        path: "/회원정보-Gut00016",
        isCompleted: true,
      },
      {
        text: "바디키인증-Gut00018",
        path: "/바디키인증-Gut00018",
        isCompleted: true,
      },
      {
        text: "자녀계정 등록관리-Gut00019",
        path: "/자녀계정 등록관리-Gut00019",
        isCompleted: true,
      },
      {
        text: "자녀계정 등록수정-Gut0001901",
        path: "/자녀계정 등록수정-Gut0001901",
        isCompleted: true,
      },
      {
        text: "자녀계정 비밀번호재설정-Gut0002001",
        path: "/자녀계정 비밀번호재설정-Gut0002001",
        isCompleted: true,
      },
      {
        text: "자녀계정 활동보기-Gut00022",
        path: "/자녀계정 활동보기-Gut00022",
        isCompleted: true,
      },
      {
        text: "자녀계정 활동보기 팀상세-Gut0002201",
        path: "/자녀계정 활동보기 팀상세-Gut0002201",
        isCompleted: true,
      },
      {
        text: "서비스이용안내-Gut00024",
        path: "/서비스이용안내-Gut00024",
        isCompleted: true,
      },
      {
        text: "FAQ-Gut00025",
        path: "/FAQ-Gut00025",
        isCompleted: true,
      },
    ],
  },
  {
    text: "06 Footer",
    path: "/footer",
    component: () => import("@/views/Gut00026.vue"),
    meta: { layout: "none" },
    subMenu: [
      {
        text: "이용약관-Gut00026",
        path: "/이용약관-Gut00026",
        isCompleted: true,
      },
      {
        text: "개인정보처리방침-Gut00027",
        path: "/개인정보처리방침-Gut00027",
        isCompleted: true,
      },
    ],
  },
  {
    text: "07 ETC",
    path: "/시스템점검",
    component: () => import("@/views/Gut00028.vue"),
    meta: { layout: "none" },
    subMenu: [
      {
        text: "시스템점검안내-Gut00028",
        path: "/시스템점검안내-Gut00028",
        isCompleted: true,
      },
      {
        text: "loading-Gut00029",
        path: "/loading-Gut00029",
        isCompleted: true,
      },
      {
        text: "500 error-Gut00030",
        path: "/500 error-Gut00030",
        isCompleted: true,
      },
      {
        text: "404 error-Gut00031",
        path: "/404 error-Gut00031",
        isCompleted: true,
      },
      {
        text: "팝업 템플릿-Gut0000101",
        path: "/팝업 템플릿-Gut0000101",
        isCompleted: true,
      },
    ],
  },
];

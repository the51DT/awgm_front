// 메뉴 타입
const MENU_TYPES = {
  LOGIN: "login",
  HOME: "home",
  CHALLENGE: "challenge",
  TEAM: "team",
  ACTIVITY : "activity",
  MY: "my",
  FOOTER: "footer",
  ETC: "etc",
};

// 공통 메타
const createMeta = (layout = "none", options = {}) => ({
  layout,
  ...options,
});

// 서브메뉴 생성
const createSubMenu = (items) =>
  items.map((item) => ({
    ...item,
    isCompleted: true,
    meta: createMeta(item.meta?.layout, item.meta),
  }));

// 메인 메뉴 생성
const createMainMenu = (text, path, type, subMenu) => ({
  text,
  path,
  type,
  meta: createMeta("none"),
  subMenu: createSubMenu(subMenu),
});

// 메뉴 데이터 구조화
export const menuRoutes = [
  createMainMenu("01 로그인", "/로그인", MENU_TYPES.LOGIN, [
    {
      text: "로그인-Gut00001",
      path: "/로그인-Gut00001",
      meta: { layout: "footerOnly" },
    },
    {
      text: "카카오톡 회원가입 약관동의-Gut0000101",
      path: "/카카오톡 회원가입 약관동의-Gut0000101",
    },
    {
      text: "자녀계정 로그인-Gut00002",
      path: "/자녀계정 로그인-Gut00002",
      meta: { layout: "none" },
    },
    {
      text: "자녀계정 비밀번호 변경-Gut0000201",
      path: "/자녀계정 비밀번호 변경-Gut0000201",
      meta: { layout: "none" },
    },
    {
      text: "자녀계정 등록-Gut00003",
      path: "/자녀계정 등록-Gut00003",
      meta: { layout: "none" },
    },
    {
      text: "(PU) 자녀 개인정보 수집 이용동의-Gut0000301",
      path: "/(PU) 자녀 개인정보 수집 이용동의-Gut0000301",
      meta: { layout: "none" },
    },
    {
      text: "(PU) 개인정보 제3자 제공 이용동의-Gut0000302",
      path: "/(PU) 개인정보 제3자 제공 이용동의-Gut0000302",
      meta: { layout: "none" },
    },
    {
      text: "(PU) 이용약관 동의-Gut0000303",
      path: "/(PU) 이용약관 동의-Gut0000303",
      meta: { layout: "none" },
    },
    {
      text: "(PU) 개인정보 제3자 제공 이용동의(팀장)-Gut0000304",
      path: "/(PU) 개인정보 제3자 제공 이용동의(팀장)-Gut0000304",
      meta: { layout: "none" },
    },
    // {
    //   text: "(PU) 법정대리인 동의 (부모계정 인증 팝업)-Gut0000304",
    //   path: "/(PU) 법정대리인 동의 (부모계정 인증 팝업)-Gut0000304",
    //   meta: { layout: "none" },
    // },
    {
      text: "(PU) 자녀의 팀 참가 동의-Gut0000305",
      path: "/(PU) 자녀의 팀 참가 동의-Gut0000305",
      meta: { layout: "none" },
    },
    {
      text: "(PU) 개인정보 제3자 제공 이용동의-Gut0000306",
      path: "/(PU) 개인정보 제3자 제공 이용동의-Gut0000306",
      meta: { layout: "none" },
    },
    {
      text: "(PU) 팀참여 완료 (상시 및 보상 X)-Gut0000307",
      path: "/(PU) 팀참여 완료 (상시 및 보상 X)-Gut0000307",
      meta: { layout: "none" },
    },
    {
      text: "(PU) 팀참여 완료 (챌린지 ABC 보상 O)-Gut0000308",
      path: "/(PU) 팀참여 완료 (챌린지 ABC 보상 O)-Gut0000308",
      meta: { layout: "none" },
    },
    {
      text: "(PU) 인증완료 팝업-Gut0000309",
      path: "/(PU) 인증완료 팝업-Gut0000309",
      meta: { layout: "none" },
    },
    {
      text: "(PU) 자녀계정 비밀번호 재설정 안내 팝업 - Gut00033",
      path: "/(PU) 자녀계정 비밀번호 재설정 안내 팝업 - Gut00033",
      meta: { layout: "none" },
    },
  ]),

  createMainMenu("02 홈", "/홈", MENU_TYPES.HOME, [
    {
      text: "홈 첼린지-Gut00004",
      path: "/홈 첼린지-Gut00004",
      meta: { layout: "", white: true },
    },
    {
      text: "(PU) 홈 첼린지 인증방법선택 -Gut0000402",
      path: "/(PU) 홈 첼린지 인증방법선택 -Gut0000402",
      meta: { layout: "none" },
    },
    {
      text: "(PU) 홈 첼린지 인증완료 -Gut0000403",
      path: "/(PU) 홈 첼린지 인증완료 -Gut0000403",
      meta: { layout: "none" },
    },
    {
      text: "나의 인증 현황-Gut0000-7",
      path: "/나의 인증 현황-Gut0000-7",
      meta: { layout: "none" },
    },
    {
      text: "공지사항 목록-Gut00005",
      path: "/공지사항 목록-Gut00005",
      meta: { layout: "none" },
    },
    {
      text: "공지사항 상세-Gut00006",
      path: "/공지사항 상세-Gut00006",
      meta: { layout: "none" },
    },
  ]),

  createMainMenu("03 첼린지", "/첼린지", MENU_TYPES.CHALLENGE, [
    {
      text: "홈 첼린지-Gut00008",
      path: "/홈 첼린지-Gut00008",
      meta: { layout: "headerOnly" },
    },
    {
      text: "홈 첼린지(다건진행 시)-Gut00008-02",
      path: "/홈 첼린지(다건진행 시)-Gut00008-02",
      meta: { layout: "headerOnly" },
    },
    {
      text: "홈 첼린지(전체 챌린지 종료 시)-Gut00008-03",
      path: "/홈 첼린지(전체 랠린지 종료 시)-Gut00008-03",
      meta: { layout: "headerOnly" },
    },
    {
      text: "첼린지 미 진행시-Gut00007",
      path: "/첼린지 미 진행시-Gut00007",
      meta: { layout: "headerOnly" },
    },
    {
      text: "미션 인증 공유-Gut0000701",
      path: "/미션 인증 공유-Gut0000701",
      meta: { layout: "none" },
    },
    {
      text: "첼린지 이력보기-Gut00023",
      path: "/첼린지 이력보기-Gut00023",
      meta: { layout: "none" },
    },
  ]),

  createMainMenu("04 나의 팀", "/나의 팀", MENU_TYPES.TEAM, [
    {
      text: "나의 팀 목록-Gut00009",
      path: "/나의 팀 목록-Gut00009",
      meta: { layout: "headerOnly" },
    },
    {
      text: "나의 팀 정보(챌린지)-Gut00010",
      path: "/나의 팀 정보(챌린지)-Gut00010",
      meta: { layout: "none" },
    },
    {
      text: "나의 팀 정보(상시)-Gut00010-02",
      path: "/나의 팀 정보(상시)-Gut00010-02",
      meta: { layout: "none" },
    },
    {
      text: "(pu)팀 초대하기-Gut0001002",
      path: "/pu)팀 초대하기-Gut0001002",
      meta: { layout: "none" },
    },
    {
      text: "(pu)이전 팀의 팀원 초대하기-Gut0001002-1",
      path: "/pu)이전 팀의 팀원 초대하기-Gut0001002-1",
      meta: { layout: "none" },
    },
    {
      text: "팀 랭킹-Gut00011",
      path: "/팀 랭킹-Gut00011",
      meta: { layout: "none" },
    },
    {
      text: "팀 관리-Gut00012",
      path: "/팀 관리-Gut00012",
      meta: { layout: "none" },
    },
    {
      text: "팀원인증현황(팀장)-Gut00013",
      path: "/팀원인증현황(팀장)-Gut00013",
      meta: { layout: "none" },
    },
    {
      text: "팀원인증현황(팀원)-Gut00013-01",
      path: "/팀원인증현황(팀원)-Gut00013-01",
      meta: { layout: "none" },
    },
    {
      text: "팀원인증현황(light 팀장)-Gut00013-02",
      path: "/팀원인증현황(light 팀장)-Gut00013-02",
      meta: { layout: "none" },
    },
    {
      text: "팀원인증현황(light 팀원)-Gut00013-03",
      path: "/팀원인증현황(light 팀원)-Gut00013-03",
      meta: { layout: "none" },
    },
    {
      text: "팀원인증현황 챌린지(팀장)-Gut00013-04",
      path: "/팀원인증현황 챌린지(팀장)-Gut00013-04",
      meta: { layout: "none" },
    },
    {
      text: "팀원인증현황 챌린지(팀원)-Gut00013-05",
      path: "/팀원인증현황 챌린지(팀원)-Gut00013-05",
      meta: { layout: "none" },
    },
    {
      text: "팀원인증현황 챌린지(light 팀장)-Gut00013-06",
      path: "/팀원인증현황 챌린지(light 팀장)-Gut00013-06",
      meta: { layout: "none" },
    },
    {
      text: "팀원인증현황 챌린지(light 팀원)-Gut00013-07",
      path: "/팀원인증현황 챌린지(light 팀원)-Gut00013-07",
      meta: { layout: "none" },
    },
    {
      text: "팀원인증현황 none-Gut00013-08",
      path: "/팀원인증현황 none-Gut00013-08",
      meta: { layout: "none" },
    },
    {
      text: "팀만들기-Gut00014",
      path: "/팀만들기-Gut00014",
      meta: { layout: "none" },
    },
    {
      text: "팀만들기(상시)-Gut00014-02",
      path: "/팀만들기(상시)-Gut00014-02",
      meta: { layout: "none" },
    },
    {
      text: "전체 팀원 보기-Gut00018",
      path: "/전체 팀원 보기-Gut00018",
      meta: { layout: "none" },
    },
    {
      text: "전체 팀원 보기 강퇴 상세팝업-Gut00001801",
      path: "/전체 팀원 보기 강퇴 상세팝업-Gut00001801",
      meta: { layout: "none" },
    },
    {
      text: "팀원 상세(챌린지)-Gut00032",
      path: "/팀원 상세(챌린지)-Gut00032",
      meta: { layout: "none" },
    },
    {
      text: "팀원 상세(상시)-Gut0003201",
      path: "/팀원 상세(상시)-Gut0003201",
      meta: { layout: "none" },
    },
    {
      text: "팀원 상세(자녀)-Gut0003202",
      path: "/팀원 상세(자녀)-Gut0003202",
      meta: { layout: "none" },
    },
    {
      text: "나의 팀 목록 초대받은팀-Gut00034",
      path: "/나의 팀 목록 초대받은팀-Gut00034",
      meta: { layout: "headerOnly" },
    },
    {
      text: "(PU)나의 팀 목록 초대받은팀-Gut0003401",
      path: "/(PU)나의 팀 목록 초대받은팀-Gut0003401",
      meta: { layout: "none" },
    },
    {
      text: "나의 팀 목록 초대받은팀 (없을 시) -Gut0003402",
      path: "/나의 팀 목록 초대받은팀 (없을 시)-Gut0003402",
      meta: { layout: "headerOnly" },
    },
    {
      text: "나의 팀 목록 초대한 팀원 보기 (전체)-Gut00037",
      path: "/나의 팀 목록 초대한 팀원 보기 (전체)-Gut00037",
      meta: { layout: "none" },
    },
    {
      text: "나의 팀 목록 초대한 팀원 보기 (참여대기)-Gut00037-02",
      path: "/나의 팀 목록 초대한 팀원 보기 (참여대기)-Gut00037-02",
      meta: { layout: "none" },
    },
    {
      text: "나의 팀 목록 초대한 팀원 보기 (참여완료)-Gut00037-03",
      path: "/나의 팀 목록 초대한 팀원 보기 (참여완료)-Gut00037-03",
      meta: { layout: "none" },
    },
    {
      text: "나의 팀 목록 초대한 팀원 보기 (참여대기 팀원 X)-Gut00037-04",
      path: "/나의 팀 목록 초대한 팀원 보기 (참여대기 팀원 X)-Gut00037-04",
      meta: { layout: "none" },
    },
    {
      text: "나의 팀 목록 초대한 팀원 보기 (참여완료 팀원 X)-Gut00037-05",
      path: "/나의 팀 목록 초대한 팀원 보기 (참여완료 팀원 X)-Gut00037-05",
      meta: { layout: "none" },
    },
  ]),
  createMainMenu("05 나의 활동", "/나의 활동", MENU_TYPES.ACTIVITY, [
    {
      text: "나의 활동 홈-Gut00035",
      path: "/나의 활동 홈-Gut00035",
      meta: { layout: "headerOnly" },
    },
    {
      text: "대표배지설정-Gut0003501",
      path: "/대표배지설정-Gut0003501",
      meta: { layout: "none" },
    },
    {
      text: "(pu)대표 배지 설정 팝업-Gut0003502",
      path: "/(pu)대표 배지 설정 팝업-Gut0003502",
      meta: { layout: "none" },
    },
    {
      text: "이전 기록-Gut00038",
      path: "/이전 기록-Gut00038",
      meta: { layout: "none" },
    },
    {
      text: "이전 기록 (none)-Gut0003802",
      path: "/이전 기록 (none)-Gut0003802",
      meta: { layout: "none" },
    },
  ]),

  createMainMenu("06 마이", "/마이", MENU_TYPES.MY, [
    {
      text: "마이 index-Gut00015",
      path: "/마이 index-Gut00015",
      meta: { layout: "headerOnly", mypage: true },
    },
    {
      text: "마이 index 계정인증 팝업-Gut0001501",
      path: "/마이 index 계정인증 팝업-Gut0001501",
      meta: { layout: "" },
    },
    {
      text: "개인회원정보-Gut00016",
      path: "/개인회원정보-Gut00016",
      meta: { layout: "none" },
    },

    {
      text: "자녀계정 등록관리-Gut00019",
      path: "/자녀계정 등록관리-Gut00019",
      meta: { layout: "none" },
    },
    {
      text: "(PU)자녀계정 생성-Gut0001901",
      path: "/(PU)자녀계정 생성-Gut0001901",
      meta: { layout: "none" },
    },
    {
      text: "(PU)자녀계정 비밀번호재설정-Gut0002001",
      path: "/(PU)자녀계정 비밀번호재설정-Gut0002001",
      meta: { layout: "none" },
    },
    {
      text: "자녀계정 활동보기-Gut00022",
      path: "/자녀계정 활동보기-Gut00022",
      meta: { layout: "none" },
    },
    {
      text: "자녀계정 활동보기 팀상세(챌린지)-Gut00022-01",
      path: "/자녀계정 활동보기 팀상세(챌린지)-Gut00022-01",
      meta: { layout: "none" },
    },
    {
      text: "자녀계정 활동보기 팀상세(상시)-Gut00022-02",
      path: "/자녀계정 활동보기 팀상세(상시)-Gut00022-02",
      meta: { layout: "none" },
    },
    {
      text: "서비스이용안내-Gut00024",
      path: "/서비스이용안내-Gut00024",
      meta: { layout: "none" },
    },
    {
      text: "FAQ-Gut00025",
      path: "/FAQ-Gut00025",
      meta: { layout: "none" },
    },
    {
      text: "보상지급이력-Gut00036",
      path: "/보상지급이력-Gut00036",
      meta: { layout: "none" },
    },
    {
      text: "보상지급이력-Gut00036-02",
      path: "/보상지급이력-Gut00036-02",
      meta: { layout: "none" },
    },
  ]),

  createMainMenu("07 Footer", "/footer", MENU_TYPES.FOOTER, [
    {
      text: "이용약관-Gut00026",
      path: "/이용약관-Gut00026",
      meta: { layout: "none" },
    },
    {
      text: "개인정보처리방침-Gut00027",
      path: "/개인정보처리방침-Gut00027",
      meta: { layout: "none" },
    },
  ]),

  createMainMenu("08 ETC", "/시스템점검", MENU_TYPES.ETC, [
    {
      text: "시스템점검안내-Gut00028",
      path: "/시스템점검안내-Gut00028",
      meta: { layout: "none" },
    },
    {
      text: "loading-Gut00029",
      path: "/loading-Gut00029",
      meta: { layout: "none" },
    },
    {
      text: "500 error-Gut00030",
      path: "/error-Gut00030",
      meta: { layout: "none" },
    },
    {
      text: "404 error-Gut00031",
      path: "/error-Gut00031",
      meta: { layout: "none" },
    },
    {
      text: "팝업 템플릿-Gut0000001",
      path: "/팝업 템플릿-Gut0000001",
      meta: { layout: "none" },
    },
    {
      text: "GutCalendar",
      path: "/Gut00100",
      meta: { layout: "none" },
    },
    {
      text: "Gut00",
      path: "/Gut00",
      meta: { layout: "none" },
    },
  ]),
];

// 유틸리티 함수
export const menuUtils = {
  // 메뉴 타입으로 필터링
  getMenusByType: (type) => menuRoutes.filter((menu) => menu.type === type),

  // 완료된 메뉴만 필터링
  getCompletedMenus: () =>
    menuRoutes.filter((menu) => menu.subMenu?.every((sub) => sub.isCompleted)),

  // 특정 레이아웃의 메뉴만 필터링
  getMenusByLayout: (layout) =>
    menuRoutes.filter((menu) => menu.meta.layout === layout),
};

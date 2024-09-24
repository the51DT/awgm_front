export const menuRoutes = [
  {
    text: "로그인",
    path: "/로그인-GutAd00001",
    component: () => import("@/views/GutAd00001.vue"),
    meta: { layout: "none" },
    subMenu: [{ text: "로그인-GutAd00001", path: "/로그인-GutAd00001", isCompleted: true }],
  },
  {
    text: "메인",
    subMenu: [{ text: "dashboard-GutAd00002", path: "/dashboard-GutAd00002" }],
  },
  {
    text: "메인 관리",
    subMenu: [
      { text: "배너 관리-GutAd00003", path: "/배너 관리-GutAd00003", isCompleted: true },
      { text: "배너 관리>등록-GutAd00004", path: "/배너 관리>등록-GutAd00004", isCompleted: true },
      {
        text: "배너 관리>상세/수정-GutAd00005",
        path: "/배너 관리>상세/수정-GutAd00005",
        isCompleted: true
      },
      { text: "팝업 관리-GutAd00006", path: "/팝업 관리-GutAd00006", isCompleted: true },
      { text: "팝업 관리>등록-GutAd00007", path: "/팝업 관리>등록-GutAd00007", isCompleted: true },
      {
        text: "팝업 관리>상세/수정-GutAd00008",
        path: "/팝업 관리>상세/수정-GutAd00008", isCompleted: true
      },
      {
        text: "것모닝 제품 링크 관리-GutAd00009",
        path: "/것모닝 제품 링크 관리-GutAd00009",
        isCompleted: true
      },
      {
        text: "것모닝 제품 링크 관리>등록-GutAd00010",
        path: "/것모닝 제품 링크 관리>등록-GutAd00010",
        isCompleted: true
      },
      {
        text: "것모닝 제품 링크 관리>상세/수정-GutAd00011",
        path: "/것모닝 제품 링크 관리>상세/수정-GutAd00011",
        isCompleted: true
      },
    ],
  },
  {
    text: "게시판 관리",
    subMenu: [
      { text: "공지사항-GutAd00012", path: "/공지사항-GutAd00012", isCompleted: true },
      { text: "공지사항>등록-GutAd00013", path: "/공지사항>등록-GutAd00013", isCompleted: true },
      {
        text: "공지사항>상세/수정-GutAd00014",
        path: "/공지사항>상세/수정-GutAd00014", isCompleted: true
      },
      { text: "FAQ-GutAd00015", path: "/FAQ-GutAd00015", isCompleted: true },
      { text: "FAQ>등록-GutAd00016", path: "/FAQ>등록-GutAd00016", isCompleted: true },
      { text: "FAQ>상세/수정-GutAd00017", path: "/FAQ>상세/수정-GutAd00017", isCompleted: true },
      { text: "C/S소통게시판-GutAd00018", path: "/C/S소통게시판-GutAd00018", isCompleted: true },
      {
        text: "C/S소통게시판>등록-GutAd00019",
        path: "/C/S소통게시판>등록-GutAd00019",
        isCompleted: true
      },
      {
        text: "C/S소통게시판>상세/수정-GutAd00020",
        path: "/C/S소통게시판>상세/수정-GutAd00020",
        isCompleted: true
      },
    ],
  },
  {
    text: "회원 관리",
    subMenu: [
      { text: "회원 목록-GutAd00021", path: "/회원 목록-GutAd00021", isCompleted: true },
      { text: "회원 목록>상세-GutAd00022", path: "/회원 목록>상세-GutAd00022", isCompleted: true },
      { text: "휴먼회원 관리-GutAd00023", path: "/휴먼회원 관리-GutAd00023" },
      {
        text: "휴먼회원 관리>상세-GutAd00024",
        path: "/휴먼회원 관리>상세-GutAd00024",
      },
      { text: "접속 로그-GutAd00025", path: "/접속 로그-GutAd00025", isCompleted: true },
    ],
  },
  {
    text: "첼린지 관리",
    subMenu: [
      { text: "첼린지-GutAd00026", path: "/첼린지-GutAd00026", isCompleted: true },
      { text: "첼린지>등록-GutAd00027", path: "/첼린지>등록-GutAd00027", isCompleted: true },
      {
        text: "첼린지>상세/수정-GutAd00028",
        path: "/첼린지>상세/수정-GutAd00028",
        isCompleted: true
      },
      { text: "보상수령대상자-GutAd00029", path: "/보상수령대상자-GutAd00029", isCompleted: true },
      {
        text: "보상수령대상자>등록-GutAd00030",
        path: "/보상수령대상자>등록-GutAd00030",
      },
      {
        text: "보상수령대상자>상세/수정-GutAd00031",
        path: "/보상수령대상자>상세/수정-GutAd00031",
      },
      { text: "팀관리-GutAd00032", path: "/팀관리-GutAd00032", isCompleted: true },
      { text: "팀관리>상세-GutAd00033", path: "/팀관리>상세-GutAd00033", isCompleted: true  },
    ],
  },
  {
    text: "미션 관리",
    subMenu: [
      { text: "미션인증현황-GutAd00034", path: "/미션인증현황-GutAd00034", isCompleted: true },
      {
        text: "미션인증현황>상세-GutAd00035",
        path: "/미션인증현황>상세-GutAd00035",
        isCompleted: true
      },
      { text: "미션인증로그-GutAd00036", path: "/미션인증로그-GutAd00036", isCompleted: true },
    ],
  },
  {
    text: "시스템 관리",
    subMenu: [
      { text: "관리자 관리-GutAd00050", path: "/관리자 관리-GutAd00050", isCompleted: true },
      {
        text: "관리자 관리>등록-GutAd00051",
        path: "/관리자 관리>등록-GutAd00051",
        isCompleted: true
      },
      {
        text: "관리자 관리>상세/수정-GutAd00052",
        path: "/관리자 관리상세/수정-GutAd00052",
        isCompleted: true
      },
      { text: "권한 관리-GutAd00053", path: "/권한 관리-GutAd00053", isCompleted: true },
      { text: "권한 관리>등록-GutAd00054", path: "/권한 관리>등록-GutAd00054", isCompleted: true },
      {
        text: "권한 관리>상세/수정-GutAd00055",
        path: "/권한 관리상세/수정-GutAd00055",
        isCompleted: true
      },
    ],
  },
];

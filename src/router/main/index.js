const mainRoutes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/main/HomeView.vue"),
  },
  {
    path: "/main/roadmap",
    name: "RoadMap",
    component: () => import("@/views/main/roadmap/RoadMapView.vue"),
  },
  {
    path: "/main/roadmaplist",
    name: "RoadMapList",
    component: () => import("@/views/main/roadmap/RoadMapListView.vue"),
  },
  {
    path: "/main/modalView",
    name: "ModalView",
    component: () => import("@/views/main/roadmap/ModalView.vue"),
  },

  {
    path: "/main/MemberLogin",
    name: "MemberLogin",
    component: () => import("@/views/main/MemberLoginView.vue"),
  },
  {
    path: "/main/MemberLogin?email=:email&code=:code",
    name: "MemberLogin2",
    component: () => import("@/views/main/MemberLoginView.vue"),
  },
  {
    path: "/main/join",
    name: "join",
    component: () => import("@/views/main/JoinView.vue"),
  },
  {
    path: "/main/findEmailPass",
    name: "findEmailPass",
    component: () => import("@/views/main/FindEmailPassView.vue"),
  },
  {
    path: "/main/failedJoin",
    name: "failedJoin",
    component: () => import("@/views/main/FailedJoinView.vue"),
  },
  {
    path: "/main/confirm",
    name: "confirm",
    component: () => import("@/components/main/confirmEmail.vue"),
  },
  {
    path: "/main/faqCom",
    name: "faqCom",
    component: () => import("@/components/main/sc/FaqCom.vue"),
  },
  {
    path: "/main/notice",
    name: "notice",
    component: () => import("@/views/main/sc/noticeView.vue"),
  },
  {
    path: "/main/nodetails/:id",
    name: "nodetails",
    component: () => import("@/components/main/sc/NoticeDetailCom.vue"),
  },
  {
    path: "/main/faq",
    name: "faq",
    component: () => import("@/views/main/sc/faqView.vue"),
  },
  {
    path: "/main/qna/:id",
    name: "QnAAdd",
    component: () => import("@/views/main/sc/qnaView.vue"),
  },
  {
    path: "/main/mypage",
    name: "mypage",
    component: () => import("@/views/main/mypage/MypageView.vue"),
  },
  {
    path: "/main/contact",
    name: "contact",
    component: () => import("@/views/main/ContactView.vue"),
  },
  {
    path: "/main/ticketList",
    name: "mainticketList",
    component: () => import("@/views/main/ticket/TicketListView.vue"),
  },
  {
    path: "/main/BMLearning",
    name: "BMLearning",
    component: () => import("@/views/main/BMLearning/BMLearningView.vue"),
  },
  {
    path: "/main/learn",
    name: "learning",
    component: () => import("@/views/main/learn/LearnView.vue"),
  },
  {
    path: "/main/mentor",
    name: "BMLearning",
    component: () => import("@/views/main/mentor/MentorView.vue"),
  },
  {
    path: "/main/mentor/state/:matchId/:id",
    name: "MentorViewDetail",
    component: () => import("@/views/main/mentor/state/MentorViewDetail.vue"),
  },
  {
    path: "/main/mentor/journalPop/:id/:userId/:appId/:buildId/:tagName/:bmTitle",
    name: "JournalPop",
    component: () => import("@/views/main/mentor/state/JournalPop.vue"),
  },
  {
    path: "/main/mentor/journal/:id",
    name: "JournalViewDetail",
    component: () =>
      import("@/views/main/mentor/journal/JournalViewDetail.vue"),
  },
  {
    path: "/main/mentor/consultantInfo/:id",
    name: "ConsultantView",
    component: () =>
      import("@/views/main/mentor/consultantInfo/ConsultantView.vue"),
  },
  {
    path: "/main/mentor/generalJournal/:id",
    name: "GeneralJournalView",
    component: () =>
      import("@/views/main/mentor/generalJournal/GeneralJournalView.vue"),
  },
  {
    path: "/main/mentor/consultantReview/:id",
    name: "ConsultantReview",
    component: () =>
      import("@/views/main/mentor/consultantReview/ConsultantReview.vue"),
  },

  {
    path: "/main/mentor/mentorHistory",
    name: "MentorHistory",
    component: () =>
      import("@/views/main/mentor/mentorHistory/MentorHistory.vue"),
  },
  {
    path: "/main/mentor/mentorMatch",
    name: "MentorMatch",
    component: () => import("@/views/main/mentor/mentorMatch/MentorMatch.vue"),
  },
  {
    path: "/main/mentor/menteeManagement",
    name: "MenteeManagement",
    component: () =>
      import("@/views/main/mentor/menteeManagement/MenteeManagement.vue"),
  },
  {
    path: "/main/mentor/menteeMatch",
    name: "MenteeMatch",
    component: () => import("@/views/main/mentor/menteeMatch/MenteeMatch.vue"),
  },
  {
    path: "/main/mentor/MenteeManagementForSuperVisor/:userId",
    name: "MenteeBmListPop",
    component: () =>
      import("@/views/main/mentor/menteeManagement/MenteeManagement.vue"),
  },
  {
    path: "/main/mentor/journalList/:appId/:title",
    name: "JournalList",
    component: () => import("@/views/main/mentor/journalList/JournalList.vue"),
  },

  {
    path: "/main/mentor/menteeList",
    name: "MenteeList",
    component: () => import("@/views/main/mentor/menteeList/MenteeList.vue"),
  },
  {
    path: "/main/mentor/mentorList",
    name: "MentorList",
    component: () => import("@/views/main/mentor/mentorList/MentorList.vue"),
  },
  {
    path: "/main/mentor/mentoringList",
    name: "MentoringList",
    component: () =>
      import("@/views/main/mentor/mentoringList/MentoringList.vue"),
  },
  {
    path: "/main/mentor/menteeBmListPop/:userId/:userName",
    name: "MenteeBmListPop",
    component: () => import("@/views/main/mentor/state/menteeBmListPop.vue"),
  },

  // 임시 라우터
  {
    path: "/main/bmds",
    name: "bmdsCreate",
    component: () => import("@/components/main/bmdsBasic/Bmds1Com.vue"),
  },
  // 임시 라우터
  {
    path: "/main/bmds1/update/:id",
    name: "bmdsUpdate",
    component: () => import("@/components/main/bmdsBasic/Bmds1UpdateCom.vue"),
  },
  // ! 나중에 id 추가해야함
  {
    path: "/main/bmds1",
    name: "BmdsDetail",
    component: () =>
      import("@/components/main/bmdsBasic/BmdsBasicDetailCom.vue"),
  },
  {
    path: "/main/bmds/basic/:id",
    name: "BetaBmds",
    component: () => import("@/views/main/Beta/MyBmBetaDetailView.vue"),
  },
  // 결제 테스트중
  {
    path: "/main/test",
    name: "test",
    component: () => import("@/views/main/portOne/portOneTestView.vue"),
  },
  {
    path: "/main/test/payment",
    name: "payment",
    component: () => import("@/views/main/portOne/portOneView.vue"),
  },
  {
    path: "/main/test/certification",
    name: "certification",
    component: () => import("@/views/main/portOne/portOneAuthView.vue"),
  },
  {
    path: "/main/test/result",
    name: "result",
    component: () => import("@/views/main/portOne/portOneResultView.vue"),
  },
  {
    path: "/main/termsCom",
    name: "termsCom",
    component: () => import("@/views/main/TermsComView.vue"),
  },
  // todo: ==========================cart======================================
  {
    path: "/main/cart",
    name: "cart",
    component: () => import("@/components/main/CartCom.vue"),
  },
  // asdfawefawefawefawefwaefawef
  {
    path: "/main/test/test",
    name: "test1",
    component: () => import("@/views/main/testTest.vue"),
  },
  // asdfawefawefawefawefwaefawef
  {
    path: "/main/test/test/test",
    name: "test2",
    component: () => import("@/views/main/BmdsProjectView.vue"),
  },
  // asdfawefawefawefawefwaefawef

  {
    path: "/main/MyBm",
    name: "MyBm",
    component: () => import("@/views/main/MyBm/MyBmView.vue"),
  },
  {
    path: "/main/MyBmDetail/:id",
    name: "MyBmDetail",
    component: () => import("@/views/main/MyBm/MyBmDetailView.vue"),
  },
  // 베타버전 bm상세보기
  {
    path: "/main/bmds/basic/list",
    name: "bmdsBasicListView",
    component: () => import("@/views/main/BmdsBasic.vue"),
  },
  // 베타버전 bm리스트
  {
    path: "/main/bmds/beta/list",
    name: "bmdsBetaListView",
    component: () => import("@/views/main/Beta/BmdsBetaListView.vue"),
  },
  {
    path: "/main/bmds/beta/preView/:id",
    name: "preView",
    component: () => import("@/components/main/bmdsBeta/modal/preView.vue"),
  },
  {
    path: "/main/qna/update/:id",
    name: "qnaUpdate",
    component: () => import("@/components/main/sc/QnAUpdate.vue"),
  },
  // ================================= buildup버전 시작 =================================
  {
    // buildup list 페이지
    path: "/main/bmds/buildup/list",
    name: "BmdsBuildupListView",
    component: () => import("@/views/main/Buildup/BmdsBuildupListView.vue"),
  },
  {
    // ppt2페이지
    path: "/main/bmds/buildup/listDetail/:id",
    name: "BuildupListDetailView",
    component: () => import("@/views/main/Buildup/BuildupListDetailView.vue"),
  },
  {
    path: "/main/bmds/buildup/preView/:id",
    name: "preViewBuildup",
    component: () => import("@/components/main/bmdsBuildup/modal/preView.vue"),
  },
  // ================================= buildup버전 끝 =================================

  {
    // buildup list 페이지
    path: "/main/testPay",
    name: "TestPay",
    component: () => import("@/components/main/testPay.vue"),
  },
];

export default mainRoutes;

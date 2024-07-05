const adminRoutes = [
  {
    path: "/admin/Login",
    name: "Login",
    component: () => import("@/views/admin/Login.vue"),
  },
  {
    path: "/admin/profile",
    name: "profile",
    component: () => import("@/views/admin/profileView.vue"),
  },
  {
    path: "/admin/home",
    name: "home",
    component: () => import("@/views/admin/home/homeView.vue"),
  },

  // 슈퍼바이저 목록
  {
    path: "/admin/supervisorList",
    name: "userList",
    component: () => import("@/views/admin/userManage/supervisorListView.vue"),
  },

  //슈퍼바이저 상세 및 추가
  {
    path: "/admin/supervisorEdit/:id",
    name: "supervisorEdit",
    component: () => import("@/views/admin/userManage/supervisorEdit.vue"),
  },



  
  {
    path: "/admin/userList",
    name: "userList",
    component: () => import("@/views/admin/userManage/userListView.vue"),
  },
  {
    path: "/admin/userAdd",
    name: "userAdd",
    component: () => import("@/views/admin/userManage/userAddView.vue"),
  },
  // 사업공고 이미지 업로드
  {
    path: "/admin/fileUploadView",
    name: "fileUploadView",
    component: () => import("@/views/admin/fileUpload/fileUploadView.vue"),
  },
  {
    path: "/admin/userDetail/:id",
    name: "userDetail",
    component: () => import("@/views/admin/userManage/userDetailView.vue"),
  },
  {
    path: "/admin/consultantList",
    name: "consultantList",
    component: () => import("@/views/admin/userManage/consultantListView.vue"),
  },
  {
    path: "/admin/consultantAdd",
    name: "consultantAdd",
    component: () => import("@/views/admin/userManage/consultantAddView.vue"),
  },
  {
    path: "/admin/consultantDetail/:id",
    name: "consultantDetail",
    component: () =>
      import("@/views/admin/userManage/consultantDetailView.vue"),
  },
  {
    path: "/admin/BMList",
    name: "BMList",
    component: () => import("@/views/admin/BM/BMListView.vue"),
  },
  {
    path: "/admin/BMDetail/:id",
    name: "bmDetail",
    component: () => import("@/views/admin/BM/BMDetailView.vue"),
  },
  {
    path: "/admin/BMSampleList",
    name: "BMSampleList",
    component: () => import("@/views/admin/BM/BMSampleListView.vue"),
  },
  {
    path: "/admin/consultList",
    name: "consultList",
    component: () => import("@/views/admin/consult/consultListView.vue"),
  },
  {
    path: "/admin/consultDetail",
    name: "consultDetail",
    component: () => import("@/views/admin/consult/consultDetailView.vue"),
  },
  {
    path: "/admin/matchingList",
    name: "matchingList",
    component: () => import("@/views/admin/match/matchingListView.vue"),
  },
  {
    path: "/admin/matchingDetail/:id",
    name: "matchingDetail",
    component: () => import("@/views/admin/match/matchingDetailView.vue"),
  },
  {
    path: "/admin/journalList",
    name: "journalList",
    component: () => import("@/views/admin/consult/journalListView.vue"),
  },
  {
    path: "/admin/journalDetail/:id",
    name: "journalDetail",
    component: () => import("@/views/admin/consult/journalDetailView.vue"),
  },
  {
    path: "/admin/journalDeepDetail",
    name: "journalDeepDetail",
    component: () => import("@/views/admin/consult/journalDeepDetailView.vue"),
  },
  {
    path: "/admin/checkJournalDetail/:matchedId/:userId/:consultantUserId/:id",
    name: "checkJournalDetail",
    component: () => import("@/views/admin/match/checkJournalDetailView.vue"),
  },
  {
    path: "/admin/checkJournalList/:matchedId/:userId/:consultantUserId",
    name: "checkJournalList",
    component: () => import("@/views/admin/match/checkJournalListView.vue"),
  },
  {
    path: "/admin/reviewList",
    name: "reviewList",
    component: () => import("@/views/admin/consult/reviewListView.vue"),
  },
  {
    path: "/admin/reviewDetail",
    name: "reviewDetail",
    component: () => import("@/views/admin/consult/reviewDetailView.vue"),
  },
  {
    path: "/admin/ordHistoryList",
    name: "ordHistoryList",
    component: () => import("@/views/admin/order/ordHistoryListView.vue"),
  },
  {
    path: "/admin/orderDetail",
    name: "orderDetail",
    component: () => import("@/views/admin/order/orderDetailView.vue"),
  },
  {
    path: "/admin/FAQList",
    name: "FAQList",
    component: () => import("@/views/admin/serviceCenter/FAQListView.vue"),
  },
  {
    path: "/admin/FAQAdd",
    name: "FAQAdd",
    component: () => import("@/views/admin/serviceCenter/FAQAddView.vue"),
  },
  {
    path: "/admin/FAQDetail/:id",
    name: "FAQDetail",
    component: () => import("@/views/admin/serviceCenter/FAQDetailView.vue"),
  },
  {
    path: "/admin/NoticeList",
    name: "NoticeList",
    component: () => import("@/views/admin/serviceCenter/NoticeListView.vue"),
  },
  {
    path: "/admin/QnAList",
    name: "QnAList",
    component: () => import("@/views/admin/serviceCenter/QnAListView.vue"),
  },
  {
    path: "/admin/NoticeAdd",
    name: "NoticeAdd",
    component: () => import("@/views/admin/serviceCenter/NoticeAddView.vue"),
  },
  {
    path: "/admin/NoticeDetail/:id",
    name: "NoticeDetail",
    component: () => import("@/views/admin/serviceCenter/NoticeDetailView.vue"),
  },
  {
    path: "/admin/QnADetail/:id",
    name: "QnADetail",
    component: () => import("@/views/admin/serviceCenter/QnADetailView.vue"),
  },
  {
    path: "/admin/QnAAdd",
    name: "QnAAdd",
    component: () => import("@/views/admin/serviceCenter/QnAAddView.vue"),
  },
  {
    path: "/admin/ticketList",
    name: "ticketList",
    component: () => import("@/views/admin/ticket/ticketListView.vue"),
  },
  {
    path: "/admin/ticketDetail",
    name: "ticketDetail",
    component: () => import("@/views/admin/ticket/ticketDetailView.vue"),
  },
  {
    path: "/admin/ticketPrice",
    name: "ticketPrice",
    component: () => import("@/views/admin/ticket/ticketPriceView.vue"),
  },
  {
    path: "/admin/terms",
    name: "terms",
    component: () => import("@/views/admin/setting/termsView.vue"),
  },
  {
    path: "/admin/beta/bmds",
    name: "betaBmdsList",
    component: () => import("@/views/admin/BM/Beta/BetaListView.vue"),
  },
  {
    path: "/admin/beta/bmds/sample",
    name: "betaBmdsSampleList",
    component: () => import("@/views/admin/BM/Beta/BetaSampleListView.vue"),
  },
];

export default adminRoutes;

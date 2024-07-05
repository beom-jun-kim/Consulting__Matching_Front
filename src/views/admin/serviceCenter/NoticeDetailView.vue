<template>
  <div class="userAdd">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <NoticeDetail />
    </div>
  </div>
</template>

<script>
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import NoticeDetail from "@/components/admin/serviceCenter/NoticeDetail.vue";
// @ is an alias to /src
export default {
  name: "NoticeDetailView",
  components: {
    NoticeDetail,
    NavCom,
    SideNavCom
  },
};
</script>

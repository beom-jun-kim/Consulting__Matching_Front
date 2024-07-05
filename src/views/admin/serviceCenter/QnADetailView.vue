<template>
  <div class="userList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <QnADetail />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import QnADetail from "@/components/admin/serviceCenter/QnADetail.vue";
export default {
  name: "QnADetailView",
  components: {
    QnADetail,
    NavCom,
    SideNavCom
  },
};
</script>

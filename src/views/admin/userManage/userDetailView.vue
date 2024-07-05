<template>
  <div class="userAdd">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <userDetail />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import userDetail from "@/components/admin/userManage/userDetail.vue";
export default {
  name: "userDetailView",
  components: {
    userDetail,
    NavCom,
    SideNavCom
  },
};
</script>

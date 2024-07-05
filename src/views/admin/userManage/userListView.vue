<template>
  <div class="userList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <userListVue />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import userListVue from "@/components/admin/userManage/userList.vue";
export default {
  name: "userListView",
  components: {
    userListVue,
    NavCom,
    SideNavCom
  },
};
</script>

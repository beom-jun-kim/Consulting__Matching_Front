<template>
  <div class="userAdd">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <userAddVue />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import userAddVue from "@/components/admin/userManage/userAdd.vue";
export default {
  name: "userAddView",
  components: {
    userAddVue,
    NavCom,
    SideNavCom
  },
};
</script>

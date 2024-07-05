<template>
  <div class="userAdd">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <supervisorEditVue />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import supervisorEditVue from"@/components/admin/userManage/supervisorEdit.vue";

export default {
  name: "supervisorEdit",
  components: {
    supervisorEditVue,
    NavCom,
    SideNavCom
  },
};
</script>

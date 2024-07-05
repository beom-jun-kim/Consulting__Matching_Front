<template>
  <div class="supervisorList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <supervisorListVue />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import supervisorListVue from "@/components/admin/userManage/supervisorList.vue";

export default {
  name: "userListView",
  components: {
    supervisorListVue,
    NavCom,
    SideNavCom
  },
};
</script>

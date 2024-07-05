<template>
  <div class="consultantList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <consultantList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import consultantList from "@/components/admin/userManage/consultantList.vue";
export default {
  name: "consultantListView",
  components: {
    consultantList,
    NavCom,
    SideNavCom
  },
};
</script>

<template>
  <div class="consultantAdd">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <consultantAdd />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import consultantAdd from "@/components/admin/userManage/consultantAdd.vue";
export default {
  name: "consultantAddView",
  components: {
    consultantAdd,
    NavCom,
    SideNavCom
  },
};
</script>

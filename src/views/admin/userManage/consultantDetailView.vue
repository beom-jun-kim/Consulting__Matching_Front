<template>
  <div class="consultantDetail">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <consultantDetail />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import consultantDetail from "@/components/admin/userManage/consultantDetail.vue";
export default {
  name: "consultantDetailView",
  components: {
    consultantDetail,
    NavCom,
    SideNavCom
  },
};
</script>

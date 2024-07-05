<template>
  <div class="consultList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <consultDetail />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import consultDetail from "@/components/admin/consult/consultDetail.vue";
export default {
  name: "consultDetailView",
  components: {
    consultDetail,
    NavCom,
    SideNavCom
  },
};
</script>

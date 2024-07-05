<template>
  <div class="consultList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <reviewDetail />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import reviewDetail from "@/components/admin/consult/reviewDetail.vue";
export default {
  name: "reviewDetailView",
  components: {
    reviewDetail,
    NavCom,
    SideNavCom
  },
};
</script>

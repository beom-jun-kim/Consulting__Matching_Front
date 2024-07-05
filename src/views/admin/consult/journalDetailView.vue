<template>
  <div class="consultList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <journalDetail />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import journalDetail from "@/components/admin/consult/journalDetail.vue";
export default {
  name: "journalDetailView",
  components: {
    journalDetail,
    NavCom,
    SideNavCom
  },
};
</script>

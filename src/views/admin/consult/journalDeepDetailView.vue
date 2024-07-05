<template>
  <div class="consultList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <journalDeepDetail />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import journalDeepDetail from "@/components/admin/consult/journalDeepDetail.vue";
export default {
  name: "journalDeepDetailView",
  components: {
    journalDeepDetail,
    NavCom,
    SideNavCom
  },
};
</script>

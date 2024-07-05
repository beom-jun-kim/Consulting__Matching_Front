<template>
  <div class="consultList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <ticketDetail />
    </div>
  </div>
</template>

<script>
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import ticketDetail from "@/components/admin/ticket/ticketDetail.vue";
// @ is an alias to /src
export default {
  name: "ticketDetailView",
  components: {
    ticketDetail,
    NavCom,
    SideNavCom
  },
};
</script>

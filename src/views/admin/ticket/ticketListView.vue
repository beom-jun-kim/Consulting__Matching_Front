<template>
  <div class="consultList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <ticketList />
    </div>
  </div>
</template>

<script>
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import ticketList from "@/components/admin/ticket/ticketList.vue";
// @ is an alias to /src
export default {
  name: "ticketListView",
  components: {
    ticketList,
    NavCom,
    SideNavCom
  },
};
</script>

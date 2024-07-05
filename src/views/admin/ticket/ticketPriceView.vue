<template>
  <div class="consultList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <ticketPriceVue />
    </div>
  </div>
</template>

<script>
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import ticketPriceVue from "@/components/admin/ticket/ticketPrice.vue";
// @ is an alias to /src
export default {
  name: "ticketPriceView",
  components: {
    ticketPriceVue,
    NavCom,
    SideNavCom
  },
};
</script>

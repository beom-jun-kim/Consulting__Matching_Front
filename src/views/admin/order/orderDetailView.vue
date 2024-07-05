<template>
  <div class="userAdd">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <orderDetailVue />
    </div>
  </div>
</template>

<script>
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import orderDetailVue from "@/components/admin/order/orderDetail.vue";
// @ is an alias to /src
export default {
  name: "orderDetailVueView",
  components: {
    orderDetailVue,
    NavCom,
    SideNavCom
  },
};
</script>

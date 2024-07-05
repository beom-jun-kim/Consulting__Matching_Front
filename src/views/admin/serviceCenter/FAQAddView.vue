<template>
  <div class="userAdd">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <FAQAddVue />
    </div>
  </div>
</template>

<script>
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import FAQAddVue from "@/components/admin/serviceCenter/FAQAdd.vue";
// @ is an alias to /src
export default {
  name: "FAQAddVueView",
  components: {
    FAQAddVue,
    NavCom,
    SideNavCom,
  },
};
</script>

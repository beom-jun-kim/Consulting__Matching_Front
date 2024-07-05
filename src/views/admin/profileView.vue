<template>
  <div class="userAdd">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <profileCom />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import profileCom from "@/common/admin/profileCom.vue";
export default {
  name: "profileView",
  components: {
    SideNavCom,
    profileCom,
    NavCom,
  },
};
</script>

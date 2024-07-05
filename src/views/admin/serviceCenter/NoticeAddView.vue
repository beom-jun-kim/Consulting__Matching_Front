<template>
  <div class="userAdd">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <NoticeAdd />
    </div>
  </div>
</template>

<script>
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import NoticeAdd from "@/components/admin/serviceCenter/NoticeAdd.vue";
// @ is an alias to /src
export default {
  name: "NoticeAddVueView",
  components: {
    NoticeAdd,
    NavCom,
    SideNavCom
  },
};
</script>

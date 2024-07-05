<template>
  <div class="userList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <NoticeListVue />
    </div>
  </div>
</template>

<script>
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import NoticeListVue from "@/components/admin/serviceCenter/NoticeList.vue";
// @ is an alias to /src
export default {
  name: "NoticeListVueView",
  components: {
    NoticeListVue,
    NavCom,
    SideNavCom
  },
};
</script>

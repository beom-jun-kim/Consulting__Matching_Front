<template>
  <div class="userList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <QnAAdd />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import QnAAdd from "@/components/admin/serviceCenter/QnAAdd.vue";
export default {
  name: "QnAAddView",
  components: {
    QnAAdd,
    NavCom,
    SideNavCom
  },
};
</script>

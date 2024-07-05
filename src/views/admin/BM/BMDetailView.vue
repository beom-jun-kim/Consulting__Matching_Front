<template>
    <div class="bmDetail">
        <NavCom />
        <div id="layoutSidenav">
            <SideNavCom />
            <BMDetail />
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import BMDetail from "@/components/admin/BM/BMDetail.vue";
export default {
    name: "bmDetailView",
    components: {
        BMDetail,
        NavCom,
        SideNavCom
    },
};
</script>
  
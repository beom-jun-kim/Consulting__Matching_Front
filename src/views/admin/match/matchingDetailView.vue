<template>
    <div class="matchingDetail">
        <NavCom />
        <div id="layoutSidenav">
            <SideNavCom />
            <matchingDetail />
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import matchingDetail from "@/components/admin/match/matchingDetail.vue";
export default {
    name: "matchingDetailView",
    components: {
        matchingDetail,
        NavCom,
        SideNavCom
    },
};
</script>
  
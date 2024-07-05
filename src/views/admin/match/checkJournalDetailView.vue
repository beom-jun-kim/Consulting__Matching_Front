<template>
    <div class="matchingList">
        <NavCom />
        <div id="layoutSidenav">
            <SideNavCom />
            <checkJournalDetail />
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import checkJournalDetail from '@/components/admin/match/checkJournalDetail.vue';
export default {
    name: "matchingListView",
    components: {
        checkJournalDetail,
        NavCom,
        SideNavCom
    },
};
</script>
  
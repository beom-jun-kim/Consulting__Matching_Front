<template>
    <div class="fileUploadView">
        <NavCom />
        <div id="layoutSidenav">
            <SideNavCom />
            <fileUploadComVue />
        </div>
    </div>
</template>
  
<script>
import NavCom from '@/common/admin/NavCom.vue';
import SideNavCom from '@/common/admin/SideNavCom.vue';
import fileUploadComVue from '@/components/admin/fileUpload/fileUploadCom.vue';
export default {
    name: "fileUploadView",
    components: {
        fileUploadComVue,
        NavCom,
        SideNavCom,

    },
};
</script>
  
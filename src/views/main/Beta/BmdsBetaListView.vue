<template>
    <div>
        <Nav />
        <BmBetaList />
        <Footer />
    </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import BmBetaList from "@/components/main/bmdsBeta/BmBetaList.vue";
import Footer from "@/common/main/Footer.vue"
export default {
    components: {
        Nav,
        BmBetaList,
        Footer
    }

}
</script>

<style></style>
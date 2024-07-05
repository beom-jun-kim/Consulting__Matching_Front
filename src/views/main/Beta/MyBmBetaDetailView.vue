<template>
    <div>
        <Nav />
        <BetaDetail />
        <Footer />

    </div>
</template>


<script>
/*eslint-disable*/
import Nav from "@/common/main/Nav.vue";
import BetaDetail from "@/components/main/bmdsBeta/BmdsBetaDetailCom.vue";
import Footer from "@/common/main/Footer.vue"

export default {
    components: {
        Nav,
        BetaDetail,
        Footer,
    },
}
</script>

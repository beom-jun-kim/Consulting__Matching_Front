<template>
    <div>
        <Nav />
        <Journal class="journalView" />
        <Footer />
    </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
import Journal from "@/components/main/Journal.vue";

export default {
    name: "JournalViewDetail",
    components: {
        Nav,
        Footer,
        Journal,
    },
}
</script>

<style>
.journalView {
    margin-top: 3rem;
}

.resultsReport {
    max-width: 1140px;
    margin: 0 auto;
    font-family: "Pretendard_Rgula" !important;
}
</style>
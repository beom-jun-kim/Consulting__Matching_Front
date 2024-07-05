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
    name: "GeneralJournalView",
    components: {
        Nav,
        Footer,
        Journal,
    },
}
</script>

<style>
.resultsReport {
    max-width: 1140px;
    margin: 0 auto;
    font-family: "Pretendard_Rgula" !important;

}
.journalView {
    margin-top: 3rem;

}
</style>
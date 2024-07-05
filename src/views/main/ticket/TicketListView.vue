<template>
  <div>
    <Nav />
    <TicketList />
    <Footer />
  </div>
</template>

<script>
/*eslint-disable*/
import Nav from "@/common/main/Nav.vue";
import TicketList from "@/components/main/TicketList.vue";
import Footer from "@/common/main/Footer.vue";
export default {
  name: "TicketListView",
  components: { Nav, Footer, TicketList },
  data() {
    return {
    };
  },

}
</script>
<style></style>

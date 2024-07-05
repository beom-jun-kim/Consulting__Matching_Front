<template>
  <div class="sidebar">
    <h3>11 Blocks</h3>
    <h3>Business Model</h3>
    <h3>Design</h3>
  </div>
</template>

<script>
export default {
  name: "SidebarCom",
  data() {
    return {};
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #E7E6E6;
  border-right: 1px solid #E7E6E6;
  flex-shrink: 0;
  /* 사이드바 크기가 줄어들지 않게 설정 */
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 15px;
  cursor: pointer;
  border-bottom: 1px solid grey;
}

.sidebar li:hover {
  background-color: #ddd;
}
</style>

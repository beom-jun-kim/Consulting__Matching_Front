<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 mb-3">
        <h2 class="text-center">{{ item.title }}</h2>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <h5>카테고리</h5>
        <p class="bg-light p-2 rounded">{{ item.category }}</p>
      </div>
      <div class="col-md-6 mb-3">
        <h5>작성일</h5>
        <p class="bg-light p-2 rounded">{{ formattedDate }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mb-4">
        <h5>내용</h5>
        <!-- this.content가 'qqwwee'일 경우 이미지를 띄움 -->
        <div class="bg-light p-2 rounded" v-if="item.id === 26">
          <img class="img-fluid" :src="eventDetailImg" alt="Event Detail" />
        </div>
        <!-- this.content가 'qqwwee'가 아닐 경우 this.content 내용을 띄움 -->
        <div class="bg-light p-2 rounded" v-else v-html="content" />
      </div>
    </div>

    <div class="row">
      <div class="col-12 d-flex justify-content-end">
        <button class="btn btn-primary" @click="goBack">돌아가기</button>
      </div>
    </div>
  </div>
</template>

<script>
import ServCenterDataService from "@/services/main/ServCenterDataService";
export default {
  props: ["state", "id"],
  data() {
    return {
      item: {
        id: 0,
        category: "",
        title: "",
        content: "",
        created_at: "",
      },
      eventDetailImg: require("@/assets/eventDetail.png"),
    };
  },
  methods: {
    goBack() {
      this.$emit("update:state", "notice");
      //this.$router.go(-1);
    },
  },
  computed: {
    // `created_at`의 날짜 부분만 포맷하는 computed 프로퍼티
    formattedDate() {
      let date = new Date(this.item.created_at);
      return `${date.getUTCFullYear()}-${("0" + (date.getUTCMonth() + 1)).slice(
        -2
      )}-${("0" + date.getUTCDate()).slice(-2)}`;
    },
  },

  mounted() {
    ServCenterDataService.getNotice(this.id)
      .then((response) => {
        this.item = response.data;
      })
      .catch((error) => {
        console.log("Error occurred while fetching data: ", error);
      });
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}

hr {
  margin-top: 0;
}

h5 {
  margin-bottom: 0.5rem;
}
</style>

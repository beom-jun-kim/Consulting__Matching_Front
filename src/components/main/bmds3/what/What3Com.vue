<template>
  <div class="container">
    <div class="d-flex justify-content-end">
      <div style="color: gray; font-size: 1rem; margin: 1rem 1rem 0 0">
        Business Model Design Solution
      </div>
      <div>
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div class="d-flex justify-content-start" style="height: 5rem; margin-left:1rem;">
      <div class="d-flex">
        <div style="
            font-size: 6rem;
            width: 6rem;
            color: #FDF3D7;
            margin: -2.7rem 1.5rem 0 -7.5rem;
          ">
          05
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Value Selection</div>
          <div style="font-size: 2rem; color: #FFC000">
            2) 제품(서비스) 시각화(Visualization)
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="
          width: 81rem;
          height: 2.5rem;
          border-radius: 7px;
          background: #FDF3D7;
        ">
        <div style="font-size: 17px; margin-left: 39px; line-height: 37px">
          제품(서비스)의 개요도, 설계안, 외관 등을 표현해봅니다.
        </div>
      </div>
    </div>
    <div class="mt-5" style="height:40rem;">
      <div class="d-flex justify-content-center align-items-center"
        style="height:40rem; background:#E7E6E6; border-radius:25px;">
        <div class="d-flex justify-content-center align-items-center"
          style="width:79rem; height:39rem; background:#B3B3B3; border-radius:25px;">
          <div style="width:78rem; height:38rem; background:white; border-radius:25px;">
            <div @click="handleClick">
              <input ref="fileInput" type="file" style="display: none" accept="image/*" @change="handleFileUpload" />
              <div class="d-flex flex-column align-items-center"
                style="width:78rem; height:37rem; background: white; border-radius:25px;">
                <!-- 스프링표현부분 -->
                <div class="d-flex justify-content-center">
                  <div class="d-flex flex-row justify-content-evenly" style="width:75rem;">
                    <div v-for="(t, i) in 25" :key="i">
                      <div class="d-flex justify-content-center align-items-end"
                        style="width:1.5rem; height:1.5rem; background: #E7E6E6; margin:1rem 0 1rem 0;">
                        <div style="width:15px; height:4rem; background: #7F7F7F; margin-bottom:10px;">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 클릭 영역 -->
                <img v-if="imageUrl" :src="imageUrl" alt="uploaded image"
                  style="width:75rem; height:33rem; border-radius: 25px;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="saveImg">임시저장</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { imageUrl: "", };
  },
  methods: {
    handleClick() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    saveImg() {
      console.log('dd', this.imageUrl);
    }
  },
};
</script>

<style scoped>
.canvas {
  position: relative;
  width: 800px;
  /* 적절한 너비 설정 */
  height: 600px;
  /* 적절한 높이 설정 */
  background-color: #f0f0f0;
  /* 선택적으로 배경색 설정 */
}

.added-image {
  position: absolute;
}
</style>

<template>
  <div class="container">
    <img src="@/assets/bmds-logo.png" alt="Logo" class="logo" />
    <img
      src="@/assets/bmds3/title/titleText.jpg"
      alt="Business Model Design"
      class="TitleText"
    />
    <!-- <div class="con">
      <div class="blueBox"><p>팀명</p></div>
      <input class="inputField" placeholder="팀명 입력" />
    </div> -->
    <div class="con">
      <div class="blueBox"><p>아이템</p></div>
      <input class="inputField" placeholder="아이템 입력" />
    </div>
    <!-- 파란색 박스 추가 -->
  </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style scoped>
.logo {
  position: absolute; /* 절대 위치 지정 */
  top: 10px; /* 상단으로부터의 거리. 필요에 따라 조절 가능 */
  left: 10px; /* 좌측으로부터의 거리. 필요에 따라 조절 가능 */
  width: 100px; /* 로고 이미지의 너비. 필요에 따라 조절 가능 */
  height: auto; /* 이미지의 높이는 자동으로 조절되도록 설정 */
}
.TitleText {
  position: absolute;
  top: 35%; /* 원래의 위치에서 아래로 조금 이동시킵니다. 이 값을 조절하여 위치를 변경할 수 있습니다. */
  left: 10%; /* 원래의 위치에서 오른쪽으로 조금 이동시킵니다. 이 값을 조절하여 위치를 변경할 수 있습니다. */
  /* 원하는 이미지 크기에 맞춰 width와 height를 설정하실 수 있습니다. */
}
.blueBox {
  /* position: absolute; 제거 */
  width: 85px;
  height: 36px;
  background-color: #1968c1;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blueBox:nth-of-type(2) {
  /* 두 번째 파란색 박스에 대한 스타일 */
  top: calc(
    35% + 140px + 40px
  ); /* 첫 번째 파란색 박스 아래로 40px 이동 (박스 높이 + 4px 간격) */
}
.blueBox p {
  margin: 0; /* 텍스트의 기본 마진을 제거 */
  color: white; /* 글씨색을 흰색으로 변경 */
  font-size: 20px;
}

.inputField {
  background: none;
  border: none;
  border-bottom: 1px solid #555;
  outline: none;
  margin-left: 10px;
  color: black;
  flex-grow: 1;
}

.con {
  position: absolute;
  top: calc(35% + 140px);
  left: 10%;
  display: flex;
  align-items: center;
}

.con:nth-of-type(2) {
  /* 두 번째 컨테이너에 대한 스타일 */
  top: calc(
    35% + 140px + 40px
  ); /* 첫 번째 파란색 박스 아래로 40px 이동 (박스 높이 + 4px 간격) */
}
</style>

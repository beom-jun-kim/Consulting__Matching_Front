<template>
    <div class="p-4 d-flex justify-content-center card2 mb-4 mt-5">
        <form name="form">
            <div class="d-flex mb-3">
                <!-- <div class="form-group me-5">
                    <label for="gradeId">회원등급 :
                        <div id="gradeId" disabled class="form-control" name="gradeId">
                            {{ userInfo.role.toUpperCase() }}</div>
                    </label>
                </div> -->
                <div class="form-group me-5 w-auto">
                    <div class="dropdown">
                        <label for="gender">성별 :
                            <select class="form-select" v-model="userInfo.gender">
                                <option v-for="(gender, index) in genders" :key="index" :value="gender.value">
                                    {{ gender.text }}
                                </option>
                            </select>
                        </label>
                    </div>
                </div>
                <div class="form-group me-5 w-auto">
                    <label for="name">이름 :
                        <input v-model="userInfo.name" type="text" id="name" class="form-control" name="name" />
                    </label>
                </div>
                <div class="form-group me-5 w-auto">
                    <label for="phoneNum">전화번호 :
                        <input v-model="userInfo.phoneNum" type="text" id="phoneNum" class="form-control"
                            name="phoneNum" />
                    </label>
                </div>
            </div>
            <div class="d-flex mb-3">
                <div class="form-group w-100 me-5">
                    <label for="email" class="w-100">이메일 :
                        <input v-model="userInfo.email" type="text" id="email" class="form-control" name="email" />
                    </label>
                </div>
                <div class="form-group w-100 me-5">
                    <label for="company" class="w-100">기업명 :
                        <input v-model="userInfo.company" type="text" id="company" class="form-control"
                            name="company" />
                    </label>
                </div>
            </div>
            <div class="d-flex mb-3">
                <div class="form-group w-100 me-5">
                    <label for="password" class="w-100">비밀번호 변경 :
                        <input v-model="password" type="text" id="password" class="form-control" name="password"
                            placeholder="비밀번호" />
                    </label>
                    <span>수정시에만 입력해 주세요.</span>
                </div>
                <div class="form-group w-100 me-5">
                    <label for="password2" class="w-100">비밀번호 변경 확인 :
                        <input v-model="password2" type="text" id="password2" class="form-control" name="password2"
                            placeholder="비밀번호" />
                    </label>
                    <span>한번 더 입력해 주세요.</span>
                </div>
            </div>
            <div class="form-group">
                <div v-if="message" class="alert alert-danger" role="alert">
                    {{ message }}
                </div>
            </div>
        </form>
        <div class="w-100 d-flex justify-content-end align-items-center">
            <button class="btn btn-primary w-25" type="button" @click="updateInfo">
                저장
            </button>
        </div>
    </div>
</template>


<script>
import UserDataService from '@/services/main/UserDataService';
import jwtDecode from "jwt-decode";
export default {
    name: "InfoUpdate",
    // 뷰의 변수들을 초기화하는 곳 : data()
    data() {
        return {
            genders: [
                {
                    value: 'M',
                    text: '남'
                },
                {
                    value: 'W',
                    text: '여'
                },
            ],
            userInfo: {},
            password: "", // 바꿀 비밀번호
            password2: "", // 확인 비밀번호
            message: "",
        };
    },
    methods: {
        // 유저 아이디 받기
        getUserId() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            const userId = decodedToken.id;
            return userId;
        },
        async getUsr() {
            try {
                const res = await UserDataService.getUsr(this.getUserId());
                this.userInfo = res.data;
            }
            catch (e) {
                console.log(e.response.data.message);
            }

        },
        async updateInfo() {
            if (this.password !== this.password2) {
                this.message = "비밀번호가 일치하지 않습니다."
            } else {
                if (confirm('저장하시겠습니까?')) {
                    try {
                        var data = {
                            gender: this.userInfo.gender,
                            name: this.userInfo.name,
                            company: this.userInfo.company,
                            password: this.password,
                            phoneNum: this.userInfo.phoneNum
                        }
                        await UserDataService.updateUsr(this.getUserId(), data);
                        if (!alert('저장되었습니다.')) {
                            this.$emit("update:state", "mypage");
                        }
                    }
                    catch (e) {
                        console.log(e.response.data.message);
                    }
                }
            }
        }
    },
    async mounted() {
        await this.getUsr();
    }
}
</script>

<style>
.card2 {
    --bs-card-spacer-y: 1rem;
    --bs-card-spacer-x: 1rem;
    --bs-card-title-spacer-y: 0.5rem;
    --bs-card-border-width: 1px;
    --bs-card-border-color: var(--bs-border-color-translucent);
    --bs-card-border-radius: 0.375rem;
    --bs-card-box-shadow: ;
    --bs-card-inner-border-radius: calc(0.375rem - 1px);
    --bs-card-cap-padding-y: 0.5rem;
    --bs-card-cap-padding-x: 1rem;
    --bs-card-cap-bg: rgba(0, 0, 0, 0.03);
    --bs-card-cap-color: ;
    --bs-card-height: ;
    --bs-card-color: ;
    --bs-card-bg: #fff;
    --bs-card-img-overlay-padding: 1rem;
    --bs-card-group-margin: 0.75rem;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    height: var(--bs-card-height);
    word-wrap: break-word;
    background-color: var(--bs-card-bg);
    background-clip: border-box;
    border: var(--bs-card-border-width) solid var(--bs-card-border-color);
    border-radius: var(--bs-card-border-radius);
}
</style>
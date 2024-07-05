<template>
    <div>
        <Nav />
        <div class="sp_wrap">
            <div class="sp_container">
                <h6>BMDS 따라하기</h6>
                <div class="backImg pt-5 pb-3">
                    <div class="modalScreen container">
                        <div class="modalContent">
                            <div class="monitor">
                                <div class="monitor2">
                                    <div class="monitor3">
                                        <div class="monitorBorder">
                                            <div class="monitorScreen">
                                                <div class="image-container3">
                                                    <video v-if="selectedCategory == 'intro'" :key="selectedCategory" controls
                                                        loop muted style="width: 100%; height:100%;"
                                                        src="../../../../public/img/bmds/bmds.mp4" type="video/mp4"></video>
                                                    <video v-if="selectedCategory == 1" :key="selectedCategory" controls loop
                                                        muted style="width: 100%; height:100%;"
                                                        src="../../../../public/img/bmds/testVideo1.mp4"
                                                        type="video/mp4"></video>
                                                    <video v-if="selectedCategory == 2" :key="selectedCategory" controls loop
                                                        muted style="width: 100%; height:100%;"
                                                        src="../../../../public/img/bmds/testVideo2.mp4"
                                                        type="video/mp4"></video>
                                                    <video v-if="selectedCategory == 3" :key="selectedCategory" controls loop
                                                        muted style="width: 100%; height:100%;"
                                                        src="../../../../public/img/bmds/testVideo3.mp4"
                                                        type="video/mp4"></video>
                                                    <video v-if="selectedCategory == 4" :key="selectedCategory" controls loop
                                                        muted style="width: 100%; height:100%;"
                                                        src="../../../../public/img/bmds/testVideo4.mp4"
                                                        type="video/mp4"></video>
                                                    <video v-if="selectedCategory == 5" :key="selectedCategory" controls loop
                                                        muted style="width: 100%; height:100%;"
                                                        src="../../../../public/img/bmds/testVideo5.mp4"
                                                        type="video/mp4"></video>
                                                    <video v-if="selectedCategory == 6" :key="selectedCategory" controls loop
                                                        muted style="width: 100%; height:100%;"
                                                        src="../../../../public/img/bmds/testVideo6.mp4"
                                                        type="video/mp4"></video>
                                                    <video v-if="selectedCategory == 7" :key="selectedCategory" controls loop
                                                        muted style="width: 100%; height:100%;"
                                                        src="../../../../public/img/bmds/testVideo7.mp4"
                                                        type="video/mp4"></video>
                                                    <video v-if="selectedCategory == 8" :key="selectedCategory" controls loop
                                                        muted style="width: 100%; height:100%;"
                                                        src="../../../../public/img/bmds/testVideo8.mp4"
                                                        type="video/mp4"></video>
                                                    <video v-if="selectedCategory == 9" :key="selectedCategory" controls loop
                                                        muted style="width: 100%; height:100%;"
                                                        src="../../../../public/img/bmds/testVideo9.mp4"
                                                        type="video/mp4"></video>
                                                    <video v-if="selectedCategory == 10" :key="selectedCategory" controls loop
                                                        muted style="width: 100%; height:100%;"
                                                        src="../../../../public/img/bmds/testVideo10.mp4"
                                                        type="video/mp4"></video>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="monitorStand"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="selectVideoMenuBtn">
                                <button v-if="getUser().role == 'admin'" type="button" @click="createManual">저장</button>
                                <a href='/file/test.hwp' class="menuDown" download>매뉴얼 다운받기</a>
                                <div class="videoSelectListBox">
                                    <div class="videoSelectList">
                                        <p>강의 목록 : </p>
                                    </div>
                                    <select name="videoSelect" id="videoSelect" v-model="selectedCategory"
                                        @change="handleSelectChange">
                                        <option value="intro">intro</option>
                                        <option :value="i + 1" v-for="(v, i) in 10" :key="i">{{ i + 1 }}강</option>
                                    </select>
                                </div>
                            </div>
                            <div class="modalPurpleBottomBar">
                                <p>
                                    * 무료체험을 하시는 고객들께서는 강의 소개영상만 보실 수 있습니다. <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import MatchDateService from "@/services/main/UserMatch";
import jwtDecode from "jwt-decode";
import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
export default {
    name: "LearnView",
    components: {
        Nav,
        Footer,
    },
    data() {
        return {
            selectedCategory: 'intro',
            hanFile: '',
            hanFileName: '',
            filePath: '',
        };
    },
    methods: {
        handleSelectChange() {
            if (this.getUser().role == 'common' || this.getUser().role == 'basic') {
                alert('결제를 하지 않으시면 소개영상만 시청하실 수 있습니다.');
                this.$router.push('/main/ticketList');
            }
        },
        getUser() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            return decodedToken;
        },
        handleBtnClick(value) {
            this.selectedCategory = value;
        },
        handleFileChange(event) {
            this.hanFile = event.target.files[0];
        },
        selectFile() {
            if (this.$refs.fileInput) {
                this.$refs.fileInput.click();
            }
        },
        async createManual() {
            if (confirm("저장하시겠습니까?")) {
                try {
                    const formData = new FormData();
                    formData.append("file", this.hanFile);
                    await MatchDateService.createManual(this.getUser().id, formData);
                    alert("저장되었습니다.");
                } catch (e) {
                    alert("저장에 실패하였습니다.");
                    console.log("저장실패", e);
                }
            }
        },
        async getManual() {
            try {
                const response = await MatchDateService.getManual(58);
                this.filePath = response.data.file_path;
                this.hanFileName = decodeURIComponent(response.data.title);
                console.log("조회 성공", response.data);
            } catch (e) {
                console.log("조회 실패", e.response.data.message);
            }
        },
    },
    async mounted() {
        await this.getManual();
    }
};
</script>

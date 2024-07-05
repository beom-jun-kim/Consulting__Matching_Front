<template>
    <div class="d-flex justify-content-center mb-5" style="min-height:50rem;">
        <div class="my-5">
            <!-- <div class="mb-4" style="font-size:30px; font-weight:600;">남은 이용권 수 : </div> -->
            <div class="container">
                <div class="disGrid mt-5">
                    <div class="bmPlusBtn" @click="showModal()">
                        <div style="font-size:25px; font-weight:600;">비즈니스 모델</div>
                        <div style="font-size:23px;">추가하기</div>
                        <div class="plus_icon">
                            <div class="horizontal_line"></div>
                            <div class="vertical_line"></div>
                        </div>
                    </div>
                    <div v-for="(bm, i) in MyBms" :key="i" class="myBmList">
                        <div class="bmds_title" @click="goToMyBmDetail(bm.bmds_id)">
                            {{ bm.bmds_name }}
                        </div>
                        <div class="updDelBtn">
                            <button class="updBtn" @click="openModal(bm.bmds_id)">
                                수정</button>
                            <button class="delBtn" @click="delBm(bm.bmds_id)">
                                삭제</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="black-bg" v-if="isModalOpen === true">
            <div class="white-bg" @click.stop>
                <div class="backWhiteInput">
                    <h3 style="color:#3259a9; font-weight:600;">
                        <span v-if="isCreate === false">비즈니스 모델 수정하기</span>
                        <span v-if="isCreate === true">비즈니스 모델 추가하기</span>
                    </h3>
                    <div class="mt-43">
                        <div class="d-flex justify-content-between">

                            <div class="input-group" style="width: 100%;">
                                <input type="text" class="form-control" placeholder="사업아이템" v-model="bmds_name">
                            </div>
                        </div>
                        <div class="input-group mt-3">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="bmds_category" id="B2B" value="B2B"
                                    v-model="bmds_category" checked>
                                <label class="form-check-label" for="B2B">B2B</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="bmds_category" id="B2C" value="B2C"
                                    v-model="bmds_category">
                                <label class="form-check-label" for="B2C">B2C</label>
                            </div>
                        </div>
                        <div class="input-group mt-3">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="bmds_category2" id="PS" value="PS"
                                    v-model="bmds_category2" checked>
                                <label class="form-check-label" for="PS">Problem-Solution Fit</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="bmds_category2" id="PM" value="PM"
                                    v-model="bmds_category2">
                                <label class="form-check-label" for="PM">Product-Market Fit</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="bmds_category2" id="BM" value="BM"
                                    v-model="bmds_category2">
                                <label class="form-check-label" for="BM">Business Model Fit</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="bmds_category2" id="BMI" value="BMI"
                                    v-model="bmds_category2">
                                <label class="form-check-label" for="BMI">Business Model Innovation</label>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- isModalOpen = false -->
                <button @click="closeModal()" class="modal-exit-btn">
                    취소
                </button>
                <button v-if="isCreate == false" @click="updateBM()" class="modal-add-btn">
                    수정하기
                </button>
                <button v-if="isCreate == true" @click="addBM()" class="modal-add-btn">
                    생성하기
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import jwtDecode from 'jwt-decode';
import BMDSService from '@/services/main/BMDSService';
export default {
    name: 'MyBm',
    data() {
        return {
            MyBms: {},
            isModalOpen: false,
            isCreate: false,
            isUpdate: false,
            bmds_id: 0,
            bmds_name: "",
            bmds_category: "B2B",
            bmds_category2: "PS"
        }
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
        // 선택한 비즈니스모델 모달창 열기
        openModal(i) {
            this.isModalOpen = true;
            BMDSService.getBmChoice(i)
                .then((res) => {
                    this.bmds_name = res.data.bmds_name;
                    this.bmds_category = res.data.bmds_category;
                    this.bmds_category2 = res.data.bmds_category2;
                    this.bmds_id = res.data.bmds_id;
                })
        },
        // 비즈니스모델 생성 모달창 열기
        showModal() {
            this.isModalOpen = true;
            this.isCreate = true;
        },
        // 모달창 닫기
        closeModal() {
            this.isModalOpen = false;
            this.isCreate = false;
            this.bmds_name = "";
            this.bmds_category = "B2B";
            this.bmds_category2 = "PS";
        },
        // 비즈니스모델 전체 조회
        getBM(id) {
            BMDSService.getBM(id)
                .then((res) => {
                    this.MyBms = res.data;
                })
                .catch((e) => {
                    console.log(e);
                })
        },
        // 비즈니스모델 생성
        addBM() {
            if (confirm("저장하시겠습니까?") == true) {
                var data = {
                    bmds_id: this.bmds_id,
                    bmds_name: this.bmds_name,
                    bmds_category: this.bmds_category,
                    bmds_category2: this.bmds_category2
                };

                BMDSService.createUpdateBM(this.getUserId(), data)
                    .then(() => {
                        if (!alert('저장되었습니다.')) {
                            window.location.reload(true);
                        }
                    })
                    .catch((e) => {
                        // 실패하면 이쪽으로 결과가 들어옴
                        alert(e);
                    });
                this.bmds_name = "";
                this.bmds_category = "";
                this.bmds_category2 = "";
            }
        },
        // 비즈니스모델 삭제
        deleteBm(i) {
            if (confirm('삭제하시겠습니까?')) {
                BMDSService.deleteBM(i)
                    .then(() => {
                        if (!alert('삭제되었습니다.')) {
                            window.location.reload(true);
                        }
                    })

            }
        },
        // 비즈니스모델 선택값 수정
        updateBM() {
            var data = {
                bmds_id: this.bmds_id,
                bmds_name: this.bmds_name,
                bmds_category: this.bmds_category,
                bmds_category2: this.bmds_category2
            }
            if (confirm('수정하시겠습니까?')) {
                BMDSService.createUpdateBM(this.getUserId(), data)
                    .then(() => {
                        if (!alert("수정되었습니다.")) {
                            window.location.reload(true);
                        }
                    })
                    .catch((e) => {
                        console.log(e);
                    })
            }
        },
        // 비즈니스모델 작성하러가기
        goToMyBmDetail(id) {
            location.href = `/main/MyBmDetail/${id}`;
        }
    },
    // 비즈니스모델 조회
    mounted() {
        this.getBM(this.getUserId());
    }

}
</script>

<style scoped>
.delBtn {
    width: 5rem;
    height: 2rem;
    background: white;
    border: 1px solid #3259a9;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.updBtn {
    width: 5rem;
    height: 2rem;
    background: #3259a9;
    color: white;
    border: 1px solid #3259a9;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.updDelBtn {
    width: 100%;
    height: 5rem;
    background: white;
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.myBmList {
    width: 15rem;
    height: 13rem;
    border: 1px solid #3259a9;
    border-radius: 10px;
    background: #efe6f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.bmPlusBtn {
    width: 15rem;
    height: 13rem;
    border: 1px solid #3259a9;
    border-radius: 10px;
    cursor: pointer;
    background: #efe6f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.disGrid {
    width: 90rem;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 0));
    grid-gap: 1rem;
}

.bmds_title {
    font-size: 25px;
    font-weight: 600;
    width: 15rem;
    height: 8rem;
    padding: 2rem 0 0 1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
}

.black-bg {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.432);
    position: fixed;
    padding: 20px;
}

.white-bg {
    width: 45rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    position: absolute;
}

.modal-exit-btn {
    width: 70px;
    height: 35px;
    margin-top: 30px;
    float: right;
    border: 1px solid #3259a9;
    border-radius: 45px;
    background: white;
    color: #3259a9;
}

.modal-add-btn {
    width: 100px;
    height: 35px;
    margin: 30px 20px 0 0;
    float: right;
    border: 1px solid #3259a9;
    border-radius: 45px;
    background: #3259a9;
    color: white;
}

.modal-exit-btn:hover {
    cursor: pointer;
}

.backWhiteInput {
    width: 40rem;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
}

.plus_icon {
    width: 30px;
    height: 30px;
    position: relative;
}

.horizontal_line,
.vertical_line {
    position: absolute;
    background-color: #3259a9;
    transition: transform 0.3s;
    /* 애니메이션 추가 */
}

.horizontal_line {
    width: 100%;
    height: 4px;
    top: 50%;
    transform: translateY(-50%) rotate(0deg);
    /* 초기 각도 설정 */
}

.vertical_line {
    width: 4px;
    height: 100%;
    left: 50%;
    transform: translateX(-50%) rotate(0deg);
    /* 초기 각도 설정 */
}

.plus_icon:hover .horizontal_line {
    transform: translateY(-50%) rotate(90deg);
}

.plus_icon:hover .vertical_line {
    transform: translateX(-50%) rotate(90deg);
}
</style>
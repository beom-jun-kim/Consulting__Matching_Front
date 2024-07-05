<template>
    <div class="modal" v-if="isModalOpen">
        <div class="d-flex justify-content-end" style="width:750px;">
            <button class="closeBtn" @click="closeModal">X</button>
        </div>
        <div class="modal-content">
            <!-- 모달 내용 -->
            <!-- <p>{{ modalContent }}</p> -->
            <div class="d-flex flex-column justify-content-between align-items-start"
                style="width:100%; height:100%; padding:1rem; border:2px solid black; border-radius:15px;">
                <div class="preSB" style="font-size:18px;">
                    <span style="font-size:28px;">리뷰작성</span><br />
                    고객님의 소중한 후기는 BMDS가 발전할 수 있는 좋은 밑거름이 될 것입니다.
                </div>

                <div class="satisfaction-container">
                    <label for="selectNumber" class="label">만족도 :
                        <div class="custom-select">
                            <select id="selectNumber" v-model="selectedNumber" class="form-select">
                                <option disabled value="">Select an option</option>
                                <option v-for="number in numbers" :key="number" :value="number">{{ number }} 점</option>
                            </select>
                        </div>
                    </label>
                </div>
                <textarea class="d-flex" style="width:100%; height:20rem;"></textarea>
                <div style="width:100%;">
                    <button class="btn btn-primary" style="float:right;">저장</button>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import BetaService from '@/services/admin/BetaService';
export default {
    data() {
        return {
            isModalOpen: false,
            modalContent: '',
            selectedNumber: null,
            numbers: [1, 2, 3, 4, 5],
            score: 0,
            content: ''
        };
    },
    methods: {
        openModal(content) {
            this.isModalOpen = true;
            this.modalContent = content;
        },
        closeModal() {
            this.isModalOpen = false;
            this.modalContent = '';
        },
        toggleCheckbox(index) {
            // 선택한 별부터 첫 번째 별까지의 체크 상태를 반전
            for (let i = 0; i <= index; i++) {
                this.isChecked[i] = !this.isChecked[index];
            }
        },
        saveReview() {
            if (!alert('저장하시겠습니까?')) {
                var data = {
                    score: this.selectedNumber,
                    content: this.content
                };

                BetaService.saveReview(this.$route.params.id, data)
                    .then(() => {
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }

    },
};
</script>
  
<style scoped>
/* 모달 스타일링 */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal-content {
    width: 650px;
    /* 내부 모달 창의 너비 조절 */
    height: 620px;
    /* 내부 모달 창의 높이 조절 */
    background-color: white;
    padding: 20px;
    border-radius: 15px;
}

.closeBtn {
    border-radius: 50%;
    border: none;
    background: white;
    font-size: 30px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.custom-select {
    position: relative;
    width: 150px;
    /* Adjust the width as needed */
}

.form-select {
    appearance: none;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    cursor: pointer;
}

.form-select:focus {
    outline: none;
}

/* Add an arrow for styling */
.form-select::after {
    content: '\25BC';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
}
</style>
  
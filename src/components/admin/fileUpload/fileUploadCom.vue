<template>
    <div id="layoutSidenav_content" class="preR">
        <main class="m-auto">
            <div class="card2 mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h1 class="my-2">사업공고 리스트 이미지 업로드</h1>
                </div>
                <div class="card-body d-flex flex-column align-items-center">
                    <div class="card-body mx-auto">
                        <div class="d-flex flex-column justify-content-center align-items-start">
                            <div>
                                <input type="number" v-model="firstNumber" placeholder="Enter first number" />번 인덱스부터
                            </div>
                            <br />
                            <div>
                                <input type="number" v-model="secondNumber" placeholder="Enter second number" />번 인덱스까지 이미지
                                삽입
                            </div>
                        </div>
                        <input type="file" id="fileInput" ref="fileInput" @change="handleFileUpload" multiple />
                        <button @click="uploadFiles">Upload</button>
                    </div>
                </div>
            </div>
        </main>
        <FooterCom />
    </div>
</template>

<script>
import RoadmapService from '@/services/admin/RoadmapService';
import FooterCom from "@/common/admin/FooterCom.vue";
export default {
    name: "fileUploadView",
    components: {
        FooterCom,
    },
    data() {
        return {
            filesToUpload: [],
            firstNumber: 0,
            secondNumber: 0,
        };
    },
    methods: {
        handleFileUpload(event) {
            this.filesToUpload = event.target.files;
        },
        async uploadFiles() {
            const formData = new FormData();

            for (let i = 0; i < this.filesToUpload.length; i++) {
                formData.append('files', this.filesToUpload[i]);
            }
            // 추가된 부분: 번호 데이터를 formData에 추가
            formData.append('firstNumber', this.firstNumber);
            formData.append('secondNumber', this.secondNumber);
            try {
                await RoadmapService.multiImageUp(formData);
                alert('업로드 성공');
            } catch (error) {
                console.error('Error uploading to S3:', error);
            }
        },
    },
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
}

.file-count {
    margin-top: 10px;
    font-size: 14px;
    color: #777;
}

main {
    text-align: center;
    margin-top: 20px;
}

.custom-file-upload {
    display: inline-block;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #4caf50;
    border-radius: 5px;
    cursor: pointer;
}

.custom-file-upload input[type="file"] {
    display: none;
}

button {
    margin-top: 10px;
    padding: 10px 15px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.preR {
    font-family: "Pretendard_Rgula" !important;
}

@import "../../../../public/css/admin/styles.css";
</style>
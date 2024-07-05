<template>
    <div class="sp_wrap">
        <div class="sp_container">
            <h6>멘토링 결과 보고서</h6>

        <form class="resultsReport" id="pdfarea">
            
            <div class="userInfo">
                <div class="mentorInfo">
                    <div class="title">
                        <h6>멘토 (Mentor)</h6>
                    </div>
                    <div>
                        <label for="mentorName">이<span class="spacing"></span>름</label>
                        <input type="text"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                            id="mentorName" name="mentorName" v-model="mentorName">
                    </div>
                    <div>
                        <label for="field">상담분야</label>
                        <input type="text"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                            id="field" name="field" v-model="mentorArea">
                    </div>
                    <div>
                        <label for="belong">소속기관</label>
                        <input type="text"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                            id="belong" name="belong" v-model="mentorGroup">
                    </div>
                    <div>
                        <label for="level">직<span class="spacing"></span>위</label>
                        <input type="text"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                            id="level" name="level" v-model="mentorRank">
                    </div>
                </div>
                <div class="mentorInfo">
                    <div class="title">
                        <h6>멘티 (Mentee)</h6>
                    </div>
                    <div>
                        <label for="menteeName">이<span class="spacing"></span>름</label>
                        <input type="text"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                            id="menteeName" name="menteeName" v-model="menteeName">
                    </div>
                    <div class="founded">
                        <p>창업여부</p>
                        <div class="radioStyle">
                            <div>
                                <input type="radio"
                                    :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                                    id="spare" name="founded" v-model="menteeIsStartUp" value="spare">
                                <label for="spare">예비창업자</label>
                            </div>
                            <div>
                                <input type="radio"
                                    :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                                    id="already" name="founded" v-model="menteeIsStartUp" value="already">
                                <label for="already">기창업자</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="company">기<span class="spacing02"></span>업<span class="spacing02"></span>명</label>
                        <input type="text"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                            id="company" name="company" v-model="menteeCompany">
                    </div>
                    <div>
                        <label for="item">아이템명</label>
                        <input type="text"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'" id="item"
                            name="item" v-model="menteeItem">
                    </div>
                </div>
            </div>
            <div class="activity">
                <div class="title">
                    <h6>멘토링 활동 수행 방법</h6>
                </div>
                <div class="activityLine">
                    <div>
                        <label for="count">차수</label>
                        <input type="text"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                            id="count" name="count" v-model="degree">
                    </div>
                    <div>
                        <label for="day">수행날짜</label>
                        <input type="date"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'" id="day"
                            name="day" v-model="performanceDate">
                    </div>
                    <div class="teach">
                        <p>지도방법</p>
                        <input type="radio"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                            id="contact" name="teach" v-model="teachingMethod" value="contact">
                        <label for="contact">대면</label>

                        <input type="radio"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                            id="uncontact" name="teach" v-model="teachingMethod" value="uncontact">
                        <label for="uncontact">비대면</label>
                    </div>
                </div>
                <div class="activityLine">
                    <div>
                        <label for="place">장소</label>
                        <input type="text"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                            id="place" name="place" v-model="place">
                    </div>
                    <div>
                        <label for="etc">참<span class="spacing02"></span>석<span class="spacing02"></span>자</label>
                        <input type="text"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'" id="etc"
                            name="etc" v-model="etc">
                    </div>
                    <div style="width: 186.45px;"></div>
                </div>
            </div>
            <div class="request">
                <div class="title">
                    <h6>멘티 요구사항(주제)</h6>
                </div>
                <textarea :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                    v-model="subject"></textarea>
            </div>

            <div class="mentorResults">
                <div class="title">
                    <h6>멘토링 수행결과</h6>
                </div>

                <div class="opinion">
                    <div class="subTitle">
                        <p>수행 내용 요약</p>
                    </div>
                    <textarea :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                        v-model="summary"></textarea>
                </div>

                <div class="opinion">
                    <div class="subTitle">
                        <p>세부 수행 내용</p>
                    </div>
                    <textarea :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                        v-model="result"></textarea>
                </div>

                <div class="opinion">
                    <div class="subTitle">
                        <p>기대효과 및 향후계획</p>
                    </div>
                    <textarea :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                        v-model="benefit"></textarea>
                </div>

                <div class="opinion">
                    <div class="subTitle">
                        <p>수행사진</p>
                    </div>
                    <div class="imageUploadWrap">
                        <label for="image01">
                            <div class="imageUpload">
                                <div v-if="!pathUrl01" class="w-100">
                                    <span>+</span>
                                    <span>사진파일 업로드</span>
                                </div>
                                <div v-else class="buildupImg"
                                    :style="{ 'background-image': 'url(' + pathUrl01 + ')' }">
                                </div>
                            </div>
                        </label>
                        <input ref="fileInput01"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                            type="file" id="image01" name="image01" accept="image/*" value="첨부파일"
                            @change="handleFileUpload($event, '01')">

                        <label for="image02">
                            <div class="imageUpload">
                                <div v-if="!pathUrl02" class="w-100">
                                    <span>+</span>
                                    <span>사진파일 업로드</span>
                                </div>
                                <div v-else class="buildupImg"
                                    :style="{ 'background-image': 'url(' + pathUrl02 + ')' }">
                                </div>
                            </div>
                        </label>
                        <input ref="fileInput02"
                            :disabled="getUser().role !== 'g-consultant' && getUser().role !== 's-consultant'"
                            type="file" id="image02" name="image02" accept="image/*" value="첨부파일"
                            @change="handleFileUpload($event, '02')">
                    </div>
                </div>
                <div class="opinion">
                    <div class="subTitle2">
                        <p>첨부파일 <span style="font-size:13px;">* 첨부파일은 최대 일주일간 보관됩니다.</span></p>
                    </div>
                    <input type="file" @change="handleFileChange" ref="fileInput" style="display: none">
                    <div class="d-flex flex-column justify-content-center align-items-start">
                        <div class="fileInput mt-1">
                            <span v-if="hanFile">{{ hanFile.name }}</span>
                            <span v-else>{{ hanFile2 }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="container submit">
            <div class="d-flex">
                <button class="fileBtn" v-if="getUser().role == 'g-consultant' && getUser().role == 's-consultant'"
                    @click.prevent="selectFile">첨부파일 선택</button>
                <button v-if="!this.$route.path.startsWith('/main/mentor/state/')" class="downloadBtn mx-3"
                    @click.prevent="downloadFile(hanFile2)">
                    <i class="fas fa-download"></i> 첨부파일 다운로드
                </button>
            </div>
            <button type="button" @click="saveJournal" v-if="this.$route.params.id == 0">저장</button>
            <div v-else>
                <button type="button" class="text-black" @click="captureAndConvertToPDF">PDF다운로드</button>
                <button type="button" v-if="getUser().role == 'g-consultant' || getUser().role == 's-consultant'"
                    @click="updateJournalData">수정한 내용 저장</button>
                <button type="button" @click="backSite">뒤로가기</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import MatchDateService from "@/services/main/UserMatch";
import jwtDecode from "jwt-decode";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default {
    name: "JournalCheck",
    data() {
        return {
            // input data
            mentorName: "",
            mentorArea: "",
            mentorGroup: "",
            mentorRank: "",
            menteeName: "",
            menteeIsStartUp: "",
            menteeCompany: "",
            menteeItem: "",
            performanceDate: "",
            degree: "",
            teachingMethod: 1,
            place: "",
            etc: "",
            subject: "",
            summary: "",
            result: "",
            benefit: "",
            pathUrl01: "",
            pathUrl02: "",
            appId: 0,
            buildId2: 0,
            hanFile: '',
            hanFile2: '',
            hanFileDownloadPath: ''
            
        }
    },
    methods: {

        async captureAndConvertToPDF() {
            const captureTarget = document.getElementById('pdfarea');
            try {
                const canvas = await html2canvas(captureTarget, {
                    useCORS: true,
                    scale: 1,
                });
                const imageData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(imageData, 'PNG', 0, 0, 210, 297);
                pdf.save('download.pdf');
            } catch (error) {
                console.error('Error capturing or converting to PDF:', error);
            }
        },

        async downloadFile(fileName) {
            const response = await fetch(this.hanFileDownloadPath);
            const fileContent = await response.blob();
            const url = window.URL.createObjectURL(fileContent);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
        },
        selectFile() {
            if (this.$refs.fileInput) {
                this.$refs.fileInput.click();
            }
        },
        handleFileChange(event) {
            this.hanFile = event.target.files[0];
        },
        backSite() {
            this.$router.go(-1);
        },
        getUser() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            return decodedToken;
        },
        async saveJournal() {
            if (confirm("저장하시겠습니까?")) {
                if (!this.menteeIsStartUp) {
                    alert('창업여부를 선택해 주세요.');
                }
                else {
                    try {
                        const formData = new FormData();
                        formData.append("images", this.$refs.fileInput01.files[0]);
                        formData.append("images", this.$refs.fileInput02.files[0]);
                        formData.append("textFile", this.hanFile);
                        formData.append("appId", this.$route.params.appId);
                        formData.append("buildId", this.$route.params.buildId);
                        formData.append("mentorName", this.mentorName);
                        formData.append("mentorArea", this.mentorArea);
                        formData.append("mentorGroup", this.mentorGroup);
                        formData.append("mentorRank", this.mentorRank);
                        formData.append("menteeName", this.menteeName);
                        formData.append("menteeIsStartUp", this.menteeIsStartUp);
                        formData.append("menteeCompany", this.menteeCompany);
                        formData.append("menteeItem", this.menteeItem);
                        formData.append("degree", this.degree);
                        formData.append("performanceDate", new Date(this.performanceDate));
                        formData.append("teachingMethod", this.teachingMethod);
                        formData.append("place", this.place);
                        formData.append("etc", this.etc);
                        formData.append("subject", this.subject);
                        formData.append("summary", this.summary);
                        formData.append("result", this.result);
                        formData.append("benefit", this.benefit);
                        
                        for (let key of formData.keys()) {
                            console.log(key + "," + formData.get(key));
                        }

                        await MatchDateService.createConsultingJournal(this.getUser().id, formData);
                        alert("저장되었습니다.");
                    } catch (e) {
                        alert("저장에 실패하였습니다.");
                        console.log("저장실패", e);
                    }
                }
            }
        },
        async getJournalData(id) {
            try {
                const response = await MatchDateService.getConsultingJournalDetail(id);
                this.mentorName = response.data.mentorName;
                this.mentorArea = response.data.mentorArea;
                this.mentorGroup = response.data.mentorGroup;
                this.mentorRank = response.data.mentorRank;
                this.menteeName = response.data.menteeName;
                this.menteeIsStartUp = response.data.menteeIsStartUp;
                this.menteeCompany = response.data.menteeCompany;
                this.menteeItem = response.data.menteeItem;
                this.performanceDate = new Date(response.data.performanceDate).toISOString().split('T')[0];
                this.degree = response.data.degree;
                this.teachingMethod = response.data.teachingMethod;
                this.place = response.data.place;
                this.etc = response.data.etc;
                this.subject = response.data.subject;
                this.summary = response.data.summary;
                this.result = response.data.result;
                this.benefit = response.data.benefit;
                this.appId = response.data.appId;
                this.buildId2 = response.data.buildId;
                this.pathUrl01 = response.data.img1;
                this.pathUrl02 = response.data.img2;
                this.hanFile2 = decodeURIComponent(response.data.hanFileName);
                this.hanFileDownloadPath = response.data.hanFile;
                console.log("조회 성공", response.data);
            } catch (e) {
                console.log("조회 실패", e.response.data.message);
            }
        },
        async updateJournalData() {
            if (confirm("수정하시겠습니까?")) {
                try {
                    const formData = new FormData();
                    formData.append("images", this.$refs.fileInput01.files[0]);
                    formData.append("images", this.$refs.fileInput02.files[0]);
                    formData.append("textFile", this.hanFile);
                    formData.append("appId", this.appId);
                    formData.append("buildId", this.buildId2);
                    formData.append("mentorName", this.mentorName);
                    formData.append("mentorArea", this.mentorArea);
                    formData.append("mentorGroup", this.mentorGroup);
                    formData.append("mentorRank", this.mentorRank);
                    formData.append("menteeName", this.menteeName);
                    formData.append("menteeIsStartUp", this.menteeIsStartUp);
                    formData.append("menteeCompany", this.menteeCompany);
                    formData.append("menteeItem", this.menteeItem);
                    formData.append("degree", this.degree);
                    formData.append("performanceDate", this.performanceDate);
                    formData.append("teachingMethod", this.teachingMethod);
                    formData.append("place", this.place);
                    formData.append("etc", this.etc);
                    formData.append("subject", this.subject);
                    formData.append("summary", this.summary);
                    formData.append("result", this.result);
                    formData.append("benefit", this.benefit);

                    for(const x of formData.entries()) {
                       console.log(x);
                    }

                    await MatchDateService.updateConsultingJournal(this.$route.params.id, formData);
                    alert('수정되었습니다.');
                    await this.getJournalData(this.$route.params.id);

                } catch (e) {
                    console.log("업데이트 실패", e);
                }
            }
        },
        async getMenteeMento() {
            try {
                const res = await MatchDateService.getConsultGeneralInfo(this.paramAppId);
                this.mentorName = res.data.consultantUser.name;
                this.mentorArea = res.data.category;
                this.mentorGroup = res.data.consultantUser.company;
                this.mentorRank = res.data.mentorRank;
                this.menteeName = res.data.generalUser.name;
                this.menteeCompany = res.data.generalUser.company; 
                this.menteeItem = res.data.build.title;
            }
            catch (e) {
                console.log(e.response.data.message)
            }
        },
        async handleFileUpload(event, target) {
            const file = event.target.files[0];
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = () => {
                    this['pathUrl' + target] = reader.result; 
                };
                reader.readAsDataURL(file);
            }
        },
        async loadMentoInfo(appId) {
            try{
                let data = {
                    appId : +appId
                };

                const response = await MatchDateService.loadMentoInfo(data);
                console.log("멘토 정보 조회 성공", response.data);

                this.mentorName = response.data[0].name; 
                this.mentorArea = this.$route.params.tagName;
                this.mentorGroup = response.data[0].company;

            } catch(e) {
                console.log("멘토 정보 조회 실패", e.response.data.message);
            }
            
        },
        async loadMenteeInfo(appId) {
            try{
                let data = {
                    appId : +appId
                };
                
                const response = await MatchDateService.loadMenteeInfo(data);
                console.log("멘티 정보 조회 성공", response);
                
                this.menteeName = response.data[0].name;
                this.menteeCompany = response.data[0].company;
                this.menteeItem = this.$route.params.bmTitle;

                

            } catch(e) {
                console.log("멘티 정보 조회 실패", e.response.data.message);
            }
            
        },
    },
    async mounted() {

        if(this.$route.params.id == 0) {
            // 신규작성일때 멘토, 멘티 정보가져오기
            
            // 멘토정보 가져오기
            await this.loadMentoInfo(this.$route.params.appId);

            // 멘티정보 가져오기
            await this.loadMenteeInfo(this.$route.params.appId);
        } else {
            // 수정일때 데이터 불러오기
            await this.getJournalData(this.$route.params.id);
        }

        // 멘티, 멘토정보 가져오기
        //await this.getMenteeMento();
    }
};
</script>

<style scoped>
</style>
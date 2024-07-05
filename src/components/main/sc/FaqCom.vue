<template>
  <div>
    <section>
      <div class="container px-5 mt-5">
        <div class="text-center mb-5">
          <h1 class="preSB">FAQ</h1>
          <p class="lead preR text-muted mb-0">
            사용자가 가장 많이 하는 질문들입니다.
          </p>
        </div>
        <div class="row gx-5 d-flex preR">
          <div v-if="adLogin" class="col-xl-8">
            <!-- FAQ Accordion 1-->
            <div class="accordion" id="accordionExample" v-for="(faq, index) in faqs" :key="index">
              <div class="accordion-item">
                <div v-if="adLogin">
                  <input type="checkbox" v-model="checkedIds" @click="select" :value="faq.id" />
                  ID : {{ faq.id }}
                  <div class="d-flex" style="float: right">
                    <input type="radio" name="radio" v-model="updateIds" @change="selectInfo" :value="faq.id"
                      style="margin: 5px 5px 0 0; width: 20px; height: 20px" />
                    <div class="mt-1">선택수정</div>
                  </div>
                </div>
                <h3 class="accordion-header collapsed" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    :data-bs-target="`#collapse_${faq.id}`" aria-expanded="false" aria-controls="collapseOne">
                    Q . <b>({{ faq.category }})</b> {{ faq.question }}
                  </button>
                </h3>
                <div class="accordion-collapse collapse" :id="`collapse_${faq.id}`" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body ms-1">
                    A . {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="adLogin" class="col-xl-4">
            <div class="card border-0 bg-light">
              <div class="card-body p-4 py-lg-5">
                <h3>상세보기</h3>
                <div class="d-flex">
                  <div class="text-center w-100">
                    <input type="text" class="form-control" placeholder="번호" :value="selectId.id" />
                    <div class="dropdown">
                      <select class="form-select" v-model="selectId.category">
                        <option v-for="(cate, index) in cateList" :key="index" :value="cate.text">
                          {{ cate.text }}
                        </option>
                      </select>
                    </div>

                    <input type="text" class="form-control" v-model="selectId.question" placeholder="질문을 입력하세요" />

                    <textarea class="form-control" v-model="selectId.answer" placeholder="답변을 입력하세요"></textarea>
                    <div v-if="adLogin">
                      <button type="button" class="btn btn-sm btn-primary" @click="faqInsert()">
                        글생성
                      </button>
                      <button type="button" class="btn btn-sm btn-secondary" @click="faqUpdate()">
                        글수정
                      </button>
                      <button type="button" class="btn btn-sm btn-danger" @click="faqDelete()">
                        글삭제
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="col-xl-12">
            <!-- FAQ Accordion 1-->
            <div class="accordion" id="accordionExample" v-for="(faq, index) in faqs" :key="index">
              <div class="accordion-item">
                <h3 class="accordion-header collapsed" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    :data-bs-target="`#collapse_${faq.id}`" aria-expanded="false" aria-controls="collapseOne">
                    Q . ({{ faq.category }}) {{ faq.question }}
                  </button>
                </h3>
                <div class="accordion-collapse collapse" :id="`collapse_${faq.id}`" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body ms-1">
                    A . {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ServCenterDataService from "@/services/main/ServCenterDataService";
export default {
  name: "faqCom",
  data() {
    return {
      faqs: {
        id: "",
        category: "",
        question: "",
        answer: "",
      },
      updateIds: "", //수정할 id값
      selectId: {
        //상세보기할 값
        id: "",
        category: "",
        question: "",
        answer: "",
      },
      checkedIds: [], //삭제할때 id값 넣어두는 곳
      adLogin: false, // 나중에 admin로그인하면 값 할당해줘여함
      cateList: [
        {
          text: "비즈니스모델 작성",
        },
        {
          text: "사업계획서 전환",
        },
        {
          text: "탈퇴",
        },
        {
          text: "환불",
        },
        {
          text: "결제",
        },
        {
          text: "아이디찾기",
        },
        {
          text: "사업계획서 양식",
        },
        {
          text: "컨설팅",
        },
        {
          text: "기타",
        },
      ], //카테고리
    };
  },
  methods: {
    getFaqs() {
      ServCenterDataService.getFAQAll()
        .then((res) => {
          this.faqs = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //글삭제
    faqDelete() {
      if (confirm("자주 묻는 질문(들)을 삭제하시겠습니까?")) {
        for (let i = 0; i < this.checkedIds.length; i++) {
          ServCenterDataService.deleteFAQ(this.checkedIds[i])
            .then(() => {
              if (!alert("삭제되었습니다.")) {
                // 이벤트 처리가 끝난 후 페이지 새로고침
                window.location.reload();
              }
            })
            .catch((e) => {
              alert(e);
              return false;
            });
        }
      }
    },
    //글수정
    faqUpdate() {
      if (confirm("수정하시겠습니까?")) {
        var data = {
          category: this.selectId.category,
          question: this.selectId.question,
          answer: this.selectId.answer,
        };
        ServCenterDataService.updateFAQ(this.selectId.id, data)
          .then(() => {
            if (!alert("수정되었습니다.")) {
              // 이벤트 처리가 끝난 후 페이지 새로고침
              window.location.reload();
            }
          })
          .catch((e) => {
            alert(e);
            return false;
          });
      }
    },
    //글생성
    faqInsert() {
      if (confirm("생성하시겠습니까?")) {
        var data = {
          category: this.selectId.category,
          question: this.selectId.question,
          answer: this.selectId.answer,
        };
        ServCenterDataService.createFAQ(data)
          .then(() => {
            if (!alert("생성되었습니다.")) {
              // 이벤트 처리가 끝난 후 페이지 새로고침
              window.location.reload();
            }
          })
          .catch((e) => {
            alert(e);
            return false;
          });
      }
    },
    //채크된 값은 배열에 넣고 아니면 배열에서 빼기
    select(e) {
      if (e.target.checked == false) {
        for (let i = 0; i < this.checkedIds.length; i++) {
          if (this.checkedIds[i] == e.target.value) {
            this.checkedIds.splice(i, 1);
          }
        }
      } else {
        this.checkedIds.push(e.target.value);
      }
    },
    // 선택수정 체크 시 상세보기 OR 수정가능함
    selectInfo(e) {
      if (e.target.checked === true) {
        this.$nextTick(() => {
          //비동기때문에 값이 늦게 나오는것을 방지함
          ServCenterDataService.getFAQ(this.updateIds).then((res) => {
            this.selectId = res.data;
          });
        });
      }
    },
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트
  mounted() {
    // 전체 목록 가져오기 메소드 호출
    this.getFaqs();
  },
};
</script>

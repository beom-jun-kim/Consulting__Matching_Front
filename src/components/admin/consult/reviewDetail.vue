<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">컨설팅후기</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="card2 mb-4">
          <div class="card-header">
            <h3>{{ reviews.reviewName }} 컨설턴트님</h3>
          </div>
          <div class="card-body">
            <div class="d-flex">
              <div style="
                  border: 1px solid #dee2e6;
                  margin: 13rem -6rem 16rem 11rem;
                ">
                <div class="block">
                  <label class="label">응답자명 : </label>
                  {{ reviews.userName }}
                </div>
                <div class="block mt-3">
                  <label class="label">응답자아이디 : </label>
                  {{ reviews.userEmail }}
                </div>
                <div class="block mt-3">
                  <label class="label">응답자연락처 : </label>
                  {{ reviews.phone }}
                </div>
              </div>
              <div style="margin: 0 auto 0">
                * 멘토링 만족도 : 구체적으로 도움받은 내용을 간단히 기입해
                주세요.
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">공통항목</th>
                      <th scope="col">매우그렇다</th>
                      <th scope="col">대체로그렇다</th>
                      <th scope="col">보통</th>
                      <th scope="col">그렇지않다</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        1.컨설팅 진행일정 및 시간은 적절하였는가?
                      </th>
                      <td>
                        <input class="form-check-input" type="radio" name="sel1" id="sel1" value="1"
                          v-model="reviews.review1" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel1" id="sel1" value="2"
                          v-model="reviews.review1" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel1" id="sel1" value="3"
                          v-model="reviews.review1" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel1" id="sel1" value="4"
                          v-model="reviews.review1" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        2.컨설턴트는 전문성을 갖추고 지원하였는가?
                      </th>
                      <td>
                        <input class="form-check-input" type="radio" name="sel2" id="sel2" value="1"
                          v-model="reviews.review2" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel2" id="sel2" value="2"
                          v-model="reviews.review2" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel2" id="sel2" value="3"
                          v-model="reviews.review2" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel2" id="sel2" value="4"
                          v-model="reviews.review2" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        3.컨설턴트가 정확안 정보를 안내하였는가?
                      </th>
                      <td>
                        <input class="form-check-input" type="radio" name="sel3" id="sel3" value="1"
                          v-model="reviews.review3" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel3" id="sel3" value="2"
                          v-model="reviews.review3" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel3" id="sel3" value="3"
                          v-model="reviews.review3" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel3" id="sel3" value="4"
                          v-model="reviews.review3" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        4.컨설턴트의 지원이 문제해결에 도움이 되었는가?
                      </th>
                      <td>
                        <input class="form-check-input" type="radio" name="sel4" id="sel4" value="1"
                          v-model="reviews.review4" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel4" id="sel4" value="2"
                          v-model="reviews.review4" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel4" id="sel4" value="3"
                          v-model="reviews.review4" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel4" id="sel4" value="4"
                          v-model="reviews.review4" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">5.컨설턴트의 태도는 전문적이었는가?</th>
                      <td>
                        <input class="form-check-input" type="radio" name="sel5" id="sel5" value="1"
                          v-model="reviews.review5" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel5" id="sel5" value="2"
                          v-model="reviews.review5" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel5" id="sel5" value="3"
                          v-model="reviews.review5" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel5" id="sel5" value="4"
                          v-model="reviews.review5" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">6.컨설팅 결과에 만족하였는가?</th>
                      <td>
                        <input class="form-check-input" type="radio" name="sel6" id="sel6" value="1"
                          v-model="reviews.review6" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel6" id="sel6" value="2"
                          v-model="reviews.review6" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel6" id="sel6" value="3"
                          v-model="reviews.review6" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel6" id="sel6" value="4"
                          v-model="reviews.review6" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">7.컨설팅을 다시 요청할 의사가 있는가?</th>
                      <td>
                        <input class="form-check-input" type="radio" name="sel7" id="sel7" value="1"
                          v-model="reviews.review7" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel7" id="sel7" value="2"
                          v-model="reviews.review7" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel7" id="sel7" value="3"
                          v-model="reviews.review7" />
                      </td>
                      <td>
                        <input class="form-check-input" type="radio" name="sel7" id="sel7" value="4"
                          v-model="reviews.review7" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">8.기타의견(개선점)</th>
                      <td colspan="4">
                        <textarea class="form-control" type="text" name="sel7" id="sel7" v-model="reviews.review8"
                          style="height: 10rem"></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex" style="width: 100%">
          <div class="m-auto">
            <router-link type="button" class="btn btn-primary btn-sm" to="/admin/journalList">
              돌아가기
            </router-link>
          </div>
        </div>
      </div>
      
    </main><FooterCom />
  </div>
</template>

<script>
import ConsultDataService from "@/services/admin/ConsultDataService";
import FooterCom from "@/common/admin/FooterCom.vue";
export default {
  components: {
    FooterCom,
  },
  data() {
    return {
      reviews: {
        id: "1",
        userEmail: "kevin@naver.com",
        userName: "김창권",
        reviewName: "김이름",
        phone: "01012341234",
        review1: 2,
        review2: 1,
        review3: 1,
        review4: 2,
        review5: 1,
        review6: 2,
        review7: 3,
        review8:
          "김이름 컨설턴트님께서는 아주 친절하게 컨설팅 해주시고 좋습니다!",
      },
    };
  },
  methods: {
    // id에 해당하는 회원정보를 조회하는 서비스를 요청(springboot)
    getReview(id) {
      // axios 통신이용 서비스 호출(springboot)
      ConsultDataService.getReview(id)
        // 성공하면 then으로 결과 데이터가 들어옴(response.data )
        .then((response) => {
          this.reviews = response.data;
        })
        // 실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트(모든 회원조회가 실행됨)
  /* mounted() {
            this.getReview(this.$route.params.id);
        },*/
};
</script>

<style>
th,
td {
  text-align: center;
}

.label {
  display: inline-block;
  width: 140px;
  text-align: right;
}

@import "../../../../public/css/admin/styles.css";
</style>

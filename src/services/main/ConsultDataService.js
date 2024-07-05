// axios 사용법
// ex) get방식 : axios.get('/user/12345')
//     post방식 : axios.post('/user',{id:'aa',name:'forbob'})
//    axios : get, post, put, delete
//    axios.post('/user,{id:'aa',name:'forbob'})
//    .then(function(res) {
//   성공하면 then 들어옴
//     })
//    .catch(function(error) {
//  실패하면 catch 들어옴
// })
import http from "../../http-common";

// 자바스크립트 class
class ConsultDataService {
  // 회원 전체 목록 조회 메소드
  // axios -> spring 데이터 요청 -> spring -> db -> 결과 반환

  // 모든 신청 조회
  getConsultAll(params) {
    return http.get("/consults", {
      params,
    });
  }
  // id로 신청 조회하는 메소드
  getConsult(id) {
    return http.get(`/consults/${id}`);
  }
  // 신청 데이터 추가 메소드(insert 문 호출)
  createConsult(data) {
    return http.post("/consults", data);
  }
  // 신청 데이터 수정 메소드(update 문 호출)
  updateConsult(id, data) {
    return http.put(`/consults/${id}`, data);
  }

  // 신청 데이터 삭제 메소드(update 문 호출)
  deleteConsult(id) {
    return http.put(`/consults/deletion/${id}`);
  }

  // 컨설턴트가 전문 태그(분야로 바뀜) 입력
  selectTag(id, data) {
    return http.post(`/match/selectTag/${id}`, data);
  }

  // 컨설턴트가 자신의 전문 태그(분야로 바뀜) 조회
  getTag(id) {
    return http.get(`/match/getTag/${id}`);
  }
  //--------------------------------------------------------------------

  // 모든 일지 조회
  getJournalAll(params) {
    return http.get("/journals", {
      params,
    });
  }
  // id로 일지 조회하는 메소드
  getJournal(id) {
    return http.get(`/journals/${id}`);
  }
  // 일지 데이터 추가 메소드(insert 문 호출)
  createJournal(data) {
    return http.post("/journals", data);
  }
  // 일지 데이터 수정 메소드(update 문 호출)
  updateJournal(id, data) {
    return http.put(`/journals/${id}`, data);
  }
  // 일지 데이터 삭제 메소드(update 문 호출)
  deleteJournal(id) {
    return http.put(`/journals/deletion/${id}`);
  }

  //--------------------------------------------------------------------

  // 모든 후기 조회
  getReviewAll(params) {
    return http.get("/reviews", {
      params,
    });
  }
  // id로 후기 조회하는 메소드
  getReview(id) {
    return http.get(`/reviews/${id}`);
  }
  // 후기 데이터 추가 메소드(insert 문 호출)
  createReview(data) {
    return http.post("/reviews", data);
  }
  // 후기 데이터 수정 메소드(update 문 호출)
  updateReview(id, data) {
    return http.put(`/reviews/${id}`, data);
  }
  // 후기 데이터 삭제 메소드(update 문 호출)
  deleteReview(id) {
    return http.put(`/reviews/deletion/${id}`);
  }
}
// export : 모듈을 다른 자바스크립트 파일에서 참조함
// new 모듈명 : class 객체생성을 위해 new 사용함
export default new ConsultDataService();

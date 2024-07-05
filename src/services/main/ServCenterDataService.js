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
class ServCenterDataService {
  // customers 전체 목록 조회 메소드
  // axios -> spring 데이터 요청 -> spring -> db -> 결과 반환
  // 모든 회원 조회
  getFAQAll() {
    return http.get("/faq");
  }
  // id로 회원 조회하는 메소드
  getFAQ(id) {
    return http.get(`/faq/${id}`);
  }
  // customer 데이터 추가 메소드(insert 문 호출)
  createFAQ(data) {
    return http.post("/faq", data);
  }
  // customer 데이터 수정 메소드(update 문 호출)
  updateFAQ(id, data) {
    return http.put(`/faq/${id}/put`, data);
  }
  // customer 데이터 삭제 메소드(update 문 호출)
  deleteFAQ(id) {
    return http.put(`/faq/${id}/delete`);
  }

  //----------------------------------------------------------------------------

  getNoticeAll() {
    return http.get("/notices/");
  }
  // id로 회원 조회하는 메소드
  getNotice(id) {
    return http.get(`/notices/${id}`);
  }
  // customer 데이터 추가 메소드(insert 문 호출)
  createNotice(data) {
    return http.post("/notices", data);
  }
  // customer 데이터 수정 메소드(update 문 호출)
  updateNotice(id, data) {
    return http.put(`/notices/${id}`, data);
  }
  // customer 데이터 삭제 메소드(update 문 호출)
  deleteNotice(id) {
    return http.put(`/notices/deletion/${id}`);
  }

  //----------------------------------------------------------------------------

  getQnAAll() {
    return http.get("/qna");
  }

  // 마이페이지에 내 정보와 내가 쓴 qna글 조인해서 가져오기
  getUsrJoin(id) {
    return http.get(`/qna/getJoin/${id}`);
  }

  getFile(filename) {
    return http.get(`/qna/download/${filename}`);
  }
  // id로 회원 조회하는 메소드
  getQnA(id) {
    return http.get(`/qna/${id}`);
  }
  // customer 데이터 추가 메소드(insert 문 호출)
  createQnA(id, data) {
    return http.post(`/qna/${id}`, data);
  }
  // customer 데이터 수정 메소드(update 문 호출)
  updateQnA(id, data) {
    return http.patch(`/qna/${id}/update`, data);
  }
  // customer 데이터 삭제 메소드(update 문 호출)
  deleteQnA(id) {
    return http.patch(`/qna/${id}/delete`);
  }
}
// export : 모듈을 다른 자바스크립트 파일에서 참조함
// new 모듈명 : class 객체생성을 위해 new 사용함
export default new ServCenterDataService();

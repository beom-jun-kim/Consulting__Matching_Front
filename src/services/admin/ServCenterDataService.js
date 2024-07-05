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
class FAQDataService {
  // axios -> spring 데이터 요청 -> spring -> db -> 결과 반환
  // faq전체 조회
  getFaqAll() {
    return http.get("admin/faq");
  }
  // id로 faq 조회하는 메소드
  getFaqBy(id) {
    return http.get(`admin/faq/${id}`);
  }
  // faq 데이터 추가 메소드(insert 문 호출)
  createFaq(data) {
    return http.post("admin/faq", data);
  }
  // faq 데이터 수정 메소드(update 문 호출)
  updateFaq(id, data) {
    return http.put(`admin/faq/${id}/put`, data);
  }
  // faq 데이터 삭제 메소드(update 문 호출)
  deleteFaq(id) {
    return http.put(`admin/faq/${id}/delete`);
  }

  //----------------------------------------------------------------------------

  getNoticeAll() {
    return http.get("admin/notice");
  }
  // id로 회원 조회하는 메소드
  getNotice(id) {
    return http.get(`admin/notice/${id}`);
  }
  // customer 데이터 추가 메소드(insert 문 호출)
  createNotice(formData) {
    return http.post("admin/notice/", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // multipart/form-data로 설정
      },
    });
  }
  // customer 데이터 수정 메소드(update 문 호출)
  updateNotice(id, formData) {
    return http.put(`admin/notice/${id}`, formData);
  }
  // customer 데이터 삭제 메소드(update 문 호출)
  deleteNotice(id) {
    return http.put(`admin/notice/delete/${id}`);
  }

  uploadNoticeImg(formData) {
    return http.post("admin/notice/img", formData);
  }

  //----------------------------------------------------------------------------

  getQnAAll() {
    return http.get("admin/qna");
  }
  // id로 회원 조회하는 메소드
  getQnA(id) {
    return http.get(`admin/qna/${id}`);
  }
  // customer 데이터 추가 메소드(insert 문 호출)
  createQnA(data) {
    return http.post("admin/qna", data);
  }
  // customer 데이터 수정 메소드(update 문 호출)
  updateQnA(id, data) {
    return http.patch(`admin/qna/${id}/answer`, data);
  }
  // customer 데이터 삭제 메소드(update 문 호출)
  deleteQnA(id) {
    return http.put(`admin/qna/delete/${id}`);
  }
}
// export : 모듈을 다른 자바스크립트 파일에서 참조함
// new 모듈명 : class 객체생성을 위해 new 사용함
export default new FAQDataService();

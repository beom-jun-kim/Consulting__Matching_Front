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
class TicketDataService {
  // 회원 전체 목록 조회 메소드
  // axios -> spring 데이터 요청 -> spring -> db -> 결과 반환

  // 모든 일반 회원 조회
  getPriceAll() {
    return http.get("/prices");
  }
  // 일반 회원 데이터 추가 메소드(insert 문 호출)
  createPrice(data) {
    return http.post("/prices", data);
  }
  // 일반 회원 데이터 수정 메소드(update 문 호출)
  updatePrice(id, data) {
    return http.put(`/prices/${id}`, data);
  }

  //--------------------------------------------------------------------

  // 모든 이용권 조회
  getTicketAll() {
    return http.get("/ticket");
  }
  // id로 컨설턴트 회원 조회하는 메소드
  getTicket(id) {
    return http.get(`/tickets/${id}`);
  }
  // 컨설턴트 회원 데이터 추가 메소드(insert 문 호출)
  createTicket(data) {
    return http.post("admin/ticket", data);
  }
  // 컨설턴트 회원 데이터 수정 메소드(update 문 호출)
  updateTicket(id, data) {
    return http.put(`/ticket/${id}`, data);
  }
  // 컨설턴트 회원 데이터 삭제 메소드(update 문 호출)
  deleteTicket(id) {
    return http.delete(`admin/delete/${id}`);
  }
}
// export : 모듈을 다른 자바스크립트 파일에서 참조함
// new 모듈명 : class 객체생성을 위해 new 사용함
export default new TicketDataService();

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
class CouponDataService {
  // 회원 전체 목록 조회 메소드
  // axios -> spring 데이터 요청 -> spring -> db -> 결과 반환

  // 티켓 전체 조회
  patchCoupon(id, data) {
    return http.patch(`/coupon/use/bmds/${id}`, data);
  }

  // 티켓 개별 조회
  getOneTicket(id) {
    return http.get(`/ticket/${id}`);
  }

  // 티켓 추가 삭제
  deleteTicket(id) {
    return http.delete(`/deleteTicket/${id}`);
  }

  // 티켓 사용
  postCoupon(id, data) {
    return http.post(`/coupon/use/basic/${id}`, data);
  }
  // 티켓 디테일 조회

  //
}
// export : 모듈을 다른 자바스크립트 파일에서 참조함
// new 모듈명 : class 객체생성을 위해 new 사용함
export default new CouponDataService();

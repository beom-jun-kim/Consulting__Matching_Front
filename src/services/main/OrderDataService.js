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
class OrderDataService {
  // 회원 전체 목록 조회 메소드
  // axios -> spring 데이터 요청 -> spring -> db -> 결과 반환

  // 결제 개인 조회
  getPayId(id) {
    return http.get(`/getPayId/${id}`);
  }

  // 결제 내역 삭제
  deletePay(id) {
    return http.delete(`/deletePayId/${id}`);
  }

  // test
  getPayToken() {
    return http.post("/auth/portOneTest");
  }

  getPayHistory(imid, token) {
    return http.get(`/auth/portOneTest/${imid}/${token}`);
  }

  canclePay(data) {
    return http.post("/auth/portOne/cancle", data);
  }

  getAllPay(impUids, merchantUids) {
    return http.get(`/auth/portOne/${impUids}/${merchantUids}`);
  }
}
// export : 모듈을 다른 자바스크립트 파일에서 참조함
// new 모듈명 : class 객체생성을 위해 new 사용함
export default new OrderDataService();

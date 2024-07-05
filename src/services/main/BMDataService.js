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
class BMDataService {
  // 회원 전체 목록 조회 메소드
  // axios -> spring 데이터 요청 -> spring -> db -> 결과 반환

  // id로 BM 조회하는 메소드
  getBM(id) {
    return http.get(`/bmds/detail/${id}`);
  }
  // 유저 개인 BM 조회하는 메소드
  getBmUser(userId) {
    return http.get(`/bmds/${userId}`);
  }
  // BM 데이터 추가 메소드(insert 문 호출)
  createBM(data) {
    return http.post("/bmds", data);
  }
  // BM 데이터 수정 메소드(update 문 호출)
  updateBM(id, data) {
    return http.patch(`/bmds/updateBm/${id}`, data);
  }

  // BM 데이터 삭제 메소드(update 문 호출)
  deleteBM(id) {
    return http.delete(`/bmds/deleteBm/${id}`);
  }

  //--------------------------------------------------------------------

  // 모든 BMSample 조회
  getBMSampleAll(params) {
    return http.get("/BMSamples", { params });
  }
  // id로 BMSample 조회하는 메소드
  getBMSample(id) {
    return http.get(`/BMSamples/${id}`);
  }
  // BMSample 데이터 추가 메소드(insert 문 호출)
  createBMSample(data) {
    return http.post("/BMSamples", data);
  }
  // BMSample 데이터 수정 메소드(update 문 호출)
  updateBMSample(id, data) {
    return http.put(`/BMSamples/${id}`, data);
  }
  // BMSample 데이터 삭제 메소드(update 문 호출)
  deleteBMSample(id) {
    return http.put(`/BMSamples/deletion/${id}`);
  }
}
// export : 모듈을 다른 자바스크립트 파일에서 참조함
// new 모듈명 : class 객체생성을 위해 new 사용함
export default new BMDataService();

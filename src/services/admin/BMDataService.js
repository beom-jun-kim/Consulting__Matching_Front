import http from "../../http-common";
// 자바스크립트 class
class BMDataService {
  // 모든 BM 조회
  getBMAll() {
    return http.get("/admin/user/get/BMs");
  }
  // id로 BM 조회하는 메소드
  getBM(id) {
    return http.get(`/BMs/${id}`);
  }
  // BM 데이터 추가 메소드(insert 문 호출)
  createBM(data) {
    return http.post("/BMs", data);
  }
  // BM 데이터 수정 메소드(update 문 호출)
  updateBM(id, data) {
    return http.put(`/BMs/${id}`, data);
  }

  // BM 데이터 삭제 메소드(update 문 호출)
  deleteBM(id) {
    return http.put(`/BMs/deletion/${id}`);
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

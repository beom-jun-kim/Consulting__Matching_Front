import http from "../../http-auth";
class UserDataService {
  // 이메일 찾기
  findByEmail(name, phoneNum) {
    return http.get(`/findEmail?name=${name}&phoneNum=${phoneNum}`);
  }
  // 비밀번호 찾기
  findByPass(name, email, phoneNum) {
    return http.get(
      `/findPassword?name=${name}&email=${email}&phoneNum=${phoneNum}`
    );
  }
  // 모든 일반 회원 조회
  getUsrAll(params) {
    return http.get("/users", { params });
  }
  // id로 일반 회원 조회하는 메소드
  getUsr(id) {
    return http.get(`/${id}`);
  }

  getByIdForName(id) {
    return http.get(`/name/${id}`);
  }

  // 일반유저가 컨설턴트가 되려고 할 때 이력서 업로드하는 메소드
  uploadResume(id, formData) {
    return http.post(`/upload/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // 반드시 설정해야 함
      },
    });
  }

  confirmEmail(email, code) {
    return http.get(`/confirm?email=${email}&code=${code}`);
  }
  confirmationCode(email, code) {
    return http.get(`/confirm/${email}/${code}`);
  }
  // 일반 회원 데이터 추가 메소드(insert 문 호출)
  createUser(data) {
    return http.post("/signup", data);
  }
  // 일반 회원 데이터 수정 메소드(update 문 호출)
  updateUsr(id, data) {
    return http.put(`/${id}/put`, data);
  }

  // 일반 회원 데이터 삭제 메소드(update 문 호출)
  deleteUsr(id) {
    return http.put(`/users/deletion/${id}`);
  }
  updateGroupCode(id, data) {
    return http.post(`/groupCode/${id}`, data);
  }
  // 그룹코드 업데이트

  //--------------------------------------------------------------------

  // 모든 컨설턴트 회원 조회
  getConsultantAll(params) {
    return http.get("/consultants", { params });
  }
  // id로 컨설턴트 회원 조회하는 메소드
  getConsultant(id) {
    return http.get(`/consultants/${id}`);
  }
  // 컨설턴트 회원 데이터 추가 메소드(insert 문 호출)
  createConsultant(data) {
    return http.post("/consultants", data);
  }
  // 컨설턴트 회원 데이터 수정 메소드(update 문 호출)
  updateConsultant(id, data) {
    return http.put(`/consultants/${id}`, data);
  }
  // 컨설턴트 회원 데이터 삭제 메소드(update 문 호출)
  deleteConsultant(id) {
    return http.put(`/consultants/deletion/${id}`);
  }

  // todo:------------------------------------------------
  // 결제내역 조회
  getByIdAllPay(id) {
    return http.get(`/portOne/getAll/${id}`);
  }
  // id로 컨설턴트 회원 조회하는 메소드
  getByIdPay(id) {
    return http.get(`/payment/detail/${id}`);
  }
  // 컨설턴트 회원 데이터 추가 메소드(insert 문 호출)
  createPay(data) {
    return http.post("/payment", data);
  }
  // 컨설턴트 회원 데이터 수정 메소드(update 문 호출)
  updatePay(id, data) {
    return http.patch(`/payment/${id}`, data);
  }

  // 컨설턴트 회원 데이터 삭제 메소드(update 문 호출)
  deletePay(id) {
    return http.delete(`/payment/${id}`);
  }

  // 슈퍼바이저가 멘티리스트 조회
  menteeListForSupervisor(data) {
    return http.post(`/menteeListForSupervisor`, data);
  }

  // 슈퍼바이저가 멘토리스트 조회
  mentoListForSupervisor(data) {
    return http.post(`/mentoListForSupervisor`, data);
  }

  // 비밀번호초기화
  initPassword(data) {
    return http.post(`/initPassword`, data);
  }

  // 사용여부
  updateUseYn(data) {
    return http.post(`/updateUseYn`, data);
  }
}
export default new UserDataService();

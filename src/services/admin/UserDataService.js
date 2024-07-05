import http from "../../http-common";

class UserDataService {
  // 슈퍼바이저 목록 조회
  supervisorListByAdmin(data) {
    console.log(data);
    return http.post(`/admin/supervisorListByAdmin`, data);
  }

  // 슈퍼바이저 목록 조회
  supervisor(data) {
    return http.post(`/admin/supervisor`, data);
  }

  // 슈퍼바이저 추가
  insertSupervisor(data) {
    return http.post("/admin/insertSupervisor", data);
  }

  // 슈퍼바이저 수정
  updateSupervisor(data) {
    return http.post("/admin/updateSupervisor", data);
  }

  // 슈퍼바이저 삭제
  deleteSupervisor(data) {
    return http.post("/admin/deleteSupervisor", data);
  }

  // Role의 값에 따라 다른 회원 조회(admin)
  getUserListByAdmin(id, data) {
    return http.get(
      `/match/getUserListByAdmin/${id}/${data.page}/${data.pageSize}${data.role}`
    );
  }
  // 매칭 정보 조회(admin)
  getAllMatchAdmin(data) {
    return http.get(
      `/match/getAllMatchAdmin/${data.id}/${data.page}/${data.pageSize}`
    );
  }




  // 유저 생성(admin)
  userInsert(data) {
    return http.post("/admin/userInsert", data);
  }
  // 유저 정보 조회(admin)
  getUserDetailByAdmin(id, userId) {
    return http.get(`/match/getUserDetailByAdmin/${id}/${userId}`);
  }
  // 유저 정보 수정(admin)
  updateById(id, data) {
    return http.put(`/admin/user/update/${id}`, data);
  }
  // 유저 정보 삭제(admin)
  deleteUser(id) {
    return http.delete(`/match/deleteUser/${id}`);
  }
  //--------------------------------------------------------------------
  // Role의 값에 따라 다른 회원 조회(supervisor)
  getUserListBySupervisor(id, data) {
    return http.get(
      `/match/getUserListBySupervisor/${id}/${data.page}/${data.pageSize}${data.role}`
    );
  }
  // 매칭 정보 조회(supervisor)
  getAllMatchSupervisor(data) {
    return http.get(
      `/match/getAllMatchSupervisor/${data.id}/${data.page}/${data.pageSize}`
    );
  }
  // 매칭정보 단일 조회(supervisor)
  getMatchDetailBySupervisor(data) {
    return http.get(
      `/match/getMatchDetailBySupervisor/${data.supervisorId}/${data.matchId}`
    );
  }

  // 유저 정보 조회(supervisor)
  getUserDetailBySuperVisor(id, userId) {
    return http.get(`/match/getUserDetailBySuperVisor/${id}/${userId}`);
  }

  // 소속그룹 전체 bmds 리스트 조회(supervisor)
  getSupervisorList(data) {
    return http.get(
      `/buildup/list/supervisor/${data.id}/${data.page}/${data.pageSize}`
    );
  }
  //--------------------------------------------------------------------
  // 관리자 정보 조회
  getUserById(id) {
    return http.get(`/admin/user/${id}`);
  }
  // 관리자 화면에서 이력서를 다운로드
  downloadResume(id) {
    return http.get(`admin/user/download/${id}`, {
      responseType: "blob", // 응답 데이터를 Blob 형식으로 받음
    });
  }
}
// export : 모듈을 다른 자바스크립트 파일에서 참조함
// new 모듈명 : class 객체생성을 위해 new 사용함
export default new UserDataService();

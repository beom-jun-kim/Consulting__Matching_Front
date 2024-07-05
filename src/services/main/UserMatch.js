import http from "../../http-common";

class MatchDateService {
  // 매칭 정보 조회 (유저가)
  getMatch(id, page, pageSize) {
    return http.get(`/match/getMatch/${id}/${page}/${pageSize}`);
  }

  getConsultantMatch(id, page, pageSize) {
    return http.get(`/match/getConsultantMatch/${id}/${page}/${pageSize}`);
  }

  // 매칭 수락
  acceptMatch(data) {
    return http.post(`/match/acceptMatch`, data);
  }

  // 컨설턴트가 자신과 매칭된 유저 bmds 조회
  getConsultantMatchBmds(id) {
    return http.get(`/match/getConsultantMatchBmds/${id}`);
  }

  completeMatch(data) {
    return http.post(`/match/completeMatch`, data);
  }

  // 매칭 거절
  rejectMatch(data) {
    return http.post(`/match/rejectMatch`, data);
  }

  // 컨설턴트가 자신의 컨설팅 일지 조회
  getConsultingJournal(id, currentPage, page) {
    return http.get(`/match/getConsultingJournal/${id}/${currentPage}/${page}`);
  }

  // 컨설턴트가 자신의 매칭 정보에서 유저 단일 정보 조회
  getConsultantMatchUser(id) {
    return http.get(`/match/getConsultantMatchUser/${id}`);
  }

  // 컨설턴트가 자신의 매칭 상대에게 컨설팅 일지 작성
  async createConsultingJournal(id, formData) {
    return await http.post(`/match/create/ConsultingJournal/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  // 일지 목록 조회
  loadJournalList(data) {
    return http.post(`/match/loadJournalList`, data);
  }

  // 컨설턴트가 자신의 컨설팅 일지 단일 조회
  getConsultingJournalById(id, journalId) {
    return http.get(`/match/getConsultingJournal/${id}/${journalId}`);
  }

  // 컨설턴트가 자신의 컨설팅 일지 단일 조회
  getConsultingJournalDetail(journalId) {
    return http.get(`/match/getJournalDetail/${journalId}`);
  }

  // 컨설턴트가 자신의 컨설팅 일지 수정
  updateConsultingJournal(id, formData) {
    return http.post(`/match/updateConsultingJournal/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  // 유저가 전문 태그(분야로 바뀜) 필터링하여 컨설턴트 조회
  getConsultantByTag(data) {
    return http.get(
      `/match/getConsultantByTag/${data.userId}/${data.page}/${data.pageSize}?tags=${data.tags}`
    );
  }

  // 유저가 자신의 bmds에 작성된 멘토링 일지 조회
  getMentoringJournal(id, currentPage, page) {
    return http.get(`/match/getMentoringJournal/${id}/${currentPage}/${page}`);
  }

  // 컨설턴트가 특정 유저에게 작성한 일지 리스트 조회
  getConsultant(id) {
    return http.get(`/match/getConsultant/${id}`);
  }

  // 컨설턴트를 제외한 유저들이 컨설턴트 후기 조회
  getReview(currentUserId, consultantId, currentPage, page) {
    return http.get(
      `/match/getReview/${currentUserId}/${consultantId}/${currentPage}/${page}`
    );
  }

  // 유저가 컨설턴트에게 매칭 요청
  requestMatch(data) {
    return http.post(`/match/requestMatch`, data);
  }

  // 유저가 컨설턴트에게 매칭 요청 취소
  cancelMatch(data) {
    return http.delete(
      `/match/cancelMatch/${data.id}/${data.generalUserId}/${data.consultantUserId}/${data.buildId}`
    );
  }

  // 컨설턴트가 일지 작성시에 매칭된 bmds정보 조회
  getConsultantMatchBmdsForJournal(id) {
    return http.get(`/match/getConsultantMatchBmdsForJournal/${id}`);
  }

  // 컨설턴트가 일지작성시에 매칭된 bmds정보 단일 조회
  getConsultantMatchBmdsForJournalOne(id, buildId) {
    return http.get(
      `/match/getConsultantMatchBmdsForJournalOne/${id}/${buildId}`
    );
  }

  // 일반 유저가 매칭된 컨설턴트에게 후기 작성
  createReview(data) {
    return http.post(`/match/createReview`, data);
  }

  // 컨설팅 완료 (컨설턴트가 유저에게)
  completeConsulting(data) {
    return http.post(`/match/completeConsulting`, data);
  }
  // 컨설턴트가 일지를 작성할 때 기본정보 조회
  getConsultGeneralInfo(appId) {
    return http.get(`/match/getConsultGeneralInfo/${appId}`);
  }

  // BMDS 매뉴얼 업로드 후 다운로드
  createManual(id, formData) {
    return http.post(`/match/createManual/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  // BMDS 매뉴얼 조회
  getManual(id) {
    return http.get(`/match/getManual/${id}`);
  }

  getMentoring(data) {
    return http.post(`/mentoringapp/mentoringGet`, data);
  }

  // gunu 2024.03.21
  // 멘토링 신청서 생성
  createMenoringAppliction(data) {
    return http.post(`/mentoringapp/appCreate`, data);
  }

  // 멘토링 매칭리스트(멘트) 조회
  getMatchList(data) {
    return http.post(`/mentoringapp/acceptGet`, data);
  }

  // 멘토링 매칭리스트(멘트) 조회
  getAppList(data) {
    return http.post(`/mentoringapp/appList`, data);
  }

  // 신청서 조회
  application(data) {
    return http.post(`/mentoringapp/application`, data);
  }

  // 신청서 수정
  appUpdate(data) {
    return http.post(`/mentoringapp/appUpdate`, data);
  }

  // 멘티가 멘토링 수랑
  acceptPut(data) {
    return http.put(`/mentoringapp/acceptPut`, data);
  }

  // 멘토가 멘토링 종료
  mentoringComplete(data) {
    return http.post(`/mentoringapp/mentoringComplete`, data);
  }

  getApplication(data) {
    return http.post(`/mentoringapp/appGet`, data);
  }

  // 멘토정보 조회
  loadMentoInfo(data) {
    return http.post(`/mentoringapp/loadMentoInfo`, data);
  }

  // 멘티정보 조회
  loadMenteeInfo(data) {
    return http.post(`/mentoringapp/loadMenteeInfo`, data);
  }

  // 슈퍼바이저의 멘토링내역 조회
  consultingListForSupervisor(data) {
    console.log(data);
    return http.post(`/match/consultingListForSupervisor`, data);
  }

  putApplication(data) {
    return http.put(`/mentoringapp/appPut`, data);
  }

  putApplicationCancel(data) {
    return http.put(`/mentoringapp/appCancelPut`, data);
  }

  reviewInfo(data) {
    return http.post(`/mentoringapp/reviewInfo`, data);
  }
  updateReview(data) {
    return http.post(`/mentoringapp/updateReview`, data);
  }

  
}
export default new MatchDateService();

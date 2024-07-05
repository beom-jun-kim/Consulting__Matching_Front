import http from "../../http-common";

class ConsultDataService {
  // 수퍼바이저가 컨설팅 일지 개별 조회
  getConsultingJournalBySupervisor(data) {
    return http.get(
      `/match/getConsultingJournalBySupervisor/${data.id}/${data.currentPage}/${data.page}`
    );
  }

  // 컨설팅 일지 단일 조회
  getConsultingJournalDetail(journalId) {
    return http.get(`/match/getJournalDetail/${journalId}`);
  }

  // 컨설턴트가 작성한 일지 리스트 조회
  getConsultingJournal(data) {
    return http.get(
      `/match/getConsultingJournal/${data.id}/${data.currentPage}/${data.page}`
    );
  }
  // 컨설턴트가 특정 유저에게 작성한 일지 리스트 조회
  getConsultantJournalList(data) {
    return http.get(
      `/match/getConsultantJournalList/${data.consultantId}/${data.userId}/${data.currentPage}/${data.page}`
    );
  }
}
export default new ConsultDataService();

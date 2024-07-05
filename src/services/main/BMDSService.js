import http from "../../http-common";

class BMDSService {
  // BM 데이터 추가 또는 수정 메소드
  saveBetaPpt3(id, data) {
    return http.post(`/bmds/create/${id}`, data);
  }

  // id로 BM 조회하는 메소드
  getBetaPpt3(id) {
    return http.get(`/bmds/all/${id}`);
  }

  // 선택한 BM 내용 조회하는 메소드
  getBmChoice(id) {
    return http.get(`/bmds/${id}`);
  }

  // BM 데이터 삭제 메소드(update 문 호출)
  deleteBM(id) {
    return http.delete(`/bmds/delete/${id}`);
  }

  //--------------------------------------------------------------------

  // whySection Create
  createWhy1com(id, data) {
    return http.post(`/bmds/why/create/${id}`, data);
  }

  saveMarketTrends(id, data) {
    return http.post(`/bmds/market-trend-issue/save/${id}`, data);
  }

  saveRegulations(id, data) {
    return http.post(`/bmds/regulations/save/${id}`, data);
  }

  saveProblemDefinition(id, data) {
    return http.post(`/bmds/problem-definition/save/${id}`, data);
  }
  saveProblemExploration(id, data) {
    return http.post(`/bmds/customer-issues/save/${id}`, data);
  }

  saveCompetitor(id, data) {
    return http.post(`/bmds/competitor/save/${id}`, data);
  }

  getWhy1com(id) {
    return http.get(`/bmds/why/market/1/${id}`);
  }

  getWhy2com(id) {
    return http.get(`/bmds/why/market/2/${id}`);
  }

  getMarketTrends(id) {
    return http.get(`/bmds/why/market/3/${id}`);
  }

  getTechTrends(id) {
    return http.get(`/bmds/why/market/4/${id}`);
  }

  getRegulations(id) {
    return http.get(`/bmds/why/market/5/${id}`);
  }

  getValueChain(id) {
    return http.get(`/bmds/why/keyPartners/${id}`);
  }

  getPersona(id) {
    return http.get(`/bmds/why/customerDefinition/${id}`);
  }

  getCustomerIssues(id) {
    return http.get(`/bmds/why/customerDefinition/2/${id}`);
  }

  removeCustomerIssues(id) {
    return http.delete(`/bmds/customer-issues/delete/${id}`);
  }

  getCompetitor(id) {
    return http.get(`/bmds/why/competitor/${id}`);
  }

  getCriteria(id) {
    return http.get(`/bmds/why/criteria/${id}`);
  }
}

export default new BMDSService();

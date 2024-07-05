import http from "../../http-common";

class BetaService {
  // 모든 BM 조회
  getAllBetaBmds() {
    return http.get("/admin/beta-bmds/all");
  }
}
export default new BetaService();

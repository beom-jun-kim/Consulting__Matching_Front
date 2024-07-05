import http from "../../http-common";

class BetaBmdsService {
  getUserIdByBetaId(id) {
    return http.get(`/beta-bmds/user/${id}`);
  }
  getBetaBmdsByUserAll(id) {
    return http.get(`/beta-bmds/get/${id}`);
  }

  createBetaBmds(id, data) {
    return http.post(`/beta-bmds/create/${id}`, data);
  }

  updateBetaBmds(id, data) {
    return http.put(`/beta-bmds/update/${id}`, data);
  }
  getOneBetaBmds(id) {
    return http.get(`/beta-bmds/getOne/${id}`);
  }
  deleteBM(id) {
    return http.delete(`/beta-bmds/delete/${id}`);
  }

  // 모달 페이지 부분 start
  getBetaPpt3(id) {
    return http.get(`/beta-bmds/ppt/3/get/${id}`);
  }

  async saveBetaPpt3(id, data) {
    return http.post(`/beta-bmds/ppt/3/save/${id}`, data);
  }

  getBetaPpt4(id) {
    return http.get(`/beta-bmds/ppt/4/get/${id}`);
  }

  async saveBetaPpt4(id, data) {
    return http.post(`/beta-bmds/ppt/4/save/${id}`, data);
  }

  getBetaPpt5(id) {
    return http.get(`/beta-bmds/ppt/5/get/${id}`);
  }

  async saveBetaPpt5(id, data) {
    return http.post(`/beta-bmds/ppt/5/save/${id}`, data);
  }

  getBetaPpt7(id) {
    return http.get(`/beta-bmds/ppt/7/get/${id}`);
  }

  async saveBetaPpt7(id, data) {
    return http.post(`/beta-bmds/ppt/7/save/${id}`, data);
  }
  getBetaPpt8(id) {
    return http.get(`/beta-bmds/ppt/8/get/${id}`);
  }

  async saveBetaPpt8(id, data) {
    return http.post(`/beta-bmds/ppt/8/save/${id}`, data);
  }
  getBetaPpt9(id) {
    return http.get(`/beta-bmds/ppt/9/get/${id}`);
  }

  async saveBetaPpt9(id, data) {
    return http.post(`/beta-bmds/ppt/9/save/${id}`, data);
  }
  getBetaPpt10(id) {
    return http.get(`/beta-bmds/ppt/10/get/${id}`);
  }

  async saveBetaPpt10(id, data) {
    return http.post(`/beta-bmds/ppt/10/save/${id}`, data);
  }
  getBetaPpt12(id) {
    return http.get(`/beta-bmds/ppt/12/get/${id}`);
  }

  async saveBetaPpt12(id, data) {
    return http.post(`/beta-bmds/ppt/12/save/${id}`, data);
  }
  getBetaPpt13(id) {
    return http.get(`/beta-bmds/ppt/13/get/${id}`);
  }

  async saveBetaPpt13(id, data) {
    return http.post(`/beta-bmds/ppt/13/save/${id}`, data);
  }
  getBetaPpt14(id) {
    return http.get(`/beta-bmds/ppt/14/get/${id}`);
  }

  async saveBetaPpt14(id, data) {
    return http.post(`/beta-bmds/ppt/14/save/${id}`, data);
  }
  getBetaPpt15(id) {
    return http.get(`/beta-bmds/ppt/15/get/${id}`);
  }

  async saveBetaPpt15(id, data) {
    return http.post(`/beta-bmds/ppt/15/save/${id}`, data);
  }
  getBetaPpt16(id) {
    return http.get(`/beta-bmds/ppt/16/get/${id}`);
  }

  async saveBetaPpt16(id, data) {
    return http.post(`/beta-bmds/ppt/16/save/${id}`, data);
  }
  getBetaPpt18(id) {
    return http.get(`/beta-bmds/ppt/18/get/${id}`);
  }

  async saveBetaPpt18(id, data) {
    return http.post(`/beta-bmds/ppt/18/save/${id}`, data);
  }
  getBetaPpt19(id) {
    return http.get(`/beta-bmds/ppt/19/get/${id}`);
  }

  async saveBetaPpt19(id, data) {
    return http.post(`/beta-bmds/ppt/19/save/${id}`, data, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
    });
  }
  getBetaPpt20(id) {
    return http.get(`/beta-bmds/ppt/20/get/${id}`);
  }

  async saveBetaPpt20(id, data) {
    return http.post(`/beta-bmds/ppt/20/save/${id}`, data);
  }
  getBetaPpt21(id) {
    return http.get(`/beta-bmds/ppt/21/get/${id}`);
  }

  async saveBetaPpt21(id, data) {
    return http.post(`/beta-bmds/ppt/21/save/${id}`, data);
  }
  getBetaPpt23(id) {
    return http.get(`/beta-bmds/ppt/23/get/${id}`);
  }

  async saveBetaPpt23(id, data) {
    return http.post(`/beta-bmds/ppt/23/save/${id}`, data);
  }
  getBetaPpt24(id) {
    return http.get(`/beta-bmds/ppt/24/get/${id}`);
  }

  async saveBetaPpt24(id, data) {
    return http.post(`/beta-bmds/ppt/24/save/${id}`, data);
  }

  getBetaPpt25(id) {
    return http.get(`/beta-bmds/ppt/25/get/${id}`);
  }

  async saveBetaPpt25(id, data) {
    return http.post(`/beta-bmds/ppt/25/save/${id}`, data);
  }
  getBetaPpt27(id) {
    return http.get(`/beta-bmds/ppt/27/get/${id}`);
  }

  async saveBetaPpt27(id, data) {
    return http.post(`/beta-bmds/ppt/27/save/${id}`, data);
  }
  getBetaPpt28(id) {
    return http.get(`/beta-bmds/ppt/28/get/${id}`);
  }

  async saveBetaPpt28(id, data) {
    return http.post(`/beta-bmds/ppt/28/save/${id}`, data);
  }
  getBetaPpt29(id) {
    return http.get(`/beta-bmds/ppt/29/get/${id}`);
  }

  async saveBetaPpt29(id, data) {
    return http.post(`/beta-bmds/ppt/29/save/${id}`, data);
  }
  getBetaPpt31(id) {
    return http.get(`/beta-bmds/ppt/31/get/${id}`);
  }

  async saveBetaPpt31(id, data) {
    return http.post(`/beta-bmds/ppt/31/save/${id}`, data);
  }
  getBetaPpt32(id) {
    return http.get(`/beta-bmds/ppt/32/get/${id}`);
  }

  async saveBetaPpt32(id, data) {
    return http.post(`/beta-bmds/ppt/32/save/${id}`, data);
  }
  getBetaPpt33(id) {
    return http.get(`/beta-bmds/ppt/33/get/${id}`);
  }

  async saveBetaPpt33(id, data) {
    return http.post(`/beta-bmds/ppt/33/save/${id}`, data);
  }

  //리뷰 save
  async saveReview(id, data) {
    return http.post(`/beta-bmds/review/${id}`, data);
  }
  //리뷰 개별 조회
  getReview(id) {
    return http.get(`/beta-bmds/review/${id}`);
  }

  // 모달 페이지 부분 end
}

export default new BetaBmdsService();

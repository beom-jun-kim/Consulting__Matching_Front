import http from "../../http-common";

class BuildupBmdsService {
  // bmds crud start
  async createBuildUpBmds(id, data) {
    return await http.post(`/buildup/bmds/create/${id}`, data);
  }

  async getBuildUpBmds(id) {
    return await http.get(`/buildup/bmds/get/${id}`);
  }

  async getBuildUpBmdsById(id) {
    return await http.get(`/buildup/bmds/getById/${id}`);
  }

  async updateBuildUpBmds(id, data) {
    return await http.put(`/buildup/bmds/update/${id}`, data);
  }

  async deleteBuildUpBmds(id) {
    return await http.delete(`/buildup/bmds/delete/${id}`);
  }

  // bmds crud end
  // ====================================================================================================
  // Get part start

  async getBuildStep11(id) {
    return await http.get(`/buildup/bmds/11/get/${id}`);
  }

  async getBuildStep12(id) {
    return await http.get(`/buildup/bmds/12/get/${id}`);
  }

  async getBuildStep13(id) {
    return await http.get(`/buildup/bmds/13/get/${id}`);
  }

  async getBuildStep14(id) {
    return await http.get(`/buildup/bmds/14/get/${id}`);
  }

  async getBuildStep15(id) {
    return await http.get(`/buildup/bmds/15/get/${id}`);
  }

  async getBuildStep21(id) {
    return await http.get(`/buildup/bmds/21/get/${id}`);
  }

  async getBuildStep22(id) {
    return await http.get(`/buildup/bmds/22/get/${id}`);
  }

  async getBuildStep23(id) {
    return await http.get(`/buildup/bmds/23/get/${id}`);
  }

  async getBuildStep24(id) {
    return await http.get(`/buildup/bmds/24/get/${id}`);
  }

  async getBuildStep25(id) {
    return await http.get(`/buildup/bmds/25/get/${id}`);
  }

  async getBuildStep31(id) {
    return await http.get(`/buildup/bmds/31/get/${id}`);
  }

  async getBuildStep32(id) {
    return await http.get(`/buildup/bmds/32/get/${id}`);
  }

  async getBuildStep33(id) {
    return await http.get(`/buildup/bmds/33/get/${id}`);
  }

  async getBuildStep34(id) {
    return await http.get(`/buildup/bmds/34/get/${id}`);
  }

  async getBuildStep34_2(id) {
    return await http.get(`/buildup/bmds/34_2/get/${id}`);
  }

  async getBuildStep35(id) {
    return await http.get(`/buildup/bmds/35/get/${id}`);
  }

  async getBuildStep35One(id) {
    return await http.get(`/buildup/bmds/35one/get/${id}`);
  }

  async getBuildStep36(id) {
    return await http.get(`/buildup/bmds/36/get/${id}`);
  }

  async getBuildStep37(id) {
    return await http.get(`/buildup/bmds/37/get/${id}`);
  }

  async getBuildStep41(id) {
    return await http.get(`/buildup/bmds/41/get/${id}`);
  }

  async getBuildStep42(id) {
    return await http.get(`/buildup/bmds/42/get/${id}`);
  }

  async getBuildStep43(id) {
    return await http.get(`/buildup/bmds/43/get/${id}`);
  }

  async getBuildStep44(id) {
    return await http.get(`/buildup/bmds/44/get/${id}`);
  }

  async getBuildStep51(id) {
    return await http.get(`/buildup/bmds/51/get/${id}`);
  }

  async getBuildStep52(id) {
    return await http.get(`/buildup/bmds/52/get/${id}`);
  }

  async getBuildStep53(id) {
    return await http.get(`/buildup/bmds/53/get/${id}`);
  }

  async getBuildStep54(id) {
    return await http.get(`/buildup/bmds/54/get/${id}`);
  }

  async getBuildStep55(id) {
    return await http.get(`/buildup/bmds/55/get/${id}`);
  }

  async getBuildStep56(id) {
    return await http.get(`/buildup/bmds/56/get/${id}`);
  }

  async getBuildStep57(id) {
    return await http.get(`/buildup/bmds/57/get/${id}`);
  }

  async getBuildStep58(id) {
    return await http.get(`/buildup/bmds/58/get/${id}`);
  }

  async getBuildStep59(id) {
    return await http.get(`/buildup/bmds/59/get/${id}`);
  }

  async getBuildStep60(id) {
    return await http.get(`/buildup/bmds/60/get/${id}`);
  }

  async getBuildStep61(id) {
    return await http.get(`/buildup/bmds/61/get/${id}`);
  }

  async getBuildStep62(id) {
    return await http.get(`/buildup/bmds/62/get/${id}`);
  }

  async getBuildStep63(id) {
    return await http.get(`/buildup/bmds/63/get/${id}`);
  }

  async getBuildStep71(id) {
    return await http.get(`/buildup/bmds/71/get/${id}`);
  }

  async getBuildStep72(id) {
    return await http.get(`/buildup/bmds/72/get/${id}`);
  }

  async getBuildStep73(id) {
    return await http.get(`/buildup/bmds/73/get/${id}`);
  }

  async getBuildStep74(id) {
    return await http.get(`/buildup/bmds/74/get/${id}`);
  }

  // Get part end
  // ====================================================================================================
  // Save part start

  async saveBuildStep11(id, data) {
    return await http.post(`/buildup/bmds/11/save/${id}`, data);
  }

  async saveBuildStep12(id, data) {
    return await http.post(`/buildup/bmds/12/save/${id}`, data);
  }

  async saveBuildStep13(id, data) {
    return await http.post(`/buildup/bmds/13/save/${id}`, data);
  }

  async saveBuildStep14(id, data) {
    return await http.post(`/buildup/bmds/14/save/${id}`, data);
  }

  async saveBuildStep15(id, data) {
    return await http.post(`/buildup/bmds/15/save/${id}`, data);
  }

  async saveBuildStep21(id, data) {
    return await http.post(`/buildup/bmds/21/save/${id}`, data);
  }

  async saveBuildStep22(id, data) {
    return await http.post(`/buildup/bmds/22/save/${id}`, data);
  }

  async saveBuildStep23(id, data) {
    return await http.post(`/buildup/bmds/23/save/${id}`, data);
  }

  async saveBuildStep24(id, data) {
    return await http.post(`/buildup/bmds/24/save/${id}`, data);
  }

  async saveBuildStep25(id, data) {
    return await http.post(`/buildup/bmds/25/save/${id}`, data);
  }

  async saveBuildStep31(id, data) {
    return await http.post(`/buildup/bmds/31/save/${id}`, data);
  }

  async saveBuildStep32(id, data) {
    return await http.post(`/buildup/bmds/32/save/${id}`, data);
  }

  async saveBuildStep33(id, data) {
    return await http.post(`/buildup/bmds/33/save/${id}`, data);
  }

  async saveBuildStep34(id, data) {
    return await http.post(`/buildup/bmds/34/save/${id}`, data);
  }

  async saveBuildStep34_2(id, data) {
    return await http.post(`/buildup/bmds/34_2/save/${id}`, data);
  }

  async saveBuildStep35(id, data) {
    return await http.post(`/buildup/bmds/35/save/${id}`, data);
  }

  async saveBuildStep35One(id, data) {
    return await http.post(`/buildup/bmds/35one/save/${id}`, data);
  }

  async saveBuildStep36(id, data) {
    return await http.post(`/buildup/bmds/36/save/${id}`, data);
  }

  async saveBuildStep37(id, data) {
    return await http.post(`/buildup/bmds/37/save/${id}`, data);
  }

  async savePromotion(id, data) {
    return await http.post(`/buildup/bmds/37/promotion/save/${id}`, data);
  }

  async saveBuildStep41(id, data) {
    return await http.post(`/buildup/bmds/41/save/${id}`, data);
  }
  async saveBuildStep42Memo(id, data) {
    return await http.post(`/buildup/bmds/42/memo/save/${id}`, data);
  }

  async saveBuildStep42(id, formData) {
    return await http.post(`/buildup/bmds/42/save/${id}`, formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async saveBuildStep43(id, data) {
    return await http.post(`/buildup/bmds/43/save/${id}`, data);
  }

  async saveBuildStep44(id, data) {
    return await http.post(`/buildup/bmds/44/save/${id}`, data);
  }

  async saveBuildStep51(id, data) {
    return await http.post(`/buildup/bmds/51/save/${id}`, data);
  }

  async saveBuildStep52(id, formData) {
    return await http.post(`/buildup/bmds/52/save/${id}`, formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
    });
  }
  async saveBuildStep52Memo(id, data) {
    return await http.post(`/buildup/bmds/52/memo/save/${id}`, data);
  }
  async saveBuildStep53(id, formData) {
    return await http.post(`/buildup/bmds/53/save/${id}`, formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
    });
  }
  async saveBuildStep53Memo(id, data) {
    return await http.post(`/buildup/bmds/53/memo/save/${id}`, data);
  }
  async saveBuildStep54(id, formData) {
    return await http.post(`/buildup/bmds/54/save/${id}`, formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
    });
  }
  async saveBuildStep54Memo(id, data) {
    return await http.post(`/buildup/bmds/54/memo/save/${id}`, data);
  }
  async saveBuildStep55(id, data) {
    return await http.post(`/buildup/bmds/55/save/${id}`, data);
  }

  async saveBuildStep56(id, data) {
    return await http.post(`/buildup/bmds/56/save/${id}`, data);
  }

  async saveBuildStep57(id, data) {
    return await http.post(`/buildup/bmds/57/save/${id}`, data);
  }

  async saveBuildStep58(id, data) {
    return await http.post(`/buildup/bmds/58/save/${id}`, data);
  }

  async saveBuildStep59(id, data) {
    return await http.post(`/buildup/bmds/59/save/${id}`, data);
  }

  async saveBuildStep60(id, formData) {
    return await http.post(`/buildup/bmds/60/save/${id}`, formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
    });
  }
  async saveBuildStep60Memo(id, data) {
    return await http.post(`/buildup/bmds/60/memo/save/${id}`, data);
  }
  async saveBuildStep61(id, data) {
    return await http.post(`/buildup/bmds/61/save/${id}`, data);
  }

  async saveBuildStep62(id, data) {
    return await http.post(`/buildup/bmds/62/save/${id}`, data);
  }

  async saveBuildStep62_1(id, formData) {
    return await http.post(`/buildup/bmds/62/1/save/${id}`, formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async saveBuildStep62_2(id, formData) {
    return await http.post(`/buildup/bmds/62/2/save/${id}`, formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async saveBuildStep62_3(id, formData) {
    return await http.post(`/buildup/bmds/62/3/save/${id}`, formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async saveBuildStep62_4(id, formData) {
    return await http.post(`/buildup/bmds/62/4/save/${id}`, formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async saveBuildStep62_5(id, formData) {
    return await http.post(`/buildup/bmds/62/5/save/${id}`, formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async saveBuildStep62_6(id, formData) {
    return await http.post(`/buildup/bmds/62/6/save/${id}`, formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async saveBuildStep62_7(id, formData) {
    return await http.post(`/buildup/bmds/62/7/save/${id}`, formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async saveBuildStep62_8(id, formData) {
    return await http.post(`/buildup/bmds/62/8/save/${id}`, formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async saveBuildStep63(id, data) {
    return await http.post(`/buildup/bmds/63/save/${id}`, data);
  }

  async saveBuildStep71(id, data) {
    return await http.post(`/buildup/bmds/71/save/${id}`, data);
  }

  async saveBuildStep72(id, data) {
    return await http.post(`/buildup/bmds/72/save/${id}`, data);
  }

  async saveBuildStep73(id, data) {
    return await http.post(`/buildup/bmds/73/save/${id}`, data);
  }

  async saveBuildStep74(id, data) {
    return await http.post(`/buildup/bmds/74/save/${id}`, data);
  }
  // Save part end

  async downloadFile(id) {
    return await http.get(`/buildup/bmds/download/${id}`);
  }

  //리뷰 save
  async saveReview(id, data) {
    return http.post(`/buildup/review/${id}`, data);
  }
  //리뷰 개별 조회
  getReview(id) {
    return http.get(`/buildup/review/${id}`);
  }
}

export default new BuildupBmdsService();

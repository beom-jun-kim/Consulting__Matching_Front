import http from "../../http-common";

class RoadmapService {
  // 어드민 페이지에서 사업공고 이미지 업로드
  multiImageUp(formData) {
    return http.post("/roadmap/multiImageUp", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
export default new RoadmapService();

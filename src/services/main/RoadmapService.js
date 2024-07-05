import http from "../../http-common";

class RoadmapService {
  getRoadmap(data) {
    console.log("🚀 ~ RoadmapService ~ getRoadmap ~ data:", data);

    return http.post("/roadmap/list", data);
  }
}
export default new RoadmapService();

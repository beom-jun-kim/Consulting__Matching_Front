import http from "../../http-common";

// 자바스크립트 class
class BootPayDataService {
  async saveBootpay(id, data) {
    return await http.post(`/bootpay/create/billingKey/${id}`, data);
  }
  async cancelReservation(data) {
    return await http.post("/bootpay/cancel/reservation", data);
  }
  async getReserveId(id) {
    return await http.get(`/bootpay/get/reserveId/${id}`);
  }
  async getPaymentById(id) {
    return await http.get(`/bootpay/get/payment/${id}`);
  }

  async onFreeTwoWeeks(id, data) {
    return await http.post(`/bootpay/onFreeTwoWeeks/${id}`, data);
  }

  // ============================= 포트원 관련 API =============================
  async payVerification(data) {
    return await http.post(`/portone/payVerification`, data);
  }

 

  async createPortone(id, data) {
    return await http.post(`/portone/createPortone/${id}`, data);

  }
}

export default new BootPayDataService();

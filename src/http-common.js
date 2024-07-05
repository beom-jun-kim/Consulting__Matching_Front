// import axios from "axios";

// // 토큰을 가져옵니다.
// const token = localStorage.getItem("user");

// export default axios.create({
//   // http://localhost:8000/api : 백엔드의 포트번호 지정
//   baseURL: "http://localhost:3000/api",
//   headers: {
//     "Content-type": "application/json",
//     Authorization: token ? `Bearer ${token}` : null,
//   },
// });

import axios from "axios";
// process.env.NODE_ENV는 환경을 나타내는 변수로, development 또는 production 값이 들어갑니다.
const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.VUE_APP_API_COMMON_URL_PROD
    : process.env.VUE_APP_API_COMMON_URL_LOCAL;

const service = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

service.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem("user");
    const userData = JSON.parse(user);

    if (userData && userData.accessToken) {
      // accessToken만을 헤더에 추가
      config.headers["Authorization"] = `Bearer ${userData.accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default service;

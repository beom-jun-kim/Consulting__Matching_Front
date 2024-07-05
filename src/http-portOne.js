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

export default axios.create({
  baseURL: "https://api.iamport.kr/payments",
  headers: {
    "Content-type": "application/json",
  },
});

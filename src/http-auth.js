import axios from "axios";

// process.env.NODE_ENV는 환경을 나타내는 변수로, development 또는 production 값이 들어갑니다.
const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.VUE_APP_API_BASE_URL_PROD
    : process.env.VUE_APP_API_BASE_URL_LOCAL;

export default axios.create({
  baseURL,
});

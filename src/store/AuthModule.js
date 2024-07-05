import AuthServiceMain from "@/services/main/auth/AuthService";
import AuthServiceAdmin from "@/services/admin/auth/AuthService";
import jwtDecode from "jwt-decode";
// 로컬저장소(크롬의 localstorage)에서 user의 정보를 받기
const user = JSON.parse(localStorage.getItem("user"));

// user 상태 정보를 설정
// 1) 로그인(loggedIn) 이 되어 있을 때 상태정보 : { loggedIn: true }
// 2) 로그인(loggedIn) 이 되지 않을 때 상태정보 : { loggedIn: false }
// 3항 연산자 : (조건 == true) ? 1번실행 : 2번실행
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  // 공유 데이터 정의(전역변수)
  state: initialState,
  // setter 메소드들 정의(변수에 저장하는 메소드)
  mutations: {
    // 토큰 만료 메소드
    tokenExpired(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    // 로그인 성공 메소드
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    // 로그인 실패 메소드
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    // 로그아웃 메소드(상태정보 갱신 : false)
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    // 회원가입 성공 메소드(상태정보 갱신 : false)
    registerSuccess(state) {
      state.status.loggedIn = false;
      // state.user = null;
    },
    // 회원가입 실패 메소드(상태정보 갱신: false)
    registerFailure(state) {
      state.status.loggedIn = false;
      // state.user = null;
    },
  },
  // 비동기 함수들 정의
  // axios 통신(성격 : 서버에서 결과를 언제 보내줄지 모름)
  actions: {
    // axios 통신 : login(AuthService.login 호출)
    // springBoot로 login 관련 요청(username,password)
    loginMain({ commit }, user) {
      return (
        AuthServiceMain.login(user)
          // 성공하면 then으로 결과가 들어옴
          .then(
            (user) => {
              // commit(mutations 메소드명)
              // loginSuccess(state, user) 메소드 호출
              // loggedIn 속성 : true
              // user 속성 : user
              commit("loginSuccess", user);
              // 비동기 함수 성공 시 : Promise.resolve
              return Promise.resolve(user);
            },
            (error) => {
              // loginFailure(state) 메소드 호출
              commit("loginFailure");
              // 비동기 함수 실패 시 : Promise.reject
              return Promise.reject(error);
            }
          )
      );
    },
    // logout : AuthService.logout 호출
    logoutMain({ commit }) {
      // 로컬저장소에서 토큰 가져오기
      const user = localStorage.getItem("user");

      // 토큰이 존재하면 만료 여부 확인
      if (user) {
        const decodedToken = jwtDecode(user);
        const expirationDate = new Date(decodedToken.exp * 1000);
        const currentDate = new Date();

        // 토큰이 만료되었으면 tokenExpired 뮤테이션 호출
        if (expirationDate < currentDate) {
          commit("logout");
          return;
        }
        // 로컬저장소에서 user 삭제(제거)
        AuthServiceMain.logout();
        // 상태정보 갱신 : loggedIn = false
        // mutations : logout(state) 메소드 호출
        commit("logout");
      }
    },
    // register(회원가입) AuthService.register
    register({ commit }, user) {
      // axios(post) 서버쪽으로 user 객체를 전송해서 insert 요청을 함
      return (
        AuthServiceMain.register(user)
          // 성공하면 then으로 결과가 들어옴
          .then(
            (response) => {
              // mutations : registerSuccess(state) 메소드 호출
              commit("registerSuccess");
              // 비동기 함수 성공 시 : Promise.resolve 호출됨
              return Promise.resolve(response.data);
            },
            (error) => {
              // mutations : registerFailure(state) 메소드 호출
              commit("registerFailure");
              // 비동기 함수 실패 시 : Promise.reject 호출됨
              return Promise.reject(error);
            }
          )
      );
    },
    loginAdmin({ commit }, user) {
      return (
        AuthServiceAdmin.login(user)
          // 성공하면 then으로 결과가 들어옴
          .then(
            (user) => {
              // commit(mutations 메소드명)
              // loginSuccess(state, user) 메소드 호출
              // loggedIn 속성 : true
              // user 속성 : user
              commit("loginSuccess", user);
              // 비동기 함수 성공 시 : Promise.resolve
              return Promise.resolve(user);
            },
            (error) => {
              // loginFailure(state) 메소드 호출
              commit("loginFailure");
              // 비동기 함수 실패 시 : Promise.reject
              return Promise.reject(error);
            }
          )
      );
    },
    // logout : AuthService.logout 호출
    logoutAdmin({ commit }) {
      // 로컬저장소에서 토큰 가져오기
      const user = localStorage.getItem("user");

      // 토큰이 존재하면 만료 여부 확인
      if (user) {
        const decodedToken = jwtDecode(user);
        const expirationDate = new Date(decodedToken.exp * 1000);
        const currentDate = new Date();

        // 토큰이 만료되었으면 tokenExpired 뮤테이션 호출
        if (expirationDate < currentDate) {
          commit("tokenExpired");
          return;
        }
      }
      // 로컬저장소에서 user 삭제(제거)
      AuthServiceAdmin.logout();
      // 상태정보 갱신 : loggedIn = false
      // mutations : logout(state) 메소드 호출
      commit("logout");
    },
  },
};

// AuthHeader.js
// JWT (Java Web Token)를 헤더에 저장해서 전송함

export default function authHeader() {
    // user 항목에 대한 로컬스토리지를(크롬 애플리케이션/로컬스토리지) 확인
    // 있으면 user 객체가 들어옴, 없으면 빈객체(null, undefined)
    let user = JSON.parse(localStorage.getItem("user"));

    // 서버 페이지 접근할 때 토큰이 필요함
    if(user && user.token) {
        // springboot로 토큰 전송 시 아래 포맷을 이용함
        return {Authorization : 'Bearer' + user.token};
        // node.js
        // return {'x-access-token' : user.accessToken};
    }
    else
    {
        return {}; 
    }
}
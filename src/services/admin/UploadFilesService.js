import http from "../../http-common";

class UploadFilesService {
  // upload를 위한 메소드
  // springboot 서버로 insert문 호출
  uploadSky(file, onUploadProgress) {
    // 자바스크립트 제공 클래스
    // <form> 태그로 이미지 전송을 해야함 : json 형태 x
    // <form> == FormData()
    let formData = new FormData();
    // vue에서 선택한 파일을 form 데이터로 담기
    formData.append("file", file);
    console.log(formData);

    return http.post("/uploadSky", formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
      // 이미지 처리 결과를 화면에 프로그래스바로
      //  보여주기 위해 실행(함수)
      onUploadProgress,
    });
  }

  uploadKeyword(file, onUploadProgress) {
    // 자바스크립트 제공 클래스
    // <form> 태그로 이미지 전송을 해야함 : json 형태 x
    // <form> == FormData()
    let formData = new FormData();
    // vue에서 선택한 파일을 form 데이터로 담기
    formData.append("file", file);
    console.log(formData);

    return http.post("/uploadKeyword", formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
      // 이미지 처리 결과를 화면에 프로그래스바로
      //  보여주기 위해 실행(함수)
      onUploadProgress,
    });
  }

  uploadCroquis(file, onUploadProgress) {
    // 자바스크립트 제공 클래스
    // <form> 태그로 이미지 전송을 해야함 : json 형태 x
    // <form> == FormData()
    let formData = new FormData();
    // vue에서 선택한 파일을 form 데이터로 담기
    formData.append("file", file);
    console.log(formData);

    return http.post("/uploadCroquis", formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
      // 이미지 처리 결과를 화면에 프로그래스바로
      //  보여주기 위해 실행(함수)
      onUploadProgress,
    });
  }

  uploadImgAll(file, onUploadProgress) {
    // 자바스크립트 제공 클래스
    // <form> 태그로 이미지 전송을 해야함 : json 형태 x
    // <form> == FormData()
    let formData = new FormData();
    // vue에서 선택한 파일을 form 데이터로 담기
    formData.append("file", file);
    console.log(formData);

    return http.post("/uploadImgAll", formData, {
      headers: {
        // 이미지 전송 형태 : json 안됨
        "Content-Type": "multipart/form-data",
      },
      // 이미지 처리 결과를 화면에 프로그래스바로
      //  보여주기 위해 실행(함수)
      onUploadProgress,
    });
  }

  // 이미지를 서버에서 다운로드 받음
  //  select 문 호출
  getSky() {
    return http.get("/sky");
  }

  getKeyword() {
    return http.get("/keyword");
  }

  getCroquis() {
    return http.get("/croquis");
  }

  getImgAll() {
    return http.get("/imgAll");
  }

  delete(id) {
    return http.delete(`/delete/${id}`);
  }
}

// 외부 파일(js, vue)에서 사용할 수 있게 아래 이름으로 export
export default new UploadFilesService();

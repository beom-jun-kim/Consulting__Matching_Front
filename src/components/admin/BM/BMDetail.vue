<template>
    <div id="layoutSidenav_content" class="preR">
        <main>
            <div class="container-fluid px-auto">
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item active"></li>
                </ol>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card2 mb-4">
                            <div class="card-header d-flex justify-content-between align-items-center">
                                <div class="flex-grow-1">비즈니스모델 정보</div>
                                <router-link v-if="getUserToken().role == 'supervisor'" to="/admin/BMList"
                                    class="btn btn-secondary btm-sm">
                                    돌아가기
                                </router-link>
                            </div>
                            <div class="card-body py-3 px-2" style="overflow-y:scroll; height:48rem;">
                                <PreView />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex mt-3">
                    <div class="mx-auto">
                        <button v-if="getUserToken().role == 'admin'" @click="updateUser" class="btn btn-primary me-3">
                            수정
                        </button>
                        <router-link v-if="getUserToken().role == 'admin'" to="/admin/BMList"
                            class="btn btn-secondary me-3">
                            취소
                        </router-link>
                        <button v-if="getUserToken().role == 'admin'" @click="deleteUser" class="btn btn-danger">
                            삭제
                        </button>
                    </div>
                </div>
            </div>
        </main>
        <FooterCom />
    </div>
</template>
  
<script>
import FooterCom from "@/common/admin/FooterCom.vue";
import jwtDecode from "jwt-decode";
import PreView from "./preView.vue";
export default {
    name: "bmDetail",
    components: {
        FooterCom, PreView
    },
    methods: {
        getUserToken() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            return decodedToken;
        },
    },
};
</script>
  
<style scoped>
@import "../../../../public/css/admin/styles.css";
</style>
  
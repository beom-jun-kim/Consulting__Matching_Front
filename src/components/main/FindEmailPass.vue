<template>
    <div class="row justify-content-center">

        <div class="joinPage">
            <img class="bg2" src="../../../public/img/main/bg2.gif">
            <img class="bg4" src="../../../public/img/main/bg4.gif">
            <div class="wrap">
                <div class="joinWrap">
                    <div class='ttl'>
                        <div class='img'><img src='../../../public/img/main/login_img.png'></div>
                        <div class='txt'>
                            <span class='bmds'>BMDS</span>잃어버린 회원의 아이디와 패스워드를 찾습니다!<br>
                            <span class='cmt'>당신의 창업과 함께하는 Best Solution Partner가 되겠습니다.</span>
                        </div>
                    </div>
                    <div class='col-xs-12 joinBox'>
                        <div class='col-xs-12 col-sm-6 col-sm-offset-3'>
                            <div class="panel panel-default">
                                <!--<form method="post" action="/member/findResult">-->
                                <div class="panel-body pt20 pb20">
                                    <div class='col-xs-12 mb20'>
                                        <label for="userName">이름 :
                                            <input class="form-control" id="userName" required v-model="userBoard.userName"
                                                name="userName" />
                                        </label>
                                    </div>
                                    <div class='col-xs-12 mb20'>
                                        <label for="userPhone">전화번호 : ('-'를 빼고 숫자만 입력)
                                            <input class="form-control" id="userPhone" required
                                                v-model="userBoard.userPhone" name="userPhone" />
                                        </label>
                                    </div>
                                    <input type="hidden" value="id" name="mode" id="mode">

                                    <div class='col-xs-12'>
                                        <div v-if="findEmail" class="mb-5">
                                            <label for="userPhone">찾은 이메일 :
                                                <input class="form-control" v-model="findEmail" />
                                            </label>
                                        </div>
                                        <div v-if="errMessage" class="mb-5">
                                            {{ errMessage }}
                                            <router-link to="/main/join"
                                                class="btn btn2 btn-primary btn-sm">회원가입하러가기</router-link>
                                        </div>
                                        <button class='btn btn-primary btn-lg w100per' type='button'
                                            @click='findByEmail'>이메일
                                            찾기</button>
                                    </div>
                                </div>
                                <!--</form>-->

                                <div class="panel-body pt20 pb20">
                                    <div class='col-xs-12 mb20'>
                                        <label for="userName2">이름 :
                                            <input class="form-control" id="userName2" required
                                                v-model="userBoard.userName2" name="userName2" />
                                        </label>
                                    </div>
                                    <div class='col-xs-12 mb20'>
                                        <label for="userEmail2">이메일 :
                                            <input class="form-control" id="userEmail2" required
                                                v-model="userBoard.userEmail2" name="userEmail2" />
                                        </label>
                                    </div>
                                    <div class='col-xs-12'>
                                        <label for="userPhone2">전화번호 : ('-'를 빼고 숫자만 입력)
                                            <input class="form-control" id="userPhone2" required
                                                v-model="userBoard.userPhone2" name="userPhone2" />
                                        </label>
                                    </div>
                                    <div class='col-xs-12'>
                                        <div v-if="errMessage2" class="mt-4">
                                            {{ errMessage2 }}
                                            <router-link to="/main/join"
                                                class="btn btn2 btn-primary btn-sm">회원가입하러가기</router-link>
                                        </div>
                                        <button class='btn btn-primary btn-lg w100per mt-4' type='button'
                                            @click='findByPass'>비밀번호
                                            찾기</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserDataService from '@/services/main/UserDataService';
export default {
    name: "FindEmailPass",
    data() {
        return {
            userBoard: {
                userName: "",
                userPhone: "",
                userEmail: "",
                userName2: "",
                userPhone2: "",
                userEmail2: "",
            },
            findEmail: "",
            findPass: "",
            errMessage: "",
            errMessage2: ""
        };
    },
    methods: {
        // 이메일찾기 함수
        findByEmail() {
            this.errMessage = "";
            UserDataService.findByEmail(this.userBoard.userName, this.userBoard.userPhone)
                .then((res) => {
                    this.findEmail = res.data;
                })
                .catch(() => {
                    this.errMessage = '해당 유저를 찾을 수 없습니다.';
                })
        },
        // 비밀번호 찾기 함수
        findByPass() {
            this.errMessage2 = "";
            UserDataService.findByPass(this.userBoard.userName2, this.userBoard.userEmail2, this.userBoard.userPhone2)
                .then((res) => {
                    alert(`새로운 임시 비밀번호를 이메일로 보내드렸습니다.\n확인 부탁드립니다.${res.data}`);
                })
                .catch(() => {
                    this.errMessage2 = '해당 유저를 찾을 수 없습니다.';
                })
        },
    },
};
</script>

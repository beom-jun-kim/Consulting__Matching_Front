<template>
    <div class="body">
        <div class="joinPage">
            <div class="wrap joinPage">
                <div class="joinWrap">
                    <div class='ttl'>
                        <div class='img'><img src='../../../public/img/main/login_img.png'></div>
                        <div class='txt'>
                            <span class='bmds'>BMDS</span>와 함께 시작하시겠어요?<br>
                            <span class='cmt'>당신의 창업과 함께하는 Best Solution Partner가 되겠습니다.</span>
                        </div>
                    </div>
                    <div class='col-xs-12 joinBox'>
                        <div class='agreeWrap' id="agreeWrap">
                            <div class='col-xs-6 agreeBox'>
                                <div class="panel panel-default">
                                    <div class="panel-heading d-flex"
                                        style="border-top:2px solid rgba(0,0,0,.5);border-bottom:2px solid rgba(0,0,0,.1);height:3rem;">
                                        <div style="margin:auto 0;">
                                            이용약관
                                        </div>
                                    </div>
                                    <TermsComVue />
                                </div>
                            </div>
                            <div class='col-xs-6 agreeBox'>
                                <div class="panel panel-default">
                                    <div class="panel-heading d-flex"
                                        style="border-top:2px solid rgba(0,0,0,.5);border-bottom:2px solid rgba(0,0,0,.1);height:3rem;">
                                        <div style="margin: auto 0;">
                                            개인정보 처리방침
                                        </div>
                                    </div>
                                    <PrivacyPolicy />
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
import TermsComVue from "@/components/main/TermsCom.vue"
import PrivacyPolicy from "@/components/main/PrivacyPolicy.vue"

export default {
    name: 'TermView',
    components: {
        TermsComVue,
        PrivacyPolicy
    }
}
</script>

<style>
.body {
    margin-bottom: 0px;
}

/* 로그인 페이지 */
.joinPage {
    position: relative;
    background: url(../../../public/img/main/line_bg.png) no-repeat center center;
    background-size: 100% auto;
    margin-bottom: 90px;
    overflow: hidden;
    min-height: 870px;
}

.joinPage .joinWrap {
    /*height:100%;*/
    width: 60%;
    margin: 50px auto;
    min-width: 1020px;
}

.joinPage .joinWrap .ttl {
    font-size: 36px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 50px;
}

.joinPage .joinWrap .ttl .img,
.joinPage .joinWrap .ttl .txt {
    display: inline-block;
}

.joinPage .joinWrap .ttl .txt {
    font-size: 36px;
    font-weight: 900;
    line-height: 34px;
    margin-top: 10px;
    /*vertical-align:middle;*/
    color: #323232;
    text-align: left;
    margin-left: 20px;
}

.joinPage .joinWrap .ttl .txt span.bmds {
    color: #3259a9;
    font-size: 36px;
    font-weight: 900;
}

.joinPage .joinWrap .ttl .txt span.cmt {
    font-size: 18px;
    color: #323232;
    font-weight: 600;
    text-align: left;
}

/* .joinPage .joinBox {} */

.joinPage .joinBox .form-group .input-group .form-control {
    width: 95%;
}


.joinPage .joinBox button.btn-exists {
    background: #fff;
    color: #3259a9;
    border: 1px solid #3259a9;
    border-radius: 20px !important;
    width: 100px;
}

.joinPage .joinBox button.btn-exists:hover,
.joinPage .joinBox button.btn-exists:active,
.joinPage .joinBox button.btn-exists:focus {
    background: #3259a9;
    color: #fff;
}

.joinPage .joinBox button.btn-primary {
    background: #3259a9;
    color: #fff;
    border: 1px solid #3259a9;
    border-radius: 20px !important;
    width: 100px;
}

.joinPage .joinBox button.btn-primary:hover,
.joinPage .joinBox button.btn-primary:active,
.joinPage .joinBox button.btn-primary:focus {
    background: #fff;
    color: #3259a9;
}

.joinPage .joinBox button.btn-agree {
    background: #f6f1f7;
    color: #3259a9;
    border: 1px solid #3259a9;
    border-radius: 20px !important;
    width: 130px;
}

.joinPage .joinBox button.btn-agree:hover,
.joinPage .joinBox button.btn-agree:active,
.joinPage .joinBox button.btn-agree:focus {
    background: #3259a9;
    color: #fff;
}

.joinPage .joinBox .agreeWrap {
    /* display: none; */
}

/* .joinPage .joinBox .agreeWrap .agreeBox {} */

.joinPage .joinBox .agreeWrap .agreeBox .panel-heading {
    background: #fff;
    font-size: 18px;
    font-weight: 600;
}


.joinPage .joinBox .agreeWrap .agreeBox .panel-body {
    height: 250px;
    overflow-y: scroll;
}

.col-xs-12 {
    width: 100%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

@media screen and (min-width: 768px) {
    .col-sm-offset-3 {
        margin-left: 25%;
    }
}


@media screen and (min-width: 768px) {
    .col-sm-6 {
        width: 50%;
    }
}

@media screen and (min-width: 768px) {
    .col-sm-6 {
        float: left;
    }

}

.panel-default {
    border-color: #ddd;
}

.panel {
    border-top: 2px solid #ccc;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
    box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}

.pb20 {
    padding-bottom: 20px !important;
}

.pt20 {
    padding-top: 20px !important;
}

.panel-body {
    padding: 15px;
}

.panel-body:before {
    display: table;
    content: " ";
}

.mb20 {
    margin-bottom: 20px !important;
}

.input-lg {
    height: 46px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
}

.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}

.btn {
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
}

.w100per {
    width: 100% !important;
}

.btn-lg {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
}

.mt10 {
    margin-top: 10px !important;
}

.text-danger {
    color: #a94442;
}

.panel-body:after {
    clear: both;
    display: table;
    content: " ";
}

.bg4 {
    position: absolute;
    left: 86%;
}

.bg2 {
    position: absolute;
    left: -30px;
    top: 70%;
}

.ttl {
    margin-top: 7%;
}
</style>
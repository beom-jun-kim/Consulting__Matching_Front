<template>
    <div>
        <div style="background:#F6F5F9; height:100%;">
            <div v-if="true" class="container-fluid" style="padding:0 5rem">
                <div class="text-start my-3">
                    <h1 class="display-5 fw-bolder">사업 성공을 위한 하나의 툴.</h1>
                    <h1 class="display-5 fw-bolder">지금 BMDS를 사용해 보세요.</h1>
                </div>
                <div class="d-flex flex-wrap justify-content-between align-items-center">
                    <div class="me-4">
                        <div class="d-flex flex-column justify-content-between align-items-end w-100 h-100">
                            <div class="subTitleBasic">
                                서비스 항목
                            </div>
                            <div id="fontColorChange2">
                                <div class="itemPay mt-3">
                                    <div
                                        class="d-flex flex-column justify-content-between align-items-center w-100 h-100 p-1">
                                        <div class="freeBtn fs-5 fw-bold" style="opacity:0;">
                                        </div>
                                        <div class="freeText fs-3 fw-bold">
                                        </div>
                                        <div
                                            class="d-flex flex-column justify-content-between align-items-center w-100">
                                            <div class="d-flex justify-content-end align-items-center w-100 py-3">
                                                <div class="fw-bold" style="font-size:15px;">사용기한</div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center w-100 py-3">
                                                <div class="d-flex flex-column justify-content-center align-items-end fw-bold"
                                                    style="font-size:15px;">
                                                    <div>비즈니스 모델</div>
                                                    <div>최대 생성 가능 개수</div>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center w-100 py-4">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="text-center fw-bold" style="font-size:15px;">
                                                        사용<br />가능한<br />버전
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-between align-items-center fw-bold"
                                                        style="font-size:15px; border-left:1px dotted gray;">
                                                        <div class="text-left p-1">
                                                            Build up</div>
                                                        <div class="text-left p-1" style="border-top:1px dotted gray;">
                                                            Premium(R)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center w-100">
                                                <div class="fw-bold" style="font-size:14px; padding:.6rem 0;">정부지원제도
                                                    정보확인</div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center w-100">
                                                <div class="fw-bold" style="font-size:15px; padding:.6rem 0;">멘토링 서비스
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center w-100">
                                                <div class="fw-bold" style="font-size:15px; padding:.6rem 0;">교육서비스
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center w-100">
                                                <div class="fw-bold" style="font-size:15px; padding:.6rem 0;">관리용 데이터
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-end align-items-center w-100">
                                                <div class="fw-bold" style="font-size:15px; padding:.6rem 0;">제공 방식
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="chooseRoleBtn mt-3" style="opacity:0;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="items" style="background:white; padding:2.5rem 1.5rem; border-radius:15px;">
                        <div class="d-flex flex-wrap justify-content-between align-items-center w-100">
                            <div class="d-flex flex-column justify-content-between align-items-center">
                                <div class="subTitleBasic">
                                    무료
                                </div>
                                <div id="fontColorChange1">
                                    <div class="itemPay mt-3">
                                        <div
                                            class="d-flex flex-column justify-content-between align-items-center w-100 h-100 p-1">
                                            <div class="freeBtn fs-5 fw-bold">
                                                Free Trial
                                            </div>
                                            <div class="freeText fs-3 fw-bold">
                                                Free
                                            </div>
                                            <div
                                                class="d-flex flex-column justify-content-between align-items-center w-100">
                                                <div class="d-flex justify-content-between align-items-start w-100 p-3"
                                                    style="border-bottom:1px dotted gray;">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <i class="fas fa-check fs-4 me-2"></i>
                                                        <div class="fw-bold" style="font-size:15px;">14 Day</div>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-4"
                                                    style="border-bottom:1px dotted gray;">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <i class="fas fa-check fs-4 me-2"></i>
                                                        <div class="fw-bold" style="font-size:15px;">Max 1</div>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-5"
                                                    style="border-bottom:1px dotted gray;">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <i class="fas fa-check fs-4 me-2"></i>
                                                        <div class="fw-bold" style="font-size:15px;">Build up</div>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                    style="border-bottom:1px dotted gray;">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <i class="fas fa-check fs-4 me-2"></i>
                                                        <div class="fw-bold" style="font-size:15px;">가능</div>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                    style="border-bottom:1px dotted gray;">
                                                    <div class="d-flex justify-content-between align-items-center"
                                                        style="color: #ADADAD;">
                                                        <i class="fas fa-check fs-4 me-2"></i>
                                                        <div class="fw-bold" style="font-size:15px;">미제공</div>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                    style="border-bottom:1px dotted gray;">
                                                    <div class="d-flex justify-content-between align-items-center"
                                                        style="color: #ADADAD;">
                                                        <i class="fas fa-check fs-4 me-2"></i>
                                                        <div class="fw-bold" style="font-size:15px;">미제공</div>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                    style="border-bottom:1px dotted gray;">
                                                    <div class="d-flex justify-content-between align-items-center"
                                                        style="color: #ADADAD;">
                                                        <i class="fas fa-check fs-4 me-2"></i>
                                                        <div class="fw-bold" style="font-size:15px;">미제공</div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="d-flex justify-content-between align-items-start w-100 ps-3 py-2">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <i class="fas fa-check fs-4 me-2"></i>
                                                        <div class="fw-bold" style="font-size:15px;">Standard</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="chooseRoleBtn mt-3" @click="onFreeTwoWeeks('basic')">
                                        Choose
                                    </div>
                                </div>
                            </div>
                            <div class="vertical-dashed-line"></div>
                            <div class="d-flex flex-column justify-content-between align-items-center">
                                <div class="subTitleBasic">
                                    학생
                                </div>
                                <div class="d-flex justify-content-center align-items-center" @mouseleave="classClose">
                                    <div id="fontColorChange1">
                                        <div class="itemPay mt-3">
                                            <div
                                                class="d-flex flex-column justify-content-between align-items-center w-100 h-100 p-1">
                                                <div class="roleBtn fs-5 fw-bold">
                                                    Student
                                                </div>
                                                <div class="roleText fs-3 fw-bold">
                                                    35,000원
                                                </div>
                                                <div
                                                    class="d-flex flex-column justify-content-between align-items-center w-100">
                                                    <div class="d-flex justify-content-between align-items-start w-100 p-3"
                                                        style="border-bottom:1px dotted gray;">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <i class="fas fa-check fs-4 me-2"></i>
                                                            <div class="fw-bold" style="font-size:15px;">6M</div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-4"
                                                        style="border-bottom:1px dotted gray;">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <i class="fas fa-check fs-4 me-2"></i>
                                                            <div class="fw-bold" style="font-size:15px;">Max 1</div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-5"
                                                        style="border-bottom:1px dotted gray;">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <i class="fas fa-check fs-4 me-2"></i>
                                                            <div class="fw-bold" style="font-size:15px;">Build up</div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                        style="border-bottom:1px dotted gray;">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <i class="fas fa-check fs-4 me-2"></i>
                                                            <div class="fw-bold" style="font-size:15px;">가능</div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                        style="border-bottom:1px dotted gray;">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <i class="fas fa-check fs-4 me-2"></i>
                                                            <div class="fw-bold" style="font-size:15px;">제공</div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                        style="border-bottom:1px dotted gray;">
                                                        <div class="d-flex justify-content-between align-items-center"
                                                            style="color: #ADADAD;">
                                                            <i class="fas fa-check fs-4 me-2"></i>
                                                            <div class="fw-bold" style="font-size:15px;">미제공</div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                        style="border-bottom:1px dotted gray;">
                                                        <div class="d-flex justify-content-between align-items-center"
                                                            style="color: #ADADAD;">
                                                            <i class="fas fa-check fs-4 me-2"></i>
                                                            <div class="fw-bold" style="font-size:15px;">미제공</div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="d-flex justify-content-between align-items-start w-100 ps-3 py-2">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <i class="fas fa-check fs-4 me-2"></i>
                                                            <div class="fw-bold" style="font-size:15px;">Standard</div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="chooseRoleBtn mt-3" @click="classInfo5">
                                            Choose
                                        </div>
                                    </div>
                                    <div v-if="showOptions5" class="monthPay5">
                                        <div class="firstArea">
                                            <div class="d-flex justify-content-between align-items-end fw-bold"
                                                style="color:#57448A;">
                                                <div class="fs-2" style="letter-spacing:-2px; vertical-align: middle;">
                                                    6<span class="fs-4">개월</span><span class="fs-5"> / 단일
                                                        결제</span>
                                                </div>
                                            </div>
                                            <div class="payBtn2" @click="requestPay('student', 6, 35000, 1)">
                                                <div class="fs-4 text-white fw-bold">35,000<span class="fs-5">원</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="vertical-dashed-line"></div>
                            <div class="d-flex justify-content-center align-items-center" id="mouseUp">
                                <div class="d-flex flex-column justify-content-between align-items-center w-100">
                                    <div class="subTitleBasic">
                                        개인 또는 기업
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div class="d-flex justify-content-center align-items-center"
                                            @mouseleave="classClose">
                                            <div id="fontColorChange1">
                                                <div class="itemPay mt-3">
                                                    <div
                                                        class="d-flex flex-column justify-content-between align-items-center w-100 h-100 p-1">
                                                        <div class="roleBtn fs-5 fw-bold">
                                                            Build up
                                                        </div>
                                                        <div class="roleText fs-3 fw-bold">
                                                            59,900원
                                                            <span
                                                                class="d-flex flex-column justify-content-end align-items-center fs-5 h-100">
                                                                /월
                                                            </span>
                                                        </div>
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center w-100">
                                                            <div class="d-flex justify-content-between align-items-start w-100 p-3"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">
                                                                        1M/3M/6M/1Y
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-4"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">Max 5
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-5"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">Build
                                                                        up
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">가능
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">제공
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">제공
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div class="d-flex justify-content-between align-items-center"
                                                                    style="color: #ADADAD;">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">미제공
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="d-flex justify-content-between align-items-start w-100 ps-3 py-2">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">
                                                                        Standard
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="chooseRoleBtn mt-3" @click="classInfo1">
                                                    Choose
                                                </div>
                                            </div>
                                            <div v-if="showOptions1" class="monthPay1">
                                                <div class="firstArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            1<span class="fs-4">개월</span><span class="fs-5"> / 월 정기
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <div class="payBtn" @click="onPayment('buildup', 41000, 1)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                30<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">59,900원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">월41,000<span
                                                                class="fs-5">원</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="firstArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            3<span class="fs-4">개월</span><span class="fs-5"> / 단일
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <div class="payBtn" @click="requestPay('buildup', 3, 107000, 5)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                40<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">179,700원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">107,000<span
                                                                class="fs-5">원</span></div>
                                                    </div>
                                                </div>
                                                <div class="firstArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            6<span class="fs-4">개월</span><span class="fs-5"> / 단일
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <div class="payBtn" @click="requestPay('buildup', 6, 179000, 5)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                50<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">359,400원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">179,000<span
                                                                class="fs-5">원</span></div>
                                                    </div>
                                                </div>
                                                <div class="secondArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            12<span class="fs-4">개월</span><span class="fs-5"> / 단일
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <div class="payBtn" @click="requestPay('buildup', 12, 187000, 5)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                60<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">718,800원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">287,000<span
                                                                class="fs-5">원</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center align-items-center"
                                            @mouseleave="classClose">
                                            <div id="fontColorChange1">
                                                <div class="itemPay mt-3">
                                                    <div
                                                        class="d-flex flex-column justify-content-between align-items-center w-100 h-100 p-1">
                                                        <div class="roleBtn fs-5 fw-bold">
                                                            Premium(R)
                                                        </div>
                                                        <div class="roleText fs-3 fw-bold">
                                                            99,900원
                                                            <span
                                                                class="d-flex flex-column justify-content-end align-items-center fs-5 h-100">
                                                                /월
                                                            </span>
                                                        </div>
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center w-100">
                                                            <div class="d-flex justify-content-between align-items-start w-100 p-3"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">
                                                                        1M/3M/6M/1Y
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-4"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">Max 5
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-5"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">All
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">가능
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">제공
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">제공
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div class="d-flex justify-content-between align-items-center"
                                                                    style="color: #ADADAD;">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">미제공
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="d-flex justify-content-between align-items-start w-100 ps-3 py-2">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">
                                                                        Standard
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="chooseRoleBtn mt-3" @click="classInfo2">
                                                    Choose
                                                </div>
                                            </div>
                                            <div v-if="showOptions2" class="monthPay2">
                                                <div class="firstArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            1<span class="fs-4">개월</span><span class="fs-5"> / 월 정기
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <div class="payBtn" @click="onPayment('buildup', 69000, 1)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                30<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">99,900원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">월69,000<span
                                                                class="fs-5">원</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="firstArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            3<span class="fs-4">개월</span><span class="fs-5"> / 단일
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <!-- 35940 -->
                                                    <div class="payBtn" @click="requestPay('buildup', 3, 179000, 5)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                40<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">299,700원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">179,000<span
                                                                class="fs-5">원</span></div>
                                                    </div>
                                                </div>
                                                <div class="firstArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            6<span class="fs-4">개월</span><span class="fs-5"> / 단일
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <div class="payBtn" @click="onPayment('buildup', 299000, 6)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                50<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">599,400원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">299,000<span
                                                                class="fs-5">원</span></div>
                                                    </div>
                                                </div>
                                                <div class="secondArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            12<span class="fs-4">개월</span><span class="fs-5"> / 단일
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <div class="payBtn" @click="onPayment('buildup', 479000, 12)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                60<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">1,198,800원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">479,000<span
                                                                class="fs-5">원</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="vertical-dashed-line" style="z-index:3;"></div>
                            <div class="d-flex justify-content-center align-items-center" id="mouseUp"
                                @mouseleave="classClose">
                                <div class="d-flex flex-column justify-content-between align-items-center w-100">
                                    <div class="subTitleBasic">
                                        컨설턴트
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div class="d-flex justify-content-center align-items-center"
                                            @mouseleave="classClose">
                                            <div id="fontColorChange1">
                                                <div class="itemPay mt-3">
                                                    <div
                                                        class="d-flex flex-column justify-content-between align-items-center w-100 h-100 p-1">
                                                        <div class="roleBtn fs-5 fw-bold">
                                                            General(G)
                                                        </div>
                                                        <div class="roleText fs-3 fw-bold">
                                                            99,900원
                                                            <span
                                                                class="d-flex flex-column justify-content-end align-items-center fs-5 h-100">
                                                                /월
                                                            </span>
                                                        </div>
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center w-100">
                                                            <div class="d-flex justify-content-between align-items-start w-100 p-3"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">
                                                                        1M/3M/6M/1Y
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-4"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">Max 5
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-5"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">All
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">가능
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">제공
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">제공
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">제공
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="d-flex justify-content-between align-items-start w-100 ps-3 py-2">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">
                                                                        Standard
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="chooseRoleBtn mt-3" @click="classInfo3">
                                                    Choose
                                                </div>
                                            </div>
                                            <div v-if="showOptions3" class="monthPay3">
                                                <div class="firstArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            1<span class="fs-4">개월</span><span class="fs-5"> / 월 정기
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <div class="payBtn" @click="onPayment('g-consultant', 69000, 1)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                30<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">99,900원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">월69,000<span
                                                                class="fs-5">원</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="firstArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            3<span class="fs-4">개월</span><span class="fs-5"> / 단일
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <!-- 35940 -->
                                                    <div class="payBtn"
                                                        @click="requestPay('g-consultant', 3, 179000, 5)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                40<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">299,700원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">179,000<span
                                                                class="fs-5">원</span></div>
                                                    </div>
                                                </div>
                                                <div class="firstArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            6<span class="fs-4">개월</span><span class="fs-5"> / 단일
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <div class="payBtn" @click="onPayment('g-consultant', 299000, 6)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                50<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">599,400원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">299,000<span
                                                                class="fs-5">원</span></div>
                                                    </div>
                                                </div>
                                                <div class="secondArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            12<span class="fs-4">개월</span><span class="fs-5"> / 단일
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <div class="payBtn" @click="onPayment('g-consultant', 479000, 12)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                60<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">1,198,800원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">479,000<span
                                                                class="fs-5">원</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center align-items-center"
                                            @mouseleave="classClose">
                                            <div id="fontColorChange1">
                                                <div class="itemPay mt-3">
                                                    <div
                                                        class="d-flex flex-column justify-content-between align-items-center w-100 h-100 p-1">
                                                        <div class="roleBtn fs-5 fw-bold">
                                                            Special(S)
                                                        </div>
                                                        <div class="roleText fs-3 fw-bold">
                                                            199,000원
                                                            <span
                                                                class="d-flex flex-column justify-content-end align-items-center fs-5 h-100">
                                                                /월
                                                            </span>
                                                        </div>
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center w-100">
                                                            <div class="d-flex justify-content-between align-items-start w-100 p-3"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">
                                                                        1M/3M/6M/1Y
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3"
                                                                style="border-bottom:1px dotted gray; padding:1.1rem 0;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="d-flex flex-column justify-content-center align-items-start fw-bold"
                                                                        style="font-size:15px;">
                                                                        <div>Max 20</div>
                                                                        <span style="font-size:10px;">(추가는 별도문의)</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-5"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">All
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">가능
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">제공
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">제공
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                                style="border-bottom:1px dotted gray;">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">제공
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="d-flex justify-content-between align-items-start w-100 ps-3 py-2">
                                                                <div
                                                                    class="d-flex justify-content-between align-items-center">
                                                                    <i class="fas fa-check fs-4 me-2"></i>
                                                                    <div class="fw-bold" style="font-size:15px;">
                                                                        Individual
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="chooseRoleBtn mt-3" @click="classInfo4">
                                                    Choose
                                                </div>
                                            </div>
                                            <div v-if="showOptions4" class="monthPay4">
                                                <div class="firstArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            1<span class="fs-4">개월</span><span class="fs-5"> / 월 정기
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <div class="payBtn" @click="onPayment('s-consultant', 139000, 1)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                30<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">199,000원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">월139,000<span
                                                                class="fs-5">원</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="firstArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            3<span class="fs-4">개월</span><span class="fs-5"> / 단일
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <!-- 35940 -->
                                                    <div class="payBtn"
                                                        @click="requestPay('s-consultant', 3, 358000, 5)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                40<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">597,000원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">358,000<span
                                                                class="fs-5">원</span></div>
                                                    </div>
                                                </div>
                                                <div class="firstArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            6<span class="fs-4">개월</span><span class="fs-5"> / 단일
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <div class="payBtn" @click="onPayment('s-consultant', 597000, 6)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                50<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">1,194,000원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">597,000<span
                                                                class="fs-5">원</span></div>
                                                    </div>
                                                </div>
                                                <div class="secondArea">
                                                    <div class="d-flex justify-content-between align-items-end fw-bold"
                                                        style="color:#57448A;">
                                                        <div class="fs-2"
                                                            style="letter-spacing:-2px; vertical-align: middle;">
                                                            12<span class="fs-4">개월</span><span class="fs-5"> / 단일
                                                                결제</span>
                                                        </div>
                                                    </div>
                                                    <div class="payBtn" @click="onPayment('s-consultant', 955000, 12)">
                                                        <div
                                                            class="d-flex flex-column justify-content-between align-items-center">
                                                            <div class="discountBorder">
                                                                60<span class="percent">%</span>
                                                            </div>
                                                            <div class="discountPrice">
                                                                <del class="originalPrice">2,388,000원</del>
                                                                <span class="arrow"></span>
                                                            </div>
                                                        </div>
                                                        <div class="fs-4 text-white fw-bold">955,000<span
                                                                class="fs-5">원</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="vertical-dashed-line"></div>
                            <div class="d-flex justify-content-center align-items-center" id="mouseUp"
                                @mouseleave="classClose">
                                <div class="d-flex flex-column justify-content-between align-items-center w-100">
                                    <div class="subTitleBasic">
                                        기관
                                    </div>
                                    <div class="d-flex justift-content-center align-items-center">
                                        <div id="fontColorChange1">
                                            <div class="itemPay mt-3">
                                                <div
                                                    class="d-flex flex-column justify-content-between align-items-center w-100 h-100 p-1">
                                                    <div class="roleBtn fs-5 fw-bold">
                                                        General(G)
                                                    </div>
                                                    <div class="roleText fs-3 fw-bold">
                                                        별도문의
                                                    </div>
                                                    <div
                                                        class="d-flex flex-column justify-content-between align-items-center w-100">
                                                        <div class="d-flex justify-content-between align-items-start w-100 p-3"
                                                            style="border-bottom:1px dotted gray;">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">1Year
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-start w-100 ps-3"
                                                            style="border-bottom:1px dotted gray; padding:1.1rem 0;">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="d-flex flex-column justify-content-center align-items-start fw-bold"
                                                                    style="font-size:15px;">
                                                                    <div>50/100/150/200</div>
                                                                    <span style="font-size:10px;">(요구 상이)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-5"
                                                            style="border-bottom:1px dotted gray;">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">All
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                            style="border-bottom:1px dotted gray;">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">가능</div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                            style="border-bottom:1px dotted gray;">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">제공</div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                            style="border-bottom:1px dotted gray;">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">제공</div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                            style="border-bottom:1px dotted gray;">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">제공</div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="d-flex justify-content-between align-items-start w-100 ps-3 py-2">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">Package
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chooseRoleBtn mt-3" data-bs-toggle="modal"
                                                data-bs-target="#questionModal">
                                                Choose
                                            </div>
                                        </div>
                                        <div id="fontColorChange1">
                                            <div class="itemPay mt-3">
                                                <div
                                                    class="d-flex flex-column justify-content-between align-items-center w-100 h-100 p-1">
                                                    <div class="roleBtn fs-5 fw-bold">
                                                        Special(S)
                                                    </div>
                                                    <div class="roleText fs-3 fw-bold">
                                                        별도문의
                                                    </div>
                                                    <div
                                                        class="d-flex flex-column justify-content-between align-items-center w-100">
                                                        <div class="d-flex justify-content-between align-items-start w-100 p-3"
                                                            style="border-bottom:1px dotted gray;">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">1Year
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-4"
                                                            style="border-bottom:1px dotted gray;">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">무제한</div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-5"
                                                            style="border-bottom:1px dotted gray;">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">All
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                            style="border-bottom:1px dotted gray;">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">가능</div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                            style="border-bottom:1px dotted gray;">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">제공</div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                            style="border-bottom:1px dotted gray;">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">제공</div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-start w-100 ps-3 py-2"
                                                            style="border-bottom:1px dotted gray;">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">제공</div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="d-flex justify-content-between align-items-start w-100 ps-3 py-2">
                                                            <div
                                                                class="d-flex justify-content-between align-items-center">
                                                                <i class="fas fa-check fs-4 me-2"></i>
                                                                <div class="fw-bold" style="font-size:15px;">On Premise
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chooseRoleBtn mt-3" data-bs-toggle="modal"
                                                data-bs-target="#questionModal">
                                                Choose
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" tabindex="-1" id="questionModal" aria-labelledby="questionModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content2">
                            <div class="modal-header">
                                <h5 class="modal-title fw-bold fs-3">문의하기</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="fw-bold fs-5">
                                    기관용 BMDS를 이용하실 고객사께서는
                                    아래의 기업주소로 (주)메라클을 <br />방문해 주시거나
                                    전화번호로 연락해 주시기 바랍니다!
                                </div>
                                <div class="custom-modal-content">
                                    <p class="fw-bold"><span class="fw-bold fs-5">기업주소 :</span> 부산광역시 해운대구 센텀중앙로
                                        97(재송동), 센텀스카이비즈 A동 2407호
                                    </p>
                                    <p class="fw-bold"><span class="fw-bold fs-5">전화번호 :</span> 051-911-3330~7</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-100 d-flex justify-content-end align-items-center">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style="
                background: #f6f1f7;
                color: #3259a9;
                border: 1px solid #3259a9;
                border-radius: 20px !important;
                width: 130px;
              ">
                        약관확인
                    </button>
                </div>
            </div>
            <div v-else>
                <div class="d-flex text-center text-black bg-white" style="height: 50rem;">
                    <div
                        class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column justify-content-center align-items-center">
                        <img src="../../assets/beta/공사페이지2.jpg" alt="공사페이지" class="image-container2">
                    </div>
                </div>
            </div>

            <div class="modal fade" tabindex="-1" id="exampleModal" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content2">
                        <div class="modal-header">
                            <h5 class="modal-title">약관</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <p>
                                    <font face="한양중고딕">제1조(목적)</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">본 약관은 주식회사 메라클(이하 “회사”)이 제공하는 서비스의 이용과 관련하여 일정 기간 서비스 이용을 보장하는
                                        회사의 정기 구독 서비스(이하
                                        “정기 구독 서비스”)에 가입 및 결제한 회원(이하 “구독자”) 사이의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정하는 것을 목적으로
                                        합니다.
                                        본 약관은 메라클 서비스 이용약관에 우선하여 적용되며 적용 대상은 “구독자”에 한합니다.
                                    </font>
                                </p>
                                <p>
                                    <font face="한양중고딕"><br /></font>
                                </p>
                                <p>
                                    <font face="한양중고딕">제2조(용어의 정의)</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">본 약관에서 사용하는 주요 용어의 정의는 메라클 서비스 이용약관을 따릅니다.</font>
                                </p>
                                <p>
                                    <font face="한양중고딕"><br /></font>
                                </p>
                                <p>
                                    <font face="한양중고딕">제3조 (정기 구독 서비스 가입과 결제방식)</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">회원은 정기 구독 서비스에 가입하기 위하여 사이트 내 버튼을 클릭하여 정기 구독 서비스 결제 화면에서 가입할 수
                                        있습니다. 회원은 카드번호와
                                        개인정보를 입력함으로써 회사와 구독 계약을 체결하게 되며, 구독자는 구매 시점에 제시된 가격으로 구독자에게 계약기간 동안의 구독료를 청구하도록
                                        허용합니다.</font>
                                </p>
                                <p>
                                    <font face="한양중고딕"><br /></font>
                                </p>
                                <p>
                                    <font face="한양중고딕">회사가 구독계약 체결 전 자동으로 기간이 갱신된다는 사실을 고지한 경우에는, 구독자의 구독은 구독자 본인이 직접
                                        종료하거나, 회사에서 이를
                                        종료하지 않는 한, 계약기간 마지막 일자에 자동으로 갱신됩니다. 구독의 종료를 원할 경우 구독자는 매기간 마지막 일자에 갱신되기 전에 본 약관
                                        제5조에 명시된 방법에 따라
                                        구독을 취소해야 하며, 이외의 경우 다음 달 구독료가 구독자가 결제한 방법을 통해서 자동으로 결제됩니다.</font>
                                </p>
                                <p>
                                    <font face="한양중고딕"><br /></font>
                                </p>
                                <p>
                                    <font face="한양중고딕">제4조 (구독중 생성된 콘텐츠의 유효기간)</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">구독자가 구독 중 생성한 콘텐츠의 유효기간은 구독기간 내에 제한이 없으며, 사용자의 구독 콘텐츠 이용 시 이를
                                        고지합니다.
                                        이미 생성된 콘텐츠를 사용할 수 없게 된 경우, 사용자에게 이를 고지하고 사용자가 콘텐츠 요청 시 사용한 비용을 환급합니다.</font>
                                </p>
                                <p>
                                    <font face="한양중고딕"><br /></font>
                                </p>
                                <p>
                                    <font face="한양중고딕">제5조 (구독제 중단 및 환불)</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">회원님은 BMDS 홈페이지의 마이페이지에서 결제 내역을 확인하고 '구독해지' 버튼을 클릭하여 구독을 해지할 수
                                        있습니다. 회사는 구독자의 혜택을
                                        지속적으로 제공하기 위해 노력하고 있습니다. 다만, 아래의 사유로 인해 정기 구독 서비스가 중단될 수 있습니다.</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">① 강제 불가항력 사유: 악천후, 천재지변, 전쟁, 폭동, 화재, 파업 등 쟁의행위, 정부기관의 통제, 그리고 회사가
                                        합리적으로 제어할 수 없는
                                        기타 사유가 발생하거나 발생할 우려가 있는 경우</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">② 전기통신서비스 중단: 기간통신사업자로부터 전기통신서비스가 제공되지 않은 경우</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">③ 시스템 유지보수 및 장애: 회사의 시스템을 포함한 정보통신설비의 보수점검, 교체 또는 고장, 통신의 두절 등의
                                        사유가 발생한 경우</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">④ 제휴사업자의 변경 또는 중단: 제3자와의 제휴를 통하여 제공되는 서비스의 경우, 해당 제휴사업자의 사정에 따라
                                        변경되거나 중지되는 경우
                                    </font>
                                </p>
                                <p>
                                    <font face="한양중고딕">⑤ 기타 운영 저해 사유: 회사의 원활한 운영을 현저히 저해하는 사유가 발생한 경우</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">구독 서비스의 변경 또는 중단으로 인한 손해에 대해서는 회사가 고의 또는 과실이 없는 이상 책임을 부담하지 않습니다.
                                    </font>
                                </p>
                                <p>
                                    <font face="한양중고딕">정기 구독 서비스를 중단하면, 다음 결제가 청구될 날까지 BMDS에 액세스할 수 있습니다. 예를 들어, 처음 정기
                                        구독 서비스를 신청한 날이
                                        10일이면, 다음 결제일(10일) 전까지는 BMDS에 액세스할 수 있습니다.</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">"회원"이 구매한 유료서비스는 디지털 콘텐츠 특성상 결제환불 되지 않습니다. 따라서 결제 시에 신중하게 판단하여
                                        결제를 하여 주시기 바랍니다.
                                    </font>
                                </p>
                                <p>
                                    <font face="한양중고딕"><br /></font>
                                </p>
                                <p>
                                    <font face="한양중고딕">제6조 (서비스의 중단)</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">1. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장,
                                        통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을
                                        일시적으로 중단할 수 있습니다.</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">2. 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로
                                        서비스를 제공할 수 없게 되는 경우에는 회사는 이용자에게
                                        통지하거나, 이용자가 알아볼 수 있도록 공지사항으로
                                        게시합니다.</font>
                                </p>
                                <p>
                                    <font face="한양중고딕"><br /></font>
                                </p>
                                <p>
                                    <font face="한양중고딕">제7조 (회원에 대한 통지)</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">1. 회사는 이메일, 이동전화 단문메시지서비스(SMS),
                                        푸시알림(App push)등으로 회원에게 통지할 수 있습니다.</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">2. 회사는 불특정다수 회원에 대한 통지의 경우 공지사항으로
                                        게시함으로써 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의
                                        거래와 관련하여 중대한 영향을 미치는 사항에 대하여는
                                        개별통지를 합니다.</font>
                                </p>
                                <p>
                                    <font face="한양중고딕"><br /></font>
                                </p>
                                <p>
                                    <font face="한양중고딕">제8조 (구독 요금)</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">“정기 구독 서비스”의 월 이용요금의 구체적인 내용은 BMDS 홈페이지 내 게재하며, 구독 요금은 회사의 요금정책에
                                        따라 변경될 수 있습니다.
                                    </font>
                                </p>
                                <p>
                                    <font face="한양중고딕"><br /></font>
                                </p>
                                <p>
                                    <font face="한양중고딕">부칙</font>
                                </p>
                                <p>
                                    <font face="한양중고딕">본 약관은 2023년 11월 01일부터 적용됩니다.
                                    </font>
                                </p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/*eslint-disable */
import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
import BootPayDataService from '@/services/main/BootPayDataService';
import UserDataService from "@/services/main/UserDataService";
import AuthServiceMain from "@/services/main/auth/AuthService";
import CartCom from '@/components/main/CartCom.vue'
import jwtDecode from "jwt-decode";
import { Bootpay } from '@bootpay/client-js';
import { v4 as uuidv4 } from 'uuid';
export default {
    name: "TestPay",
    data() {
        return {
            userInfo: {},
            merchantUid: `mid_${uuidv4()}`,
            showOptions1: false,
            showOptions2: false,
            showOptions3: false,
            showOptions4: false,
            showOptions5: false,
        }
    },
    components: {
        CartCom, Nav, Footer
    },
    computed: {},
    methods: {
        isMobile() {
            return /Mobi|Android/i.test(navigator.userAgent);
        },
        classInfo1() {
            this.showOptions1 = !this.showOptions1;
        },
        classInfo2() {
            this.showOptions2 = !this.showOptions2;
        },
        classInfo3() {
            this.showOptions3 = !this.showOptions3;
        },
        classInfo4() {
            this.showOptions4 = !this.showOptions4;
        },
        classInfo5() {
            this.showOptions5 = !this.showOptions5;
        },

        classClose() {
            this.showOptions1 = false;
            this.showOptions2 = false;
            this.showOptions3 = false;
            this.showOptions4 = false;
            this.showOptions5 = false;
        },
        selectOption(v) {
            console.log(v);
        },
        openPhoneAddr() {
            console.log('fdfd');
        },
        openModal() {
            // 모달을 열기
            this.isModalOpen = true;
        },
        closeModal() {
            // 모달을 닫기
            this.isModalOpen = false;
        },
        getUser() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            return decodedToken;
        },
        async getUsr() {
            try {
                const response = await UserDataService.getUsr(this.getUser().id);
                this.userInfo = response.data;
                console.log('this.userInfo', this.userInfo);
            } catch (error) {
                console.error('Error in getUsr:', error);
            }
        },

        // 정기결제(구독결제)
        async onPayment(productName, price, subscribeMonthNum) {
            try {
                await this.getUsr();
                if (this.userInfo) {
                    const idNum = (new Date()).getTime();
                    const res = await Bootpay.requestSubscription({
                        application_id: process.env.VUE_APP_BOOTPAY_ID,
                        pg: 'nicepay',
                        price: price,
                        order_name: productName,
                        subscription_id: 'sid_' + idNum,
                        user: {
                            username: this.userInfo.name,
                            email: this.userInfo.email,
                            phone: this.userInfo.phoneNum
                        },
                        extra: {
                            subscription_comment: `${subscribeMonthNum}개월 동안 매월 ${price}원이 결제됩니다`,
                        }
                    });

                    if (res && res.event === 'done') {
                        alert('구독결제가 완료되었습니다!');
                        try {
                            var data = {
                                receipt_id: res.data.receipt_id,
                                username: this.userInfo.name,
                                email: this.userInfo.email,
                                phone: this.userInfo.phoneNum,
                                order_name: productName,
                                status_locale: res.data.receipt_data.status_locale
                            }
                            await BootPayDataService.saveBootpay(this.getUser().id, data);
                            this.$router.push('/main/mypage');

                        } catch (e) {

                        }
                    }
                }
            } catch (error) {
                console.error('Error in onPayment:', error);
            }
        },
        async onFreeTwoWeeks(level) {
            if (confirm('2주 무료체험을 시작하시겠습니까?')) {
                try {
                    if (this.getUser().role == 'basic') {
                        alert('이미 BMDS 무료체험을 진행하셨습니다. \n BMDS를 이용하시려면 구독결제를 해주세요.');
                    }
                    else {
                        let data = {
                            level: level
                        }
                        await BootPayDataService.onFreeTwoWeeks(this.getUser().id, data);
                        alert('이용해 주셔서 감사합니다! \n 비즈니스 모델을 작성할 수 있는 "My BM 설계"로 화면을 이동합니다!');
                        this.$router.push('/main/bmds/buildup/list');
                    }
                }
                catch (e) {
                    console.log('e', e.response.data.message)
                }
            }
        },
        // 단일결제
        async requestPay(payRole, subscribeMonthNumber, price, bmCreationNum) {
            try {
                let verification = {
                    merchant_uid: this.merchantUid,
                    amount: price
                }
                // 결제금액 사전 검증
                const response = await BootPayDataService.payVerification(verification);
                if (response.data.code == 0) {
                    // 이곳에서 함수 호출
                    IMP.init('imp47860156');
                    const tokenData = localStorage.getItem("user");
                    const parsedToken = JSON.parse(tokenData);
                    const accessToken = parsedToken.accessToken;
                    const decodedToken = jwtDecode(accessToken);
                    const userId = decodedToken.id;
                    if (!this.isMobile()) {
                        IMP.request_pay({
                            pg: "html5_inicis.MOI6801286",
                            pay_method: "card",
                            merchant_uid: this.merchantUid,
                            amount: price,
                            name: payRole,
                            subscribeMonthNumber: subscribeMonthNumber,
                            buyer_name: this.userInfo.name,
                            buyer_tel: this.userInfo.phoneNum,
                            buyer_email: this.userInfo.email,
                        }, async function (res) {
                            if (res.success) {
                                try {
                                    const data = {
                                        merchantUid: res.merchant_uid,
                                        productPrice: res.paid_amount,
                                        productName: res.name,
                                        subscribeMonthNum: subscribeMonthNumber,
                                        bmCreationNum: bmCreationNum,
                                        buyerName: res.buyer_name,
                                        buyerTel: res.buyer_tel,
                                        buyerEmail: res.buyer_email,
                                        status: res.status,
                                    }

                                    const result = await BootPayDataService.createPortone(userId, data);
                                    if (result) {
                                        if (confirm('결제가 성공적으로 완료되었습니다.\n원활한 사용을 위해 다시 로그인해 주시길 바랍니다!')) {
                                            AuthServiceMain.logout();
                                            localStorage.removeItem("user");
                                            window.location = "/main/MemberLogin";
                                        }
                                    }
                                }
                                catch (e) {
                                    console.log(e);
                                }
                            }
                        });
                    }
                    else if (this.isMobile()) {
                        let mobileData = {
                            merchantUid: this.merchantUid,
                            productPrice: price,
                            productName: payRole,
                            subscribeMonthNum: subscribeMonthNumber,
                            bmCreationNum: bmCreationNum,
                            buyerName: this.userInfo.name,
                            buyerTel: this.userInfo.phoneNum,
                            buyerEmail: this.userInfo.email,
                        }
                        IMP.request_pay({
                            pg: "html5_inicis.MOI6801286",
                            pay_method: "card",
                            merchant_uid: this.merchantUid,
                            amount: price,
                            name: payRole + '/' + subscribeMonthNumber + '/' + bmCreationNum,
                            buyer_name: this.userInfo.name,
                            buyer_tel: this.userInfo.phoneNum,
                            buyer_email: this.userInfo.email,
                            m_redirect_url: `https://bmds.co.kr/main/testPay`
                        }
                        )
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        },
    },
    async mounted() {
        this.getUsr();
    }

}
</script>

<style scoped>
@import url('../../../public/css/main/styles.css');

.vertical-dashed-line {
    border-left: 2px dotted #ADADAD;
    height: 30rem;
    margin: 0 10px;
}

.items {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.itemBuildUp,
.itemBasic,
.itemPremium {
    width: 240px;
    height: 37rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    position: relative;
    z-index: 1;
}

.itemPay {
    width: 170px;
    height: 37rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    position: relative;
    /* z-index: 1; */
}

.itemBuildUpNoClick {
    width: 360px;
    height: 35rem;
    border-radius: 15px;
    background-color: rgba(128, 128, 128, 0.5);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 30px;
    font-weight: 600;
    position: absolute;
}

.premiumNoClick {
    padding: 9px 2px;
    border-radius: 15px;
    background-color: rgba(128, 128, 128, 0.5);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 15px;
    font-weight: 600;
    position: absolute;
}

.SConsultantNoClick {
    padding: 33px 28px;
    border-radius: 15px;
    background-color: rgba(128, 128, 128, 0.5);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 17px;
    font-weight: 600;
    position: absolute;
}

#fontColorChange1 {
    color: #584a87;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#fontColorChange2 {
    color: #584a87;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#fontColorChange1:hover .itemPay {
    color: white;
    cursor: pointer;
    background: #1C1852;
    border: none;
}

#fontColorChange1:hover .chooseFreeBtn {
    color: white;
    background-color: #754CED;
}

#fontColorChange1:hover .chooseRoleBtn {
    color: white;
    background-color: #754CED;
}

#fontColorChange1:hover .freeBtn {
    color: #754CED;
    background-color: white;
}



#fontColorChange1:hover .freeText {
    color: white;
}

#fontColorChange1:hover .roleBtn {
    color: #754CED;
    background-color: white;
}

#fontColorChange1:hover .roleText {
    color: white;
}

#fontColorChange1:hover+.chooseRoleBtn {
    color: white;
    background-color: #754CED;
}

.chooseRoleBtn:hover {
    color: white;
    background-color: #754CED;
}

.chooseRoleBtn:hover+#fontColorChange1 {
    color: white;
    cursor: pointer;
    background: #1C1852;
}

.chooseFreeBtn {
    width: 13rem;
    height: 3rem;
    border: 1px solid #754CED;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
    color: #754CED;
    cursor: pointer;
    background-color: #F6F4FD;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
}

.chooseRoleBtn {
    width: 9rem;
    height: 3rem;
    border: 1px solid #754CED;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
    color: #754CED;
    cursor: pointer;
    background-color: #F6F4FD;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btnColorChange {
    border-radius: 15px;
    font-size: 15px;
    font-weight: 600;
    color: #7E58ED;
    cursor: pointer;
    background-color: #F6F4FD;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btnColorChange:hover {
    color: #F6F4FD;
    background-color: #7E58ED;
}

.btnColorChange2 {
    border-radius: 15px;
    font-size: 15px;
    font-weight: 600;
    color: #7E58ED;
    cursor: pointer;
    background-color: #F6F4FD;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btnColorChange2:hover {
    color: #F6F4FD;
    background-color: #7E58ED;
}



.subTitleBasic {
    font-size: 30px;
    font-weight: 600;
    color: #584987;
}

.subTitleBuildUp {
    font-size: 25px;
    font-weight: 600;
    color: #ffc000;
}

.subTitlePremium {
    font-size: 25px;
    font-weight: 600;
    color: #1968c1;
}

.subtitle2 {
    font-size: 30px;
    font-weight: 600;
}


.modal-dialog-scrollable .modal-content2 {
    max-height: 100%;
    overflow: hidden;
}

.modal-content2 {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--bs-modal-color);
    pointer-events: auto;
    background-color: var(--bs-modal-bg);
    background-clip: padding-box;
    border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
    border-radius: var(--bs-modal-border-radius);
    outline: 0;
}

.custom-modal-content {
    background-color: #f8f9fa;
    color: #495057;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 15px;
    margin-top: 1rem;
}

.custom-modal-content p {
    margin: 8px 0;
    /* 단락 간 여백 조정 */
}

.border {
    border: 1px solid #ced4da;
    /* 테두리 스타일 지정 */
}

.rounded {
    border-radius: 8px;
    /* 모서리 둥글게 만들기 */
}

.monthPay1 {
    width: 300px;
    height: 32rem;
    background: white;
    border: 2px solid #7E58ED;
    border-radius: 10px;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    position: absolute;
    left: 50%;
    z-index: 999;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.monthPay2 {
    width: 300px;
    height: 32rem;
    background: white;
    border: 2px solid #7E58ED;
    border-radius: 10px;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    position: absolute;
    left: 100%;
    z-index: 999;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.monthPay3 {
    width: 300px;
    height: 32rem;
    background: white;
    border: 2px solid #7E58ED;
    border-radius: 10px;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    position: absolute;
    left: 50%;
    z-index: 999;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.monthPay4 {
    width: 300px;
    height: 32rem;
    background: white;
    border: 2px solid #7E58ED;
    border-radius: 10px;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    position: absolute;
    left: 100%;
    z-index: 999;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.monthPay5 {
    width: 300px;
    height: 11rem;
    background: white;
    border: 2px solid #7E58ED;
    border-radius: 10px;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    position: absolute;
    top: 71%;
    left: 37.4%;
    z-index: 999;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.firstArea {
    width: 100%;
    height: 9rem;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px dotted #A884F9;
    line-height: 30px;
}

.secondArea {
    width: 100%;
    height: 9rem;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    line-height: 30px;
}

#mouseUp {
    position: relative;
}

#mouseUp:hover>#fontColorChange1 {
    color: white;
    padding: 1rem;
    cursor: pointer;
    /* transform: translateY(-50px); */
    background: #1C1852;
}


.payBtn {
    width: 100%;
    height: 3.5rem;
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #754CED;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.payBtn2 {
    width: 100%;
    height: 3.5rem;
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #754CED;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.freeBtn {
    width: 100%;
    height: 2.5rem;
    padding: 10px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #754CED;
    border-radius: 10px;
}

.freeText {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #754CED;
}

.roleBtn {
    width: 100%;
    height: 2.5rem;
    padding: 10px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #7D48F6;
    border-radius: 10px;
}

.roleText {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #754CED;
    line-height: 30px;
}

.discountBorder {
    padding: 0 10px;
    border-radius: 15px;
    font-weight: 600;
    color: #7D48F6;
    background: white;
    line-height: 18px;
}

.discountBorder .percent {
    font-size: 11px;
}

.discountPrice {
    position: relative;
    font-size: 16px;
    line-height: 21px;
}

.originalPrice {
    color: #D8C8FC;
}

.arrow {
    position: relative;
    color: #D8C8FC;
    font-size: 14px;
}

.arrow::before {
    content: "\25B6";
    position: absolute;
    top: 35%;
    left: 0;
    transform: translateY(-50%);
    margin-right: 5px;
    font-size: 12px;
    /* 화살표 크기 조절 */
}
</style>
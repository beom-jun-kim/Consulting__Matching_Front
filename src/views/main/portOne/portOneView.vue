<template>
  <div class="imp-container">
    <h1>아임포트 결제</h1>
    <form @submit="handleSubmit">
      <form-item label="PG사">
        <select v-model="pg" size="large" @change="handlePg">
          <option :key="pg.value" v-for="pg in pgs" :value="pg.value">
            {{ pg.label }}
          </option>
        </select>
      </form-item>
      <form-item label="결제수단">
        <select v-model="payMethod" size="large" @change="handleMethod">
          <option
            :key="method.value"
            v-for="method in methods"
            :value="method.value"
          >
            {{ method.label }}
          </option>
        </select>
      </form-item>
      <form-item label="에스크로 결제여부" class="imp-payment-escrow">
        <input type="checkbox" v-model="escrow" />
      </form-item>
      <form-item label="입금기한" v-if="vbankDueVisible">
        <input
          v-model="vbankDue"
          placeholder="YYYYMMDDhhmm"
          size="large"
          type="number"
        />
      </form-item>
      <form-item label="사업자번호" v-if="bizNumVisible">
        <input
          v-decorator="[
            'bizNum',
            {
              rules: [
                { required: true, message: '사업자번호는 필수입력입니다' },
              ],
            },
          ]"
          size="large"
          type="number"
        />
      </form-item>
      <form-item label="할부개월수" v-if="quotaVisible">
        <select v-model="selectedQuota" size="large">
          <option v-bind:key="quota" v-for="quota in quotas" :value="quota">
            {{
              quota === "0"
                ? "PG사 기본제공"
                : quota === "1"
                ? "일시불"
                : `${quota}개월`
            }}
          </option>
        </select>
      </form-item>

      <form-item label="주문번호">
        <input v-model="merchantUid" size="large" />
      </form-item>
      <form-item label="주문명">
        <input v-model="name" size="large" />
      </form-item>
      <form-item label="결제금액">
        <input v-model.number="amount" size="large" type="number" />
      </form-item>
      <form-item label="이름">
        <input v-model="buyerName" size="large" />
      </form-item>
      <form-item label="연락처">
        <input v-model.number="buyerPhone" size="large" type="number" />
      </form-item>
      <form-item label="이메일">
        <input v-model="buyerEmail" size="large" />
      </form-item>
      <form-item label="주소">
        <input v-model="buyerAddr" size="large" />
      </form-item>
      <form-item label="우편번호">
        <input v-model.number="buyerPostcode" size="large" type="number" />
      </form-item>

      <button size="large" @click="handleGoBack">뒤로가기</button>
      <button type="primary" html-type="submit" size="large">결제하기</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable  */
import { PGS } from "@/constants.js";
import Utils from "@/utils.js";
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "payment" }),
      initialMerchantUid: `mid_${new Date().getTime()}`,
      pgs: PGS,
      methods: Utils.getMethodsByPg(),
      quotas: Utils.getQuotaByPg(),
      initialMethod: "card",
      vbankDueVisible: false,
      bizNumVisible: false,
      quotaVisible: true,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const {
            pg,
            payMethod,
            escrow,
            vbankDue,
            bizNum,
            quota,
            merchantUid,
            name,
            amount,
            buyerName,
            buyerTel,
            buyerEmail,
            buyerAddr,
            buyerPostcode,
          } = values;
          const { IMP } = window;
          IMP.init(Utils.getUserCodeByPg(pg));
          const data = {
            pg,
            pay_method: payMethod,
            escrow,
            merchant_uid: merchantUid,
            name,
            amount,
            buyer_name: buyerName,
            buyer_tel: buyerTel,
            buyer_email: buyerEmail,
            buyer_addr: buyerAddr,
            buyer_postcode: buyerPostcode,
            niceMobileV2: true,
          };

          if (payMethod === "vbank") {
            data.vbank_due = vbankDue;
            if (pg === "danal_tpay") {
              data.biz_num = bizNum;
            }
          }
          if (payMethod === "card") {
            data.display = {
              card_quota: quota,
            };
          }
          IMP.request_pay(data, this.callback);
        }
      });
    },
    handlePg(pg) {
      const newMethods = Utils.getMethodsByPg(pg);
      const [{ value }] = newMethods;

      this.methods = Utils.getMethodsByPg(pg);
      this.form.setFieldsValue({
        payMethod: value,
      });

      this.setVisible(pg, value);
    },
    handleMethod(method) {
      const pg = this.form.getFieldValue("pg");
      this.setVisible(pg, method);
    },
    setVisible(pg, method) {
      // 가상계좌 입금기한 렌더링 여부
      const vbankDueVisible = method === "vbank";
      this.vbankDueVisible = vbankDueVisible;

      // 사업자 번호 렌더링 여부
      this.bizNumVisible = pg === "danal_tpay" && vbankDueVisible;

      // 할부개월수 렌더링 여부
      this.quotaVisible = method === "card";
    },
    handleGoBack() {
      this.$router.push("/");
    },
    callback(response) {
      // 본인인증 종료 후 result 페이지로 이동
      const query = {
        ...response,
        type: "payment",
      };
      this.$router.push({ path: "/result", query });
    },
  },
};
</script>

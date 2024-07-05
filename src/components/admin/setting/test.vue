<template>
    <div>
        <form @submit.prevent="submit">
            <input type="text" v-model="card.number" placeholder="카드번호" />
            <input type="text" v-model="card.expMonth" placeholder="유효기간(월)" />
            <input type="text" v-model="card.expYear" placeholder="유효기간(년)" />
            <input type="text" v-model="card.cvc" placeholder="CVC" />
            <button type="submit">결제하기</button>
        </form>
    </div>
</template>
  
<script>
/*eslint-disable*/
import PaymentService from '@/services/payment';

export default {
    name: 'test',
    data() {
        return {
            card: {
                number: '',
                expMonth: '',
                expYear: '',
                cvc: '',
            },
        };
    },
    methods: {
        submit() {
            PaymentService.createPayment(10000, this.card).then((response) => {
                console.log(response);
            });
        },
    },
};
</script>
<style>
@import "../../../../public/css/admin/styles.css";
</style>
  
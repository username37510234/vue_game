<template>
    <div>
        <div>당첨 숫자</div>
        <div id="결과창">
            <lotto-balls v-for="ball in printBalls" :number="ball"></lotto-balls>
        </div>
        <div>보너스</div>
            <lotto-balls v-if="redo && bonus" :number="bonus"></lotto-balls>
        <div>
            <button v-if="redo && bonus" @click="doLotto()">한 번 더</button>
        </div>
    </div>
</template>
<script>
import LottoBalls from './subComponents/LottoBall.vue'
    export default {
        components: {
            LottoBalls
        },
        data() {
            return {
                winBalls: [],
                printBalls: [],
                bonus: Number,
                redo: false,
            }
        },
        computed: {
            
        },
        mounted () {
            this.doLotto();
        },
        methods: {
            doLotto() {
                this.bonus = Number;
                this.redo = false;
                this.winBalls = [];
                this.printBalls = [];
                const pool = Array(45).fill().map((v,i)=>i+1);
                for (let i=0; i < 7; i++) {
                    this.winBalls.push((pool.splice(Math.random() * pool.length, 1)[0]));
                }
                this.bonus = this.winBalls.pop();
                this.winBalls.sort();
                this.winBalls.forEach((ball, index) => {
                    setTimeout(() => {
                        this.printBalls.push(ball);
                    }, 500 * (1 + index));
                });
                setTimeout(() => {
                    this.redo = true;
                }, 500 * 7);
            }
        },
        watch: {
            bonus(value, oldValue) {
                console.log(value,oldValue)
            }
        }
    }
</script>
<template>
    <div>
        <div id="computer"></div>
        <div>{{ message }}</div>
        <div>
            <button @click="this.ThreeSelect()">바위</button>
            <button @click="this.ThreeSelect()">가위</button>
            <button @click="this.ThreeSelect()">보</button>
        </div>
        <div>{{ result }}</div>
        <div>현재 {{  games[0] }}전 {{ games[1] }}승 {{ games[2] }}무 {{ games[3] }}패로 총합  {{ score }}점입니다.</div>
    </div>
</template>
<script>
    const tactics =  ['가위','바위','보'];
    export default {
        data() {
            return {
                result: '',
                games: [0,0,0,0],
                message: '가위, 바위, 보 중 하나를 선택해주세요.'
            }
        },
        computed: {
            score() {
                return (this.games[1] * 2) + (this.games[2] * 0) + (this.games[3] * -1);
            }
        },
        methods: {
            ThreeSelect(el) {
                console.log(el)
                this.games[0] += 1;
                const result = Math.random() * 3;
                if (result > 2) {
                    this.games[1] += 1;
                    this.result = '승리!';
                } else if (result > 1) {
                    this.games[2] += 1;
                    this.result = '무승부';
                } else {
                    this.games[3] += 1;
                    this.result = '패배...';
                }
            }
        },
    }
</script>
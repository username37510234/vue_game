<template>
    <div>
        Game Area
    </div>
    <div>
        <select @change="selectGame()" ref="games" id="games">
            <option value="" selected disabled hidden>게임을 선택해주세요</option>
            <option value="ThreeSelectGame">가위바위보</option>
            <option value="LottoBallGame">로또</option>
            <option value="TicTacToe">틱택토</option>
        </select>
    </div>
    <div>
        <h1>{{selectedGame}}</h1>
        <component v-bind:is="selectedGame"></component>
    </div>
</template>
<script>
import ThreeSelectGame from './games/ThreeSelectGame.vue';
import LottoBallGame from './games/LottoBallGame.vue';
import TicTacToe from './games/TicTacToe.vue';
export default {
    components: {
        ThreeSelectGame,
        LottoBallGame,
        TicTacToe,
    },
    data() {
        return {
            selectedGame: ''
        }
    },
    methods: {
        selectGame() {
            this.selectedGame = this.$refs.games.value
            console.log(this.$refs.games.value)
        }
    }
}
</script>
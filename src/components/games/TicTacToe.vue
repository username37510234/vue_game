<template>
    <div>
        <div>틱택토</div>
        <TableComponent :table-data="tableData" :turnName="turnName"></TableComponent>
        <div v-if="!resultMessage && typeof result != 'boolean'">{{ turnName }}님의 턴입니다.</div>
        <div>{{ resultMessage }}</div>
        <div>{{ redoMessage }}</div>
        <div v-if="typeof result == 'boolean'"><button @click="reDo(this.turn)">다시하기</button></div>
    </div>
</template>
<script>
import TableComponent from './subComponents/ticTacToeComponent/TableComponent.vue';
export default {
    components: {
        TableComponent,
    },
    data() {
        return {
            tableData: [
                ['','',''],
                ['','',''],
                ['','',''],
            ],
            result: Boolean,
            resultMessage: '',
            redoMessage: '',
            turn: true,
            turns: 0,
            names: ['O','X']
        }
    },
    methods: {
        toggleTurn() {
            if (typeof this.result === 'boolean') return;
            this.turn = !this.turn;
        },
        gameCheck() {
            this.turns += 1;
            for (let i = 0; i < this.tableData.length; i++) {
                if ((this.tableData[i][0] != '' && (this.tableData[i][0] == this.tableData[i][1] && this.tableData[i][1] == this.tableData[i][2])) || (this.tableData[0][i] != '' && (this.tableData[0][i] == this.tableData[1][i] && this.tableData[2][i] == this.tableData[1][i]))) {
                    this.gameSet();
                    return;
                }
            }
            if ((this.tableData[0][0] != '' && this.tableData[0][0] == this.tableData[1][1] && this.tableData[1][1] == this.tableData[2][2]) || (this.tableData[1][1] != '' && this.tableData[0][2] == this.tableData[1][1] && this.tableData[1][1] == this.tableData[2][0])) {
                this.gameSet();
                return;
            }
            if (this.turns === 9) {
                this.toggleTurn();
                this.result = false;
                this.resultMessage = '승부가 나지 않았습니다.';
                this.redoMessage = '다시하기를 누르면 ' + this.turnName + '님 부터 다시 시작합니다.';
                if (this.names[0] != this.turnName) {
                    let tmp = this.turnName;
                    this.names[1] = this.names[0];
                    this.names[0] = tmp;
                }
            }
            this.toggleTurn();
        },
        gameSet() {
            this.result = this.turn;
            this.resultMessage = this.turnName + '님이 ' + this.turns + '턴만에 승리하셨습니다.'
            this.redoMessage = '다시하기를 누르면 ' + this.turnName + '님 부터 다시 시작합니다.';
            this.turn = true;
        },
        reDo() {
            this.tableData = [
                ['','',''],
                ['','',''],
                ['','',''],
            ]
            this.result = Boolean;
            this.resultMessage = '';
            this.redoMessage = '',
            this.turn = true;
            this.turns = 0;
        }
    },
    computed: {
        turnName() {
            return this.turn ? this.names[0] : this.names[1];
        }
    },
    provide() {
        return {
            turnName: this.turnName,
            gameCheck: this.gameCheck,
        }
    },
    watch: {
        turns(value, oldValue) {
            if (value === 9) {
            }
        }
    }
}
</script>

<style>
table {
    border-collapse: collapse;
}
td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center
}
</style>
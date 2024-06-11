<template>
    <td @click="onClickTd()">
        {{ cellData }}
    </td>
</template>
<script>
export default {
    props: {
        cellData: String,
        cellIndex: Number,
        rowIndex: Number,
        turn: String,
        turnName: String,
    },
    inject: ['gameCheck'],
    methods: {
        onClickTd() {
            const tictactoeData = this.$parent.$parent.$parent.$data;
            if (this.cellData === '' && typeof tictactoeData.result != 'boolean') {
                tictactoeData.tableData[this.rowIndex][this.cellIndex] = this.turnName;
                this.gameCheck();
            }
        }
    },
}
</script>
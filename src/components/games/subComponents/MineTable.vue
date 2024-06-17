<template>
    <div>
        <table>
            <tr v-for="(minesRow,rowIndex) in minesMap" :key="'mineRow'+rowIndex">
                <td v-for="(mines,cellIndex) in minesRow" :key="'mineCell'+cellIndex"
                :class="!mines.clear ? '' : mines.mine ? 'mine' : 'safe'">
                    {{ mines.mine }}
                    {{ mines.clear }}
                </td>
            </tr>
        </table>
    </div>
</template>
<script>

export default {
    props: {
        minesMap: Array
    },
}
</script>

<style scoped>
.mine {
    background-color: red;
}
</style>
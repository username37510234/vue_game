<template>
    <div>
        <table>
            <tr v-for="(minesRow,rowIndex) in minesMap" :key="'mineRow'+rowIndex">
                <td v-for="(mines,cellIndex) in minesRow" :key="'mineCell'+cellIndex"
                :class="!mines.clear ? '' : mines.mine ? 'mine' : 'safe'">
                    {{ mines.mine }}
                    {{ mines.clear }}
                    {{ mines.install }}
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['mineState', 'minesMap']),
    }
}
</script>

<style scoped>
.mine {
    background-color: red;
}
</style>
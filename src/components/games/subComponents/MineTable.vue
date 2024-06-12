<template>
    <div>
        <table>
            <tr v-for="(minesRow,rowIndex) in minesMap" :key="'mineRow'+rowIndex">
                <td v-for="(mines,cellIndex) in minesRow" :key="'mineCell'+cellIndex">
                    {{ mines }}
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
<template>
    <table>
        <TrComponent v-for="(rowData, index) in tableData" :rowData="rowData" :rowIndex="index" :turnName="turnName"></TrComponent>
    </table>
</template>
<script>
import TrComponent from './TrComponent.vue';
export default {
    components: {
        TrComponent,
    },
    props: {
        tableData: Array,
        turnName: String,
    }
}
</script>
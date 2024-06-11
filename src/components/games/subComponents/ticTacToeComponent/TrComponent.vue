<template>
    <tr>
        <TdComponent v-for="(cellData,index) in rowData" :cellData="cellData" :cellIndex="index" :rowIndex="rowIndex" :turnName="turnName" />
    </tr>
</template>

<script>
import TdComponent from './TdComponent.vue';
export default {
    components: {
        TdComponent,
    },
    props: {
        rowData: Array,
        rowIndex: Number,
        turnName: String,
    }
}
</script>
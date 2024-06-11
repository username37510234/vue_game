<template>
    <div class="ball" :style="{ background }">
        <h3 style="color:black;text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;">{{ number }}</h3>
    </div class="ball">
</template>
<script>
    export default {
        name: 'LottoBall',
        props: {
          number: Number,  
        },
        computed: {
            background() {
                return this.number < 10 ? 'red' : this.number < 20 ? 'orange' : this.number < 30 ? 'yellow' : this.number < 40 ? 'blue' : 'green'
            }
        }
    }
</script>
<style scoped>
    .ball {
        display: inline-block;
        border: 1px solid black;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
        margin-right: 20px;
    }
</style>
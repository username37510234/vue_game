<template>
    <div>
        {{ mineState }}
        <form v-if="mineState=='ready'">
            세로 : <input type="number" @change="setMinesMap()" ref="row" min="0" max="100" name="row" id="row" value="10">
            가로 : <input type="number" @change="setMinesMap()" ref="cell" min="0" max="100" name="cell" id="cell" value="10">
            지뢰 개수 : <input type="number" @change="setMinesMap()" :min="minMines" :max="maxMines" name="mines" id="mines" value="10">
            <div>
                <button type="button" @click="makeMines()">만드러주세요</button>
            </div>
        </form>
        <template v-else-if="mineState=='mining'">
            <div> 지뢰찾기 {{ time }} 초 째 </div>
            <MineTable :minesMap="minesMap" />
        </template>
    </div>
</template>
<script>
import MineTable from './subComponents/MineTable.vue'
import { mapState, mapMutations } from 'vuex'

export default {
    components: {
        MineTable,
    },
    data() {
        return {
            minesMap: [],
            minMines:0,
            maxMines:0,
            setting:{
                row:10,
                cell:10,
                mines:10,
            },
            time:0,
        }
    },
    mounted() {
        this.$store.commit['changeMineState', 'ready'];
        this.minesMap = [];
        // this.minesMap = [['',''],['','']]
    },
    computed: {
        ...mapState(['mineState']),
        // ...mapMutations(['ongoingMining', 'readyMining']),
        minMines() {
            return Math.min(this.setting.row, this.setting.cell);
        },
        maxMines() {
            return this.setting.row * this.setting.cell;
        }
    },
    methods: {
        setMinesMap() {
            console.log(this.setting)
            console.log(this.mineState)
            console.log(this.$store)
            console.log(this.$store.state)
            console.log(this.$store.state.mineState)
            this.setting.row = Number(document.querySelector('#row').value);
            this.setting.cell = Number(document.querySelector('#cell').value);
            this.setting.mines = Number(document.querySelector('#mines').value);
        },
        makeMines() {
            this.$store.commit['changeMineState', 'mining'];
            // this.minesMap = Array.from(Array(this.setting.row), ()=> Array(this.setting.cell));
            let totalMines = this.setting.mines;
            let count = 0;
            const size = this.setting.row * this.setting.cell;
            for (let i=0; i < this.setting.row; i++) {
                let tmpArray = []
                for (let j=0; j < this.setting.cell; j++) {
                    let flag = false;
                    if (Math.random() * (size-(i*10 + j)) <= totalMines) {
                        flag = true;
                        totalMines--;
                    }
                    tmpArray.push({
                        mine: flag,
                        clear: false,
                    })
                    count++;
                }
                this.minesMap.push(tmpArray)
            }
        }
    },
    unmounted() {
        
    }
}

</script>
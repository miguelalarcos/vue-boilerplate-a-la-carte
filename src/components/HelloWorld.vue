<template>
  <div class="hello" v-if="$subsReady">
    <!--<number-input v-model="age"></number-input>
    <span class="red">{{$store.state.errors.age}}</span>-->
    <h1>el umbral está en {{ max }}:</h1>
    <v-btn @click="create">Crear contador a 0</v-btn>
    <!--https://vuejs.org/v2/guide/transitions.html-->
    <transition-group name="fade" tag="div">
      <div class="pointer" @click="inc(c.id, 1)" v-bind:key="c.id" v-for="c in myCounters">
        {{ c.x }}
      </div>  
    </transition-group>
    <v-btn @click="suma">2 + 3 = </v-btn>
    <span>{{valor}}</span> 
    <v-btn @click="$closeSocket">cerrar socket</v-btn>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import { SDP_Mixin, sdpComputed } from '../sdp'
import numberInput from '@/components/numberInput'
export default {
  name: 'HelloWorld',
  mixins: [SDP_Mixin],
  props: {
    msg: String
  },
  predicates: {
    maxChange: ['x_less_than', 'max']
  },
  data(){
    return {
      valor: null,
      max: 5
    }
  },
  computed: {
    maxChange(){
      return sdpComputed(this, 'max')
      //return {isConnected: this.isConnected, max:this.max}
    },
    myCounters(){
      return this.$store.state.sdp.subs.x_less_than
    },
    age: {
        get() {
            return this.$store.state.form.age
        },
        set(value) {
            this.$store.commit('setAge', value)
        }
    }
  },
  components: {numberInput},
  methods: {
    async create(){
      await this.$rpc('create', {})
    },
    async suma(){
      this.valor = await this.$rpc('add', {a: 2, b: 3})
    },
    async inc(id, value){
      this.$rpc('increment', {id, value})
    }
  }/*,
  watch: {
    maxChange: {
      immediate: true,
      // eslint-disable-next-line
      handler(newVal, oldVal){
        const {isConnected, max} = newVal
        if(isConnected){
          this.$sub('x_less_than', {max})
        }
        else
          console.log('connecting...')
      }
    }
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red{
  color: red;
}
.pointer{
  cursor: pointer;
}
</style>
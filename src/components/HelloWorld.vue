<template>
  <div class="hello" v-if="$subsReady">
    <number-input v-model="age"></number-input>
    <span class="red">{{$store.state.errors.age}}</span>
    <h1>{{ msg }}, el umbral está en {{ max }}:</h1>
    <div class="pointer" @click="inc(c.id, 1)" v-bind:key="c.id" v-for="c in myCounters">
      {{ c.x }}
    </div>  
    <v-btn @click="suma">2 + 3 = </v-btn>
    <span>{{valor}}</span> 
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import { SDP_Mixin } from '../sdp'
import numberInput from '@/components/numberInput'
export default {
  name: 'HelloWorld',
  mixins: [SDP_Mixin],
  props: {
    msg: String
  },
  data(){
    return {
      valor: null,
      max: 5
    }
  },
  computed: {
    maxChange(){
      return {isConnected: this.isConnected, max:this.max}
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
    async suma(){
      this.valor = await this.$rpc('add', {a: 2, b: 3})
    },
    async inc(id, value){
      this.$rpc('increment', {id, value})
    }
  },
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
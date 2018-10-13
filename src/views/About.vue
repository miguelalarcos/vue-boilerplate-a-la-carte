<template>
  <div class="about">
    <h1>This is an about page</h1>
    <number-input v-model="age"></number-input>
    <span>{{$store.state.errors.age}}</span>
  </div>
</template>

<script>
import numberInput from '@/components/numberInput'
export default {
  name: 'About',
  data(){
    return {
    }
  },
  computed: {
    age: {
        get() {
            return this.$store.state.form.age
        },
        set(value) {
            this.$store.commit('setAge', value)
        }
    }
  },
  components: {numberInput}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
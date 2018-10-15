<template>
    <div>
        <transition-group name="fade" tag="div">
            <div v-bind:key="m.id" v-for="m in messages">
                <div>{{ m.msg }}</div>
                <div>{{ m.user }}, {{ m.timestamp }}</div>
            </div>  
        </transition-group>
        <v-textarea
          v-model="msg"
          name="input-7-1"
        ></v-textarea>
        <v-btn @click="newMessage">Enviar</v-btn>
        <v-btn v-show="$store.state.jwt !== null" @click="assign">Asignar</v-btn>
        <v-btn @click="close">Cerrar</v-btn>
    </div>
</template>

<script>  
  import { SDP_Mixin } from '../sdp'

  export default {
    mixins: [SDP_Mixin],
    props: {roomInitial: String},
    data(){
        return {
            room: this.roomInitial,
            msg: ''
        }
    },
    computed: {
        messages(){
            return this.$store.state.sdp.subs.messages_of_room
        },
    },
    watch:{
        isConnected(connected){
            if(connected && this.room)
                this.$sub('messages_of_room', {room: this.room})
        }
    },
    methods: {
        async close(){
            await this.$rpc('close_room', {room: this.room})
        },
        async newMessage(){
            if(this.room === null){
                this.room = await this.$rpc('create_room')
            }
            this.$rpc('new_message', {room: this.room, msg: this.msg})
        },
        async assign(){
            this.$rpc('set_owner_of_room', {room: this.room})
        }
    }
  }
</script>

<style scoped>
    
</style>
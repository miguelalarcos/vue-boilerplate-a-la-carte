<template>
    <div>
        <div v-bind:key="r.id" v-for="r in rooms">
        <chat :initialRoom="r.id"></chat>    
        </div> 
    </div>
</template>

<script>  
  import Chat from '@/components/Chat'
  import { SDP_Mixin } from '../sdp'

  export default {
    mixins: [SDP_Mixin],
    data(){
        return {
            
        }
    },
    components: {
        Chat
    },
    computed: {
        rooms(){
            return this.$store.state.sdp.subs.open_chat_rooms
        },
    },
    created(){
        this.$sub('open_chat_rooms', {})
    },
    /*watch:{
        isConnected(connected){
            if(connected && this.room)
                this.$sub('open_chat_rooms')
        }
    },*/
    methods: {
        
    }
  }
</script>

<style scoped>
    
</style>
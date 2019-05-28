<template>
  <v-form>
    <v-container>
        <v-layout>
            <v-flex xs12 md3 >
                    <v-text-field
                    v-model="name"
                    label="username"
                    data-vv-name="name"
                    class="usrnm"
                    ></v-text-field>
            </v-flex>
            <v-flex xs12 md9 >
                <v-text-field
                v-model="msg"
                label="message"
                data-vv-name="msg"
                class="msg"
                ></v-text-field>
            </v-flex>
            <v-btn
            color="success"
            @click="addChat">send</v-btn>
        </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
 name: 'AddChat',
 data(){
        return {
         name: '',
         msg: ''
        }
    },
    methods: {
        addChat(evt) {
            evt.preventDefault();
            const newChat = {
                name: this.name,
                msg : this.msg,
            }
            //send to parent 
            this.$emit('add-chat', newChat);
            this.name = ''
            this.msg = ''
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        padding: 1%;
        width: 52%;
    }
    .v-btn{
        background-color: #8BC34A !important;
    }
    @media (max-width: 768px) {
        form{
            width: auto;
        }
    }
    @media (max-width: 575.98px) { 
        form{
            width: 90%;
        }
        .container{
            padding:0;
        }
        .v-form>.container>.layout{
            flex-direction: column;
        }
    }
</style>


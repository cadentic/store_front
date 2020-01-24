<template>
  <div style="background: #f3b8af;">
    <AppHeader/>
    <Section/>
    <MainContent/>
    <AppFooter/>

    <div style="position: absolute; right: 26px; top: 111px; padding: 2px; color: #fff; border-radius: 26px;" id="chatIcon">
      <a @click="showBox"><img src="assets/img/customer.png" style="border-radius: 46px;"/> </a>
    </div>

    <ChatBox v-if="showChatBox" @handleBox="showBox" :chatContent="this.chatData"/>
  </div>
</template>

<script>
import Section from '../components/Section';
import "../../public/css/chatbox.css";
import MainContent from '../components/MainContent';
import ChatBox from './ChatBox';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Section,
    MainContent,
    ChatBox
  },
  data: () => ({
    showChatBox: false,
    chatData: []
  }),
  methods: {
    showBox : function(event) {
      axios.get(`http://localhost:8000/getmsg`)
      .then(response => {
        this.showChatBox = !this.showChatBox;
        this.chatData = response.data
      })
      .catch(e => {
        this.chatData = [];
      })
     }
    },
  }

</script>

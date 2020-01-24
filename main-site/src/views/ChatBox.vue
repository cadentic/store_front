<template>
  <div class="chat-container">
    <div class="receiver-top">
      <div class="receiver-name">
        Nikolar P.
      </div>
      <div class="close-btn">
        <a @click="closeBox"><i class="fas fa-times"></i></a>
      </div>
    </div>
    <div class="wrapper">
      <div v-for="content in chatContent" class="chat-content">
        <div class="receiver">
          <div class="receiver-icon">
            <img src="assets/img/customer.png" style="border-radius: 100px;"/>
          </div>
          <div class="receiver-content">
           {{content.receiver}}
          </div>
        </div>
        <div class="sender">
          <div class="sender-content">
            {{content.sender}}
          </div>
        </div>
      </div>
    </div>
    <div class="dialog-box">
      <input type="text" placeholder="Enter your message...">
    </div>
  </div>
</template>

<script>
  
  import "../../public/css/mystyle.css";
  export default {
    name: 'ChatBox',
    props: ['chatContent'],
    methods: {
      closeBox() {
        this.$emit('handleBox', false);
      }
    },
  };
</script>

<template>
  <div class="login">
    <div class="heardNav">
      <ul>
        <li><h1>LOGO医言</h1></li>
        <li>学术期刊合作平台</li>
        <li><a>用户注册</a></li>
      </ul>
    </div>
    <div class="shuju">
      <span>入住专家6889位</span>
      <span>合作专家6889位</span>
      <span>审阅期刊6889位</span>
    </div>
    <div class="loginPut">
      <img src="" alt="" />
      <span>短信登陆</span>
      <span>微信登陆</span>
      <span>QQ登陆</span>
    </div>

    <div class="banana"></div>

    <div class="footer">
      <div class="footer_continer">
        <span>设为首页</span>
        <span>|加入收藏|</span>
        <span>关于我们</span>
      </div>
      <div class="footer_web">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
/* import HelloWorld from '@/components/HelloWorld.vue' */
/* import MyHearder from '@/components/MyHearder.vue' */
export default {
  name: "Login",
  components: {
    //MyHearder
  },
};
</script>
<style lang='less' scoped>
body {
  background: url(../assets/imgs/loginImg.jpg) no-repeat fixed center top;
}
</style>
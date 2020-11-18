<template>
  <div class="myHeader">
    <div class="left">
      <span class="logo">logo&emsp; &emsp; 期刊审阅平台</span>
      <span>客服热线：028-22222222</span>
    </div>
    <div class="center">
      <span>欢迎您的加入你是123家入住的期刊用户</span>
      <span class="centerTow">
        您已上传
        <span class="colorRed">87</span>篇文章
      </span>
      <span>
        已完成审阅
        <span class="colorRed">87</span>篇
      </span>
    </div>
    <div class="right">
      <div class="switch pointer" @click="clickSwitch">
        <div>
          <img src="../../assets/icon/切换账户.png" />
        </div>
        <div>切换用户</div>
      </div>
      <div class="out pointer" @click="out">
        <div>
          <img src="../../assets/icon/退出登录.png" />
        </div>
        <div>退出登录</div>
      </div>
      <div class="imgUser">
        <div class="block">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myHeader",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },
  methods: {
    clickSwitch() {
      alert("点锤子你点");
    },
    out() {
      alert("点锤子你点");
    }
  }
};
</script>


<style scoped lang="less">
.myHeader {
  height: 100px;
  background: #0b47db;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0 40px;
  box-sizing: border-box;
  .colorRed {
    color: red;
  }
  .logo {
    font-size: 20px;
    margin-right: 40px;
  }
  .center {
    .centerTow {
      margin: 0 30px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    text-align: center;
    .out {
      margin: 0 20px;
    }
    .pointer {
      cursor: pointer;
    }
  }
}
</style>

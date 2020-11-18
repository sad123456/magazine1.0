<template>
  <div class="myFooter">
    <div class="One">
      <div>设为首页</div>
      <div class="shuixan">|</div>
      <div>加入我们</div>
      <div class="shuixan">|</div>
      <div>关于我们</div>
    </div>
    <div
      class="Tow"
    >京ICP证040431号&emsp;网络出版服务许可证（总）网出证（京）字第271号&emsp;出版物经营许可证&emsp;京公网安11010802020460号《中国学术期刊（光盘版）》电子杂志社有限公司</div>
    <div class="Three">出版物经营许可证&emsp;京公网安11010802020460号&emsp;京ICP证040431号</div>
    <div class="Four">KDN平台基础技术由KBASE11.0提供</div>
  </div>
</template>

<script>
export default {
  name: "myFooter",
  props: {
    msg: String
  }
};
</script>


<style scoped lang="less">
.myFooter {
  height: 200px;
  background: #0b47db;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  color: white;
  .One {
    display: flex;
    justify-content: center;
    .shuixan{
      margin: 0 20px;
    }
  }
  .Tow,
  .Three {
    margin: 10px 0;
  }
}
</style>

<template>
  <div class="home">
    <el-row>
      <MyHeader />
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <LeftMenu />
        </div>
      </el-col>
      <el-col :span="21">
        <div class="grid-content bg-purple-light content" >
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
    <myFooter />
  </div>
</template>

<script>
import LeftMenu from "../../components/layout/leftMenu";
import MyHeader from "../../components/layout/myHeader";
import myFooter from "../../components/layout/myFooter";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    LeftMenu,
    MyHeader,
    myFooter
  }
};
</script>


<style scoped lang="less">
.home{
  box-sizing: border-box;
.content{
  margin: 20px;
  background: white;
  padding: 20px
}
}

</style>

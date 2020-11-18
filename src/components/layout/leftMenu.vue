<template>
  <div class="leftMenu">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          background-color="#fff"
        >
          <el-menu-item index="1" @click="goMassage">
            <img class="leftImg" src="../../assets/icon/消息2.png" v-show="active==1" />
            <img class="leftImg" src="../../assets/icon/消息1.png" v-show="active!=1" />
            我得消息
            <img class="leftImg" src="../../assets/icon/消息2.png" v-show="active==1" />
            <img class="leftImg" src="../../assets/icon/消息1.png" v-show="active!=1" />
          </el-menu-item>
          <el-menu-item index="2" @click="goManuscript">
            <img class="leftImg" src="../../assets/icon/我的稿件1.png" v-show="active!=2" />
            <img class="leftImg" src="../../assets/icon/我的稿件2.png" v-show="active==2" />
            我得稿件
            <img
              class="leftImg"
              src="../../assets/icon/我的稿件1.png"
              v-show="active!=2"
            />
            <img class="leftImg" src="../../assets/icon/我的稿件2.png" v-show="active==2" />
          </el-menu-item>
          <el-menu-item index="3">
            <img class="leftImg" src="../../assets/icon/审阅进度1.png" v-show="active!=3" />
            <img class="leftImg" src="../../assets/icon/审阅进度2.png" v-show="active==3" />
            审阅进度
            <img
              class="leftImg"
              src="../../assets/icon/审阅进度1.png"
              v-show="active!=3"
            />
            <img class="leftImg" src="../../assets/icon/审阅进度2.png" v-show="active==3" />
          </el-menu-item>
          <el-menu-item index="4">
            <img class="leftImg" src="../../assets/icon/撤回稿件1.png" v-show="active!=4" />
            <img class="leftImg" src="../../assets/icon/撤回稿件2.png" v-show="active==4" />
            撤回稿件
            <img
              class="leftImg"
              src="../../assets/icon/撤回稿件1.png"
              v-show="active!=4"
            />
            <img class="leftImg" src="../../assets/icon/撤回稿件2.png" v-show="active==4" />
          </el-menu-item>
          <el-menu-item index="5">
            <img class="leftImg" src="../../assets/icon/我的账户1.png" v-show="active!=5" />
            <img class="leftImg" src="../../assets/icon/我的账户2.png" v-show="active==5" />
            我得账户
            <img
              class="leftImg"
              src="../../assets/icon/我的账户1.png"
              v-show="active!=5"
            />
            <img class="leftImg" src="../../assets/icon/我的账户2.png" v-show="active==5" />
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "leftMenu",
  data() {
    return {
      active: 1
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.active = key;
    },
    goMassage() {
      this.$router.push({ path: "/home/massage" });
    },
    goManuscript() {
      this.$router.push({ path: "/home/manuscript" });
    }
  }
};
</script>


<style scoped lang="less">
.leftMenu {
  height: calc(100vh - 300px);
  background: white;
  .el-menu-item {
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .leftImg {
    // width: 18px;
    // height: 14px;
    // margin: 0 10px;
  }
}
</style>

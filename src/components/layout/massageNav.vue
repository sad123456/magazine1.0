<template>
  <div class="massageNav">
    <div
      v-for="(title,index) in tabTitle"
      @click="curclick(index)"
      :class="{active:cur==index}"
      :key="index"
    >{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "massageNav",
  data() {
    return {
      tabTitle: ["全部消息", "代办消息", "已读消息"],
      cur: 0 //默认选中第一个tab
    };
  },
  methods: {
    curclick(index) {
      this.cur = index;
      this.$emit("curindex", this.cur);
    }
  }
};
</script>


<style scoped lang="less">
.massageNav {
  display: flex;
  justify-content: center;
  color: #0b47db;

  div {
    padding: 0 10px;
    cursor: pointer;
  }
  div:nth-child(2) {
    margin: 0 80px;
  }
  .active {
    border-bottom: solid 2px #0b47db;
  }
}
</style>

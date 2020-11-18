<template>
  <div class="massage">
    <MassageNav @curindex="curIndex" />

    <div v-if="cur==0">1</div>
    <div v-if="cur==1">2</div>
    <div v-if="cur==2">3</div>
  </div>
</template>

<script>
import MassageNav from "../../components/layout/massageNav";
export default {
  name: "massage",
  data() {
    return {
      cur: 0
    };
  },
  components: {
    MassageNav
  },
  methods: {
    curIndex(data) {
      this.cur = data;
    }
  }
};
</script>


<style scoped lang="less">
.massage {
}
</style>

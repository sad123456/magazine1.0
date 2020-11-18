/* 注册页面 */
<template>
  <div class="register">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple nav_lift">
              <span>logo期刊审阅平台</span>
              <span>客服热线:028-62156883</span>
            </div>
          </el-col>

          <el-col :span="16">
            <div class="grid-content bg-purple nav_center">
              <span>欢迎加入，您是第<span>1231</span>家入驻的期刊用户</span>
              <span>您已上传<span>188</span>篇文章</span>
              <span>已完成审阅 <span>80</span> 篇文章</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple nav_right">
              <el-row :gutter="15">
                <el-col :span="5">
                  <div class="grid-content bg-purple">
                    <p><i class="el-icon-refresh"></i></p>
                    <span><a href="">切换用户</a></span>
                  </div>
                </el-col>
                <el-col :span="5">
                  <div class="grid-content bg-purple">
                    <p><i class="el-icon-refresh"></i></p>
                    <span><a href="">退出登陆</a></span>
                  </div>
                </el-col>
                <el-col :span="5">
                  <div class="grid-content bg-purple">
                    <p><i class="el-icon-refresh"></i></p>
                    <span><a href="">头像</a></span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <!-- 
             
              -->
        </el-row>
      </el-header>

      <el-container>
        <!-- 左边导航栏 -->
        <!-- <el-aside width="200px"> </el-aside> -->
        <el-container>
          <!-- 右边内容 -->
          <el-main>
            <!-- 上传头像--登陆表单 -->
            <table class="table_list">
              <tr>
                <th>上传头像：</th>
                <th>
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                  >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </th>
                <th>请上传期刊封面，像素在500kb以下</th>
              </tr>
              <tr>
                <th>单位（用户名）：</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>固定电话）：</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>手机号码：</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>密码：</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>确认密码：</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>期刊简介</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>资质证明：</th>
                <th></th>
              </tr>
              <tr>
                <th>设置审稿费金额</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>QQ</th>
                <th>未绑定</th>
                <th><el-button type="success">绑定</el-button></th>
              </tr>
              <tr>
                <th>微信</th>
                <th>未绑定</th>
                <th><el-button type="success">绑定</el-button></th>
              </tr>
              <tr>
                <th>
                  <el-checkbox v-model="checked"></el-checkbox
                  >我一阅读并同意<el-link :underline="false"
                    >《协议及条款》</el-link
                  >
                </th>
              </tr>
            </table>
          </el-main>
        </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {
    // HelloWorld
  },
  data() {
    return {
      imageUrl: "",
      checked: true,
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>


<style lang="less" scoped>
.el-container {
  background-color: #F7F7F7;
}
.register {
  white-space: nowrap;
  width: 1920px;
  height: 100px;
  background: #0B47DB;
  box-shadow: 0px 5px 30px 0px rgba(0, 66, 228, 0.4);
  text-align: center;
  .nav_lift,
  .nav_center {
    line-height: 55px;
  }
  .nav_lift :nth-child(1) {
    font-size: 20px;
  }
  .nav_lift :nth-child(2) {
    margin-left: 10px;
  }
  .nav_center :nth-child(2),
  :nth-child(3) {
    padding-left: 10px;
  }
  .nav_right span a {
    font-size: 14px;
    color: white;
  }
  .nav_right div {
    text-align: center;
    padding-left: 10px;
  }
  .nav_right :nth-child(1) {
    padding-left: 5px;
  }
  .el-header,
  .el-footer {
    background-color: #0b47db;
    color: white;
    height: 100px;
  }
  .el-container {
    width: 100%;
    height: 1200px;
    text-align: center;
    padding-top: 20px;
  }
  .upTitle {
    width: 100%;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .upTitle :nth-child(2) {
    width: 100px;
    height: 100px;
  }
  /* 表单 */
  /* 上传头像 */
  .avatar-uploader .el-upload {
    border: 1px dashed #c2ee49;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #1b83eb;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #eb370a;
    width: 20px;
    height: 20px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 40px;
    height: 40px;
    display: block;
  }
  .table_list {
    margin: 0 auto;
  }
  .table_list tr input {
    width: 470px;
    height: 40px;
    border: 2px solid #0B47DB;
    border-radius: 4px;
    margin-bottom: 30px;
  }
}
</style>

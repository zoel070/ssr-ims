<template>
  <div class="back">
    <div class="account-login-container">
      <div class="account-login-bd">
        <div class="company-info-container">
          <img class="company-info-logo" src="~@/assets/logo.png" />
          <span class="company-info-name">IMS</span>
        </div>
        <div class="company-info-desc">信息发布管理平台</div>
        <div class="account-login-mainer">
          <div class="login-tab-container">
            <div :class="['login-tab-item', { active: passwordMode == 'passwordForm' }]"
              @click=" passwordMode = 'passwordForm'">
              账号密码登录
            </div>
            <div :class="['login-tab-item', { active: passwordMode == 'smsForm' }]" @click=" passwordMode = 'smsForm'">
              手机登录
            </div>
          </div>
          <div class="login-form-container">
            <div class="login-form-password" v-show="passwordMode == 'passwordForm'">
              <el-form :model="passwordForm" status-icon :rules="passwordRules" ref="passwordForm">
                <el-form-item prop="phone">
                  <el-input type="number" prefix-icon="el-icon-mobile-phone" placeholder="请输入手机号15521045008"
                    v-model="passwordForm.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="password" prefix-icon="el-icon-lock" placeholder="请输入密码123"
                    v-model="passwordForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" style="width: 100%" @click="submitForm('passwordForm')"
                    :loading="submitLoad">登录</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="login-form-phone" v-show="passwordMode == 'smsForm'">
              <el-form :model="smsForm" status-icon :rules="smsRules" ref="smsForm">
                <el-form-item prop="phone">
                  <el-input type="number" prefix-icon="el-icon-mobile-phone" placeholder="请输入手机号15521045008"
                    v-model="smsForm.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                  <div class="flex-cell">
                    <el-input class="flex-cell-bd" type="number" placeholder="请输入验证码123" v-model="smsForm.code"
                      autocomplete="off" prefix-icon="el-icon-mobile"></el-input>
                    <el-button :disabled="disabled" class="flex-cell-ft" @click="handleSendCode">{{
                      buttonName }}</el-button>
                  </div>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" style="width:100%;" @click="submitForm('smsForm')"
                    :loading="submitLoad">登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import User from "@/models/user.js";

export default {
  data() {
    return {
      submitLoad: false,
      passwordMode: 'passwordForm',
      passwordForm: {
        phone: "",
        password: "",
      },
      smsForm: {
        phone: "",
        code: "",
      },
      passwordRules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "目前只支持中国大陆的手机号码",
            trigger: "blur"
          }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      smsRules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "目前只支持中国大陆的手机号码",
            trigger: "blur"
          }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      buttonName: "获取验证码",
      disabled: false,
      btnLoading: false
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.submitLoad = true;
          let params =
            formName === "passwordForm" ? this.passwordForm : this.smsForm;
          let loginRequest =
            formName === "passwordForm"
              ? User.loginPassword
              : User.loginSMS;
          loginRequest(params).then((res) => {
            localStorage.setItem('token', res.token)
            this.$router.replace({ name: 'ArticleList' })
            this.submitLoad = false;
          }).catch((e) => {
            console.log(e, 555);
            this.submitLoad = false;
          });
        }
      });
    },
    handleSendCode() {
      if (this.disabled) {
        return;
      }
      this.$refs.smsForm.validateField("phone", errMsg => {
        if (errMsg) return;
        this.disabled = true;
        this.$message.success("验证码：123");
        let time = 60;
        this.buttonName = `(${time})秒重新发送`;
        const interval = window.setInterval(() => {
          time -= 1;
          this.buttonName = `(${time})秒重新发送`;
          if (time <= 0) {
            this.buttonName = "重新发送";
            this.disabled = false;
            window.clearInterval(interval);
          }
        }, 1000);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.flex-cell {
  display: flex;

  .flex-cell-bd {
    flex: 1;
  }

  .flex-cell-ft {
    width: 130px;
    margin-left: 8px;

    &:after {
      display: none;
    }

    &.link {
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      color: #409eff;
      text-decoration: none;
    }
  }
}

.back {
  height: 100vh;
  background-image: url(../../public/back.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

.account-login-container {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  margin: auto;
  padding-top: 150px;
}

.account-login-bd {
  flex: 1;
  padding: 32px 0;
  background-color: hsla(50, 6%, 81%, 0.75);
}

.company-info-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .company-info-logo {
    height: 44px;
    margin-right: 20px;
  }

  .company-info-name {
    line-height: 44px;
    font-size: 33px;
    font-weight: 600;
    font-family: Avenir;
  }
}

.company-info-desc {
  margin: 12px 0 40px;
  font-size: 33px;
  font-weight: 600;
  text-align: center;
}

.account-login-mainer {
  max-width: 388px;
  margin: 40px auto;
}

.login-tab-container {
  text-align: center;
  margin-bottom: 24px;

  .login-tab-item {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    margin-right: 32px;
    padding: 12px 16px;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    color: #666;
    border-bottom: 2px solid transparent;
    transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #1890ff;
      font-weight: 500;
      border-color: #1890ff;
    }
  }
}
</style>
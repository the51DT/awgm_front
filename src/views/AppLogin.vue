<template>
  <v-container class="login-container" fluid>
    <v-row justify="center" align="center" class="text-center">
      <!-- 이미지와 로그인 박스의 컨테이너 -->
      <v-col cols="12" md="8" lg="6" class="text-center">
        <div class="logo-container">
          <h2>Amway GUTmorning</h2>
          <p>Amway GUT morning ADMIN Login</p>
        </div>
        <v-card class="pa-4 login-card">
          <v-card-title>
            <h3 class="box-title text-left">Log in</h3>
          </v-card-title>

          <v-card-subtitle>
            <v-form>
              <v-text-field
                v-model="email"
                label="아이디"
                placeholder="이메일(ID)"
                type="email"
                outlined
                dense
              />
              <v-text-field
                v-model="password"
                label="비밀번호"
                placeholder="비밀번호"
                type="password"
                outlined
                dense
              />
              <v-checkbox
                v-model="rememberMe"
                label="아이디저장"
                class="mt-2"
              />
              <v-btn class="mt-4 custom-btn" @click="login" block>
                로그인
              </v-btn>
            </v-form>
          </v-card-subtitle>

          <v-card-subtitle class="login-sub">
            <p>
              * 비밀번호 5회 오류 시 계정 사용이 제한됩니다. <br />(이전 입력
              오류 횟수 누적)<br />
              * 로그인 관련 문의사항은 관리자에게 문의하세요.
            </p>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { ref } from "vue";

const login = () => {};
</script>

<style scoped lang="scss">
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 2em;
  }

  .logo-container {
    margin-bottom: 24px;
  }

  .login-card {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    border-radius: 24px;
    border: 1px solid #e5e5e5;
  }

  .box-title {
    font-size: 2.5em;
    margin-bottom: 1em;
    font-family: "Poppins", sans-serif;
  }

  .login-sub {
    text-align: left;
    margin-top: 16px;
    font-size: 14px;
    line-height: 24px;
    color: #666;
  }

  .custom-btn {
    background-color: #000 !important;
    color: #fff !important;
    font-size: 18px !important;
    font-weight: 700 !important;
    border-radius: 12px !important;
    padding: 24px 24px !important;
  }

  .custom-btn:hover {
    background-color: #333 !important;
  }

  @media (max-width: 600px) {
    .login-container {
      padding: 16px;
    }

    .logo-container {
      h2 {
        font-size: 2em;
      }
      p {
        font-size: 1em;
      }
    }

    .login-card {
      border-radius: 16px;
      max-width: 400px;
    }

    .box-title {
      font-size: 2em;
    }

    .custom-btn {
      font-size: 14px !important;
      padding: 10px 20px !important;
    }
  }
}
</style>

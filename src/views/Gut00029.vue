<template>
  <div class="content-etc-wrap loading">
    <div class="content-etc-box">
      <div class="content-etc-img-area active">
        <img :src="require('@/assets/images/icon/ico_etc02_loading.png')" alt="로딩페이지 아이콘">
      </div>
      <div class="content-etc-text-area">
        <h2 class="page-title">
          Loading...
        </h2>
        <p class="page-desc">
          데이터를 불러오고 있습니다. <br />
          잠시만 기다려 주세요.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Gut_00029",
  components: {

  }
};
</script>

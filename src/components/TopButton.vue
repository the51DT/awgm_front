<template>
    <div class="top--button" v-show="goTopBtnShow">
        <button type="button" class="top--button-icon" @click="goTop()">
            <img :src="require(`@/assets/images/icon_top.svg`)">
        </button>
    </div>
</template>

<script>
export default {
    name: 'TopButton',
    data() {
        return {
            goTopBtnShow: this.goTopBtnShow
        }
    },
    props: {
      show: Boolean,
    },
    methods: {
      handleScroll() {
        this.goTopBtnShow = document.querySelector("#app").scrollTop > 0;
      },
      goTop() {
        document.querySelector("#app").scrollTo({ top: 0, behavior:'smooth' });
      }  
    },
    mounted() {
        document.addEventListener('scroll', this.handleScroll, true);
    },
}
</script>
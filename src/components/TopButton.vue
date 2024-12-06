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
        this.goTopBtnShow = window.scrollY > 0;
      },
      goTop() {
        window.scrollTo({ top: 0, behavior:'smooth' });
      }  
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
}
</script>
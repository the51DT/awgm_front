<template>
  <div class="text-group">
    <img
      class="ico-img"
      :src="require(`@/assets/images/content/conts-ico_people01.png`)"
      alt="참여인원 아이콘"
    />
    <p class="count-num" :data-total="total">{{ total }}</p>
    <!-- data-total값 추가 : 참여 인원 data값 공통 매핑 필요 -->
  </div>
  <p class="desc">{{ desc }}</p>
</template>

<script>
export default {
  name: "FrontCount",
  props: {
    desc: String,
    total: {
      Number,
      required: true,
    },
  },
  computed: {
    Total() {
      return this.total.toLocaleString();
    },
  },
  methods: {
    countingType() {
      let countNum = document.querySelector(".count-num");
      let total = this.total;
      let now = total;
      const handle = setInterval(() => {
        countNum.innerHTML = Math.ceil(total - now).toLocaleString();
        if (now < 1) {
          clearInterval(handle);
        }
        const step = now / 2;
        now -= step;
      }, 50);
    },
  },
  mounted() {
    this.countingType();
  },
};
</script>

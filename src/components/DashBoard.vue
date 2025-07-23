<template>
  <div class="dashboard-container">
    <div class="dashboard__first-prove">
      <div>
        <span class="font--c66 font--ls1"> 1차 </span>
        <img :src="require(`@/assets/images/first_prove_unit.svg`)" />
      </div>
    </div>
    <div class="dashboard__bg">
      <div class="dashboard__bg-img">
        <img :src="require(`@/assets/images/gauge_t.svg`)" />
      </div>
    </div>

    <div class="needle-wrap">
      <div class="needle-center">
        <img :src="require(`@/assets/images/needle-center.svg`)" />
      </div>
      <div class="needle-line">
        <!-- <img :src="require(`@/assets/images/needle-line.svg`)" :style="{ transform: `rotate(${angle}deg)` }" /> -->
        <img :src="require(`@/assets/images/needle-line.svg`)" />
      </div>
    </div>
  </div>
  <div class="dashboard__text">
    <div class="dashboard__text-graph">
      <span> x0.5 </span>
      <span> x1.5 이상 </span>
    </div>
    <p class="dashboard__text-head"> 노화속도 </p>
    <div class="dashboard__text-graph-list">
      <ul>
        <li> 주의 </li>
        <li> 관리 </li>
        <li> 좋음 </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
  data() {
    return {
      // speed: 0,
      dummyData: [85],
      currentIndex: 0,
      displaySpeed: 0,
      angle: 100,
    };
  },
  props: {
    speed: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    dashOffset() {
      const max = 282.6;
      return max * (1 - this.displaySpeed / 100);
    },
    angle() {
      return (this.displaySpeed / 100) * 180 - 90;
    },
  },
  mounted() {
    // setInterval(() => {
    //   this.speed = this.dummyData[this.currentIndex];
    //   this.currentIndex = (this.currentIndex + 1) % this.dummyData.length;
    // }, 100); // 1초 간격으로 변경


    // const el = this.$el;
    // const attrSpeed = el.dataset.speed;
    // if (attrSpeed) {
    //   this.speed = parseInt(attrSpeed);
    // }

    // // (선택) 1초마다 다시 읽어 오도록 하면 외부에서 바꾼 값도 반영 가능
    // setInterval(() => {
    //   const newSpeed = parseInt(el.dataset.speed);
    //   if (!isNaN(newSpeed)) {
    //     this.speed = newSpeed;
    //   }
    // }, 500);

    setTimeout(() => {
      this.displaySpeed = this.speed;
    }, 50); // 짧은 지연 후 값 설정 → 애니메이션 유도

  },
  watch: {
    speed(newVal) {
      this.displaySpeed = newVal;
    },
  }
}
</script>

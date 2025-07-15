<template>
  <div class="box">
    <div class="gauge-container">

      <img :src="require(`@/assets/images/gauge_t.svg`)" />

      <div class="needle-wrap" :style="{ transform: `rotate(${angle}deg)` }">
        <img class="needle-center" :src="require(`@/assets/images/needle-center.svg`)" />
        <img class="needle" :src="require(`@/assets/images/needle-line.svg`)" />
      </div>
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

<style>
.box {
  width: 100vw;
  max-width: 500px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.gauge-container {
  position: relative;
  width: 200px;
  height: 100px;
}

.gauge {
  width: 100%;
  height: 100%;
  transform: rotate(0deg);
}

.gauge-bg {
  fill: none;
  stroke: #ddd;
  stroke-width: 10;
}

.gauge-fill {
  fill: none;
  stroke: blue;
  stroke-width: 10;
  stroke-dasharray: 282.6;
  transition: stroke-dashoffset 0.5s ease;
}

.needle-wrap {
  position: absolute;
  bottom: 0;
  left: 50%;
}

.needle {
  /* background: red; */
  transform-origin: bottom center;
  transition: transform 0.3s ease-in-out;
  transform: rotate(0deg);
}

.needle-center {
  position: absolute;
  bottom: 0;
  left: 50%;
  right: 50%;
}
</style>
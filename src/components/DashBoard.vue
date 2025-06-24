<template>
  <div class="box">
    <div class="gauge-container">
    <svg class="gauge" viewBox="0 0 200 100">
      <!-- 배경 원 -->
      <path class="gauge-bg" d="M10 100 A90 90 0 0 1 190 100" />

      <!-- 진행도 -->
      <path
        class="gauge-fill"
        :stroke-dashoffset="dashOffset"
        d="M10 100 A90 90 0 0 1 190 100"
      />
    </svg>

    <div class="needle" :style="{ transform: `rotate(${angle}deg)` }"></div>
  </div>
  </div>
  
</template>

<script>


export default{
  name: "DashBoard",
  data() {
    return {
      speed: 0,
      dummyData: [85],
      currentIndex: 0,
    };
  },
  computed: {
    dashOffset() {
      const maxLength = 282.6;
      return maxLength * (1 - this.speed / 100);
    },
    angle() {
      return (this.speed / 100) * 180 - 90;
    },
  },
  mounted() {
    setInterval(() => {
      this.speed = this.dummyData[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.dummyData.length;
    }, 1000); // 1초 간격으로 변경
  },

}
</script>

<style>
.box{
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

.needle {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 2px;
  height: 90px;
  background: red;
  transform-origin: bottom center;
  transition: transform 0.3s ease-in-out;
}
</style>
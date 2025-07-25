<template>
  <div class="dashboard-container">
    <div class="dashboard__graph-list">
      <ul>
        <li> 주의 </li>
        <li> 관리 </li>
        <li> 좋음 </li>
      </ul>
    </div>
    <div class="dashboard__first-prove" v-if="typeof beforeValue === 'number'">
      <div :style="{ transform: `rotate(${beforeAngle}deg)` }">
        <span class="font--c66 font--ls1"> 1차 </span>
        <img :src="require(`@/assets/images/first_prove_unit.svg`)" />
      </div>
    </div>
    <div class="dashboard__bg">
      <div class="dashboard__bg-img">
        <img :src="require(`@/assets/images/gauge_graph.svg`)" />
      </div>
    </div>

    <div class="needle-wrap">
      <!-- 중앙 백그라운드 컬러 단계별 -->
      <!-- 관리 : 백그라운드 옐로우 / 텍스트 블랙  -->
      <div class="needle-center manage">
        <span> 노화속도 </span>
        <span> 1차</span>
      </div>
      <!-- 주의 : 백그라운드 분홍 / 텍스트 화이트-->
      <!-- <div class="needle-center caution">
        <span> 노화속도 </span>
        <span> 2차</span>
      </div> -->
      <!-- 좋음 : 백그라운드 그린 / 텍스트 화이트-->
      <!-- <div class="needle-center good">
        <span> 노화속도 </span>
        <span> 2차</span>
      </div> -->
      <div class="needle-line" :style="{ transform: `rotate(${angle}deg)` }">
        <img :src="require(`@/assets/images/needle-line.svg`)" />
      </div>
    </div>
  </div>
  <div class="dashboard__text">
    <div class="dashboard__text-graph">
      <span> x0.5 </span>
      <span> x1.5 이상 </span>
    </div>
    <!-- <p class="dashboard__text-head"> 노화속도 </p> -->
  </div>
</template>

<script>
/*
  <DashBoard :value="0.9" :beforeValue="0.5" />
  value = '현재 값'
  beforeValue = '1차 값' -> 없으면 렌더링 X
  value && beforeValue == 0.00 ~ 1.50 사이 값으로 지정
*/
export default {
  name: "DashBoard",
  data() {
    return {

    };
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    beforeValue: {
      type: [Number, Boolean],
      default: false
    }
  },
  computed: {
    angle() {
      if (this.value >= 1.5) return 90
      return (this.value / 1.5) * 180 - 90
    },
    beforeAngle() {
      const base = typeof this.beforeValue === 'number' ? this.beforeValue : this.value
      return base >= 1.5 ? 90 : (base / 1.5) * 180 - 90
    }
  }
}
</script>

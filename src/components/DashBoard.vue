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
      <div :class="['needle-center', centerClass]">
        <span> 노화속도 </span>
        <span>
          <slot />
        </span>
      </div>
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
  </div>
</template>

<script>
/*
  <DashBoard :value="0.9"> 1차 </DashBoard>
  <DashBoard :value="0.9" :beforeValue="0.5"> 2차 </DashBoard>

  :value = '현재 값'
  :beforeValue = '1차 값 표시' -> 없으면 렌더링 X
  value && beforeValue == 0.00 ~ 1.50 사이 값으로 지정 (1.5이상 값이어도 최대치 1.5로 지정)
  slot에 ['1차', '2차'] 텍스트 구분
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
    },
    centerClass: {
      type: String,
      default: 'manage' // 예: 'manage', 'caution', 'good'
    }
  },
  computed: {
    angle() {
      const clamped = Math.min(Math.max(this.value, 0.5), 1.5)
      return ((clamped - 0.5) / 1.0) * 180 - 90
    },
    beforeAngle() {
      const base = typeof this.beforeValue === 'number' ? this.beforeValue : this.value
      const clamped = Math.min(Math.max(base, 0.5), 1.5)
      return ((clamped - 0.5) / 1.0) * 180 - 90
    },
    centerClass() {
      const base = this.value

      if (typeof base !== 'number' || isNaN(base)) return ''

      if (base >= 1.10 && base < 2) return 'caution' // 고속
      if (base >= 0.91 && base < 1.10) return 'manage' // 중속
      if (base >= 0.5 && base <= 0.9) return 'good' // 저속
      return ''
    }
  },

}
</script>

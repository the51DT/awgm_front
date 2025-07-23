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

    };
  },
  props: {

  },
  computed: {

  },
  mounted() {

  },
}
</script>

<template>
  <!-- 뱃지 획득 시 팝업 -->
  <!-- <AniBadge /> -->

  <DashBoard :speed="currentSpeed" />

</template>

<script>
import BadgeDefault from "@/components/BadgeDefault.vue";
import AniBadge from "@/components/AniBadge.vue"
import DashBoard from "@/components/DashBoard.vue"

import tabFn from "@/plugins/common.js";
import layerClose from "@/plugins/common.js";

export default {
  name: "Gut_00",
  components: {
    BadgeDefault,
    AniBadge,
    DashBoard
  },
  data() {
    return {
      hasRepresent: false,
      currentSpeed: 90,
    };
  },
  setup() {

  },
  mounted() {
    tabFn.tabFn();
    layerClose.layerClose("badges_reward");
  },
  beforeUnmount() {

  },
  methods: {

  },
};
</script>

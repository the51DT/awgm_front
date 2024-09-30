<template>
  <div>
    <FrontIntro />
    <FrontCount />
    <KakaoButton />
    <ChildButton />
    <FrontFloating />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import FrontIntro from "@/components/FrontIntro.vue";
// eslint-disable-next-line no-unused-vars
import FrontCount from "@/components/FrontCount.vue";
import KakaoButton from "@/components/KakaoButton.vue";
import ChildButton from "@/components/ChildButton.vue";
import FrontFloating from "@/components/FrontFloating.vue";
export default {
  name: "AppLogin",
  components: {
    FrontIntro,
    FrontCount,
    KakaoButton,
    ChildButton,
    // eslint-disable-next-line vue/no-unused-components
    FrontFloating,
  },
};
</script>

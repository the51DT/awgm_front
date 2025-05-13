<template>
  <div class="my__list__img">
    <img :src="require(`@/assets/images/child_profile${img_num}.png`)" alt="child Icon" />
  </div>
</template>

<script setup>
// img_num : 숫자만
defineProps({
  img_num: {
    type: Number,
    required: true,
  },
});
</script>

<style></style>

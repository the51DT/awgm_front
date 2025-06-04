<!-- Basic Button -->
<template>
  <button class="btn--icon" :class="IconButtonClass">
    <slot />
    <img :src="buttonImage" alt="button icon" />
  </button>
</template>

<script>

import deleteIcon from '@/assets/images/icon/icon-delete-btn.svg';
export default {
  name: "IconButton",
  props: {
    type: {
      type: String,
      default: 'default', // 예: 'default', 'primary', 'secondary' 등
    },
  },
  computed: {
    buttonClass() {
      return `btn-${this.type}`;
    },
    buttonImage() {
      return {
        delete : deleteIcon,
      }[this.type] || defaultIcon
    },
  },
};
</script>

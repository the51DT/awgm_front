<!-- Basic Button -->
<template>
  <button
    class="custom-btn"
    :class="[
      size === 'sm' ? 'custom-btn--sm' : '',
      size === 'md' ? 'custom-btn--md' : '',
      size === 'md-b12' ? 'custom-btn--md-b12' : '',
      color === 'light' ? 'custom-btn--light' : '',
      color === 'gray' ? 'custom-btn--gray' : '',
      color === 'dark' ? 'custom-btn--dark' : '',
      color === 'yellow' ? 'custom-btn--yellow' : '',
      color === 'black' ? 'custom-btn--black' : '',
      color === 'white' ? 'custom-btn--white' : '',
      color === 'gray-333' ? 'custom-btn--gray-333' : '',
      color === 'gray-b9' ? 'custom-btn--gray-b9' : '',
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    size: String,
    color: String,
  },
};
</script>

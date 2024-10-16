<template>
  <button
    class="custom-btn"
    :class="[
      size === 'sm' ? 'custom-btn--sm' : '',
      size === 'md' ? 'custom-btn--md' : '',
      color === 'light' ? 'custom-btn--light' : '',
      color === 'gray' ? 'custom-btn--gray' : '',
      color === 'dark' ? 'custom-btn--dark' : '',
      color === 'yellow' ? 'custom-btn--yellow' : '',
      color === 'black' ? 'custom-btn--black' : '',
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
  }
}
</script>

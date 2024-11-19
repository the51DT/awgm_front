<template>
  <div v-if="full" class="popup popup--full__wrap" :class="isTopBtn === true ? 'sticky' : ''" :id=id>
    <div class="popup--full">
      <slot name="full"></slot>
    </div>
  </div>
  <div v-else class="popup" :id=id>
    <div class="popup__box" :class="[sm ? 'popup__box--sm' : '', lg ? 'popup__box--lg' : '']">
      <button class="popup__box--close">
        <img :src="require(`@/assets/images/icon_close.svg`)">
      </button>
      <div class="popup__box--cont">
        <div v-if="$slots.title" class="popup__box--top">
          <slot name="title"></slot>
        </div>
        <div v-if="$slots.cont" class="popup__box--middle">
          <slot name="cont"></slot>
        </div>
        <div v-if="$slots.btn" class="popup__box--bottom">
          <slot name="btn"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupDefault",
  props: {
    id: String,
    sm: Boolean,
    lg: Boolean,
    full: Boolean,
    isTopBtn: Boolean,
  }
}
</script>
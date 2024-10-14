<template>
  <div class="stamp-effect"></div>
</template>
<style scoped lang="scss">
.stamp-effect {
  background-color: #999;
  right: 30px;
  top: 100px;
  width: 140px;
  height: 130px;
  border-radius: 5px;
  position: absolute;
  background-image: url("@/assets/images/stamp.svg");
  z-index: 1000;
  -webkit-animation-name: pulse;
  animation-name: pulse;
  animation-delay: 1.5s;
  -webkit-animation-delay: 2.5s;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  opacity: 0;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

@keyframes pulse {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0.5;
    transform-origin: 50% 50%;
    transform: rotate(-2deg) scale(5);
    transition: all 0.1s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  }
  100% {
    opacity: 1;
    transform: rotate(15deg) scale(1);
  }
}
</style>

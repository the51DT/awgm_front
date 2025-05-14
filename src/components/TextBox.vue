<template>
  <!--  desc부분에 html태그가 들어가는 부분이 있어 패스 -->
  <!-- v-html will override element children. -->
  <!-- v-html은 해당 엘리먼트의 모든 자식 노드를 덮어쓰기(overwrite) 하기 때문에,
    다른 콘텐츠나 슬롯, 바인딩된 데이터가 함께 있을 경우 충돌이 납니다. -->
  <div class="text-box-wrap">
    <div class="text-wrap">
      <p v-if="title" class="card-title">{{ title }}</p>
      <p v-if="desc" class="card-desc">{{ desc }}</p>
      <slot name="custom-content"> </slot>
    </div>

    <ul v-if="$slots.actions || actions?.length" class="sub-wrap">
      <!-- 슬롯이 있으면 우선 -->
      <slot name="actions">
        <li v-for="(action, i) in actions" :key="i">
          <component :is="action.component" v-bind="action.props" />
        </li>
      </slot>
    </ul>
  </div>

  <!-- + css : border, box-shadow도 커스텀할수있도록 -->
</template>

<script setup>
defineProps({
  title: String,
  desc: String,
  actions: {
    type: Array,
    default: () => [],
  },
});
</script>

<style></style>

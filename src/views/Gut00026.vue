<template>
  <PopupDefault full>
    <template v-slot:full>
      <div class="terms bg-case">
        <ContentHead title="이용약관" :rightArea=true />
        <div class="terms__cont">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia magnam earum ab, doloremque, dolores iusto error iure placeat voluptas perferendis eum animi molestiae molestias, temporibus asperiores exercitationem dolor saepe.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum unde praesentium placeat similique enim quia explicabo cum modi accusantium totam voluptatum incidunt perferendis eum, veniam tempora aliquid at error! Expedita.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem et rerum, ducimus voluptatibus, vero aspernatur ipsam unde veniam eaque cumque sit. Tenetur asperiores fuga nesciunt aliquam quos, a unde accusantium!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil veniam error esse, nesciunt recusandae alias obcaecati blanditiis consequatur impedit id perferendis cupiditate, mollitia delectus molestias odio. Id ea distinctio fugiat.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus deleniti ipsam reprehenderit praesentium omnis atque quae ullam laboriosam pariatur, beatae, recusandae fugiat aut earum expedita nemo ut corporis obcaecati quas.
          <div class="terms__btn">
            <CustomButton>닫기</CustomButton>
          </div>
        </div>
      </div>
      <TopButton></TopButton>
    </template>
  </PopupDefault>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";
import ContentHead from "@/components/ContentHead.vue";
import PopupDefault from "@/components/PopupDefault.vue";
import TopButton from "@/components/TopButton.vue";

export default {
  name: "LoginMain",
  components: {
    CustomButton,
    ContentHead,
    PopupDefault,
    TopButton,
  },
};
</script>

<style scoped></style>

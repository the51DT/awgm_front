<template>
  <div class="lnb_admin" :class="{ on: drawer }">
    <v-list dense class="menu-list">
      <template v-for="(item, index) in menuRoutes" :key="index">
        <v-list-item
          :class="['list_1dep', { select: isSelected(item), completed: item.isCompleted }]"
          @click="handleClick(item)"
        >
          <v-list-item-content>
            <v-list-item-title class="btn_menu">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list dense class="menu_2dep" v-if="item.subMenu">
          <v-list-item
            v-for="(subItem, subIndex) in item.subMenu"
            :key="subIndex"
            :class="['list_2dep', { select: isSelected(subItem), completed: subItem.isCompleted }]"
            @click="handleClick(subItem)"
          >
            <v-list-item-content>
              <v-list-item-title class="btn_menu">
                {{ subItem.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-list>
    <div class="sidebar-buttons">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <v-btn class="sidebar-btn" color="white">GUT Morning 바로가기</v-btn>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <v-btn class="sidebar-btn" color="white">GUT M. Korea 바로가기</v-btn>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { menuRoutes } from "@/router/menu";

const drawer = ref(false);
const router = useRouter();

const handleClick = (item) => {
  if (item.path) {
    router.push(item.path);
  }
};

// eslint-disable-next-line no-unused-vars
const isSelected = (item) => {
  return false;
};
</script>

<style scoped lang="scss">
.completed { /* 페이지 완료 여부용 */
  text-decoration: line-through;
  text-decoration-color: #fff;
  font-weight: bold; 
}
</style>

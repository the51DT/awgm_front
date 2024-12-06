<template>
  <div class="menu-list lnb_front">
    <template v-for="(item, index) in menuRoutes" :key="index">
      <div class="list_1dep" @click="handleClick(item)">
        <div class="btn_menu">
          {{ item.text }}
        </div>
      </div>

      <div class="menu_2dep" v-if="item.subMenu">
        <div
          v-for="(subItem, subIndex) in item.subMenu"
          :key="subIndex"
          class="list_2dep"
          @click="handleClick(subItem)"
        >
          <div class="btn_menu">
            {{ subItem.text }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { menuRoutes } from "@/router/menu";

const router = useRouter();

const handleClick = (item) => {
  if (item.path) {
    router.push(item.path);
  }
};
</script>
<style scoped>
.lnb_front {
  background: transparent;

  .menu-list {
    overflow-y: auto;
    padding: 16px;
  }
  .menu-list::-webkit-scrollbar {
    display: none;
  }

  .list_1dep {
    background: #3d4a62;
    margin-bottom: 12px;
    border-radius: 8px;
    min-height: 50px;

    .btn_menu {
      position: relative;
      display: block;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      padding: 15px;
    }
  }

  .menu_2dep {
    background: transparent;
    padding-left: 20px;

    .list_2dep {
      margin-bottom: 8px;

      .btn_menu {
        position: relative;
        display: block;
        font-size: 14px;
        font-weight: 500;
        color: #666;
        padding: 10px 15px;
      }
    }
  }
}

.v-btn,
.v-icon,
.completed {
  display: none !important;
}

.stamp-effect {
  display: none !important;
}
</style>

<template>
  <v-list class="menu-list lnb_front">
    <template v-for="(item, index) in menuRoutes" :key="index">
      <v-list-item
        :class="[
          'list_1dep',
          { select: isSelected(item), completed: item.isCompleted },
        ]"
        @click="handleClick(item)"
      >
        <v-list-item-content>
          <v-list-item-title class="btn_menu">
            {{ item.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list class="menu_2dep" v-if="item.subMenu">
        <v-list-item
          v-for="(subItem, subIndex) in item.subMenu"
          :key="subIndex"
          :class="[
            'list_2dep',
            { select: isSelected(subItem), completed: subItem.isCompleted },
          ]"
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

// eslint-disable-next-line no-unused-vars
const isSelected = (item) => {
  return false;
};
</script>
<style scoped>
.v-btn {
  margin-left: 8px;
}

.v-icon {
  font-size: 20px;
}
.lnb_front {
  background: transparent;

  .menu-list {
    overflow-y: auto;
    padding: 16px;
  }
  .menu-list::-webkit-scrollbar {
    display: none;
  }
  .v-list {
    padding: 0;
    background: transparent;
    display: block;

    .v-list-item {
      min-height: 40px;
      white-space: normal;
      display: block;
      margin-bottom: 8px;
    }
    .v-list-item-title {
      white-space: normal;
    }
    .v-list-item.list_1dep {
      min-height: 50px;
      background: #3d4a62;
      margin-bottom: 12px;
      border-radius: 8px;
      display: block;
    }
  }

  .list_1dep {
    .btn_menu {
      position: relative;
      display: block;
      font-size: 18px;
      font-weight: 700;
      color: #333;
      padding: 15px;
    }
  }

  .menu_2dep {
    background: transparent;
    padding-left: 20px;
    display: block;

    .list_2dep {
      display: block;
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
.completed {
  /* 페이지 완료 여부용
  text-decoration: line-through;
  text-decoration-color: #fff;
  font-weight: bold; */
}
</style>

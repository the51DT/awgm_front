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
  background: #3f4d66;

  /* Ensure menu list takes up available space and makes sidebar scrollable */
  .menu-list {
    overflow-y: auto; /* Enables scrolling if content overflows */
  }
  .menu-list::-webkit-scrollbar {
    display: none;
  }
  .v-list {
    padding: 0;
    .v-list-item {
      min-height: 40px;
      white-space: normal;
    }
    .v-list-item-title {
      white-space: normal;
    }
    .v-list-item.list_1dep {
      min-height: 50px;
    }
  }
  .subTitle {
    margin: 0;

    height: 60px;
    background-color: #2c3e50;

    .btn_menu {
      font-weight: 700;
      color: #ffffff;

      font-size: 20px;
      transition: background 0.3s ease;
    }
  }

  .list_1dep {
    .btn_menu {
      position: relative;
      display: block;
      font-size: 18px;
      font-weight: 700;
      color: #ffffff;

      transition: background 0.3s ease;
    }

    &.select .btn_menu {
      background-color: #2c3e50;
      color: #ffffff;
    }

    &.select .btn_menu::after {
      content: "";
      display: block;
      width: 100%;

      background: #ffffff;
      border-radius: 6px;
      opacity: 0.2;
    }
  }

  .menu_2dep {
    .list_2dep {
      .btn_menu {
        position: relative;
        margin: 0;
        font-size: 14px;
        font-weight: 700;
        color: #c2c2c2;
        margin-left: 14px;
      }
    }
  }

  .sidebar-buttons {
    margin-top: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    background-color: #3f4d66;

    a {
      text-decoration: none;
    }

    .sidebar-btn {
      width: 100%;
      background-color: #ffffff;
      color: #000000;
      height: 48px;
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

<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link to="/홈 첼린지-Gut00004">
          <img :src="home === true ? require(`@/assets/images/nav_home_on.svg`): require(`@/assets/images/nav_home.svg`)">
          <p :class="home === true ? 'on': ''">홈</p>
        </router-link>
      </li>
      <li>
        <router-link to="/홈 첼린지-Gut00008">
          <img :src="challenge === true ? require(`@/assets/images/nav_challenge_on.svg`): require(`@/assets/images/nav_challenge.svg`)">
          <p :class="challenge === true ? 'on': ''">챌린지</p>
        </router-link>
      </li>
      <li>
        <router-link to="/나의 팀 목록-Gut00009">
          <img :src="team === true ? require(`@/assets/images/nav_team_on.svg`): require(`@/assets/images/nav_team.svg`)">
          <p :class="team === true ? 'on': ''">나의 팀</p>
        </router-link>
      </li>
      <li>
        <router-link to="/나의 Gut index-Gut00034">
          <img :src="my === true ? require(`@/assets/images/myGut_on.svg`): require(`@/assets/images/myGut.svg`)">
          <p :class="my === true ? 'on': ''">나의 Gut</p>
        </router-link>
      </li>
      <li>
        <router-link to="/마이 index-Gut00015">
          <img :src="my === true ? require(`@/assets/images/nav_my_on.svg`): require(`@/assets/images/nav_my.svg`)">
          <p :class="my === true ? 'on': ''">마이</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppNav",
  props: {
    home: {
      type: Boolean,
      default: false,
    },
    challenge: {
      type: Boolean,
      default: false,
    },
    team: {
      type: Boolean,
      default: false,
    },
    my: {
      type: Boolean,
      default: false,
    },
  }
};
</script>

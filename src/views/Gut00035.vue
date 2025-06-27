<template>
  <div class="activity bg-case">
    <div class="activity__area">
      <div class="activity__area-profile">
        <img src="../assets/images/badgeImg/pin--diamond.svg" />
        <div class="badge__desc">
          <span> 트리플 다이아몬드 </span>
          <button type="button"  class="badges_reward_btn__open">
            <img src="@/assets/images/icon_tooltip.svg" alt="핀레벨 뱃지 설명 툴팁 오픈 버튼"/>
          </button>
        
          <!-- 뱃지 설명 툴팁 팝업 -->
          <div class="badges_reward">
            <div class="badges_reward_btn">
              <div class="badges_reward_btn__pop">
                <span class="badges_reward_btn-txt"> 총 인증 횟수에 따라 핀레벨이 올라갑니다. </span>
                <button class="badges_reward_btn__pop__close"></button>
                <div class="activity__area_badge-section">
                  <div class="badge-box-wrap">
                    <div class="badge-box"> <BadgeDefault img="pin--beginner.svg">0회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--rookie.svg">2회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--bronze_builder.svg">5회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--bronze_foundation.svg">8회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--silver_producer.svg">11회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--gold_producer.svg">31회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--platinum.svg">51회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--ruby.svg">71회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--sapphire.svg">9회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--emerald.svg">111회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--diamond.svg">131회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--exclutive_diamond.svg">151회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--double_diamond.svg">181회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--triple_diamond.svg">211회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--crown.svg">241회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--founders_crown.svg">271회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--crown_ambassador.svg">301회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--founders_crown_ambassador_40.svg">316회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--founders_crown_ambassador_50.svg">331회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--founders_crown_ambassador_60.svg">346회</BadgeDefault></div>
                    <div class="badge-box"> <BadgeDefault img="pin--founders_crown_ambassador_60.svg">361회</BadgeDefault></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="wrap">
          <p class="name"> 김웨이 </p>
          <p class="during"> <span> 2025년 9월 </span>~ <span> 2026년 8월</span></p>
        </div>
      </div>
    </div>

    <div class="activity__area-record">
      <div class="para-title">
        <h5> 현재 기록 </h5>
        <button>이전 기록 <img src="../assets/images/icon_arrow_r_gray.svg" /> </button>
      </div>
      <div class="activity__area-record-box-wrap">
        <div class="record-box">
          <div>
            <h7>인증횟수</h7>
          </div>
          <div>
            <p> 누적 </p>
            <p class="green"> 21개 </p>
          </div>
          <div>
            <p>최대 연속 </p>
            <p class="green"> 10개 </p>
          </div>
        </div>
        <div class="record-box">
          <div>
            <h7>챌린지</h7>
          </div>
          <div>
            <p> 참여 수 </p>
            <p class="green"> 5회 </p>
          </div>
          <div>
            <p>성공 </p>
            <p class="green"> 4회 </p>
          </div>
        </div>
        <div class="record-box">
          <div>
            <h7>최고 인증률</h7>
          </div>
          <div>
            <p> 상시 </p>
            <p class="green"> 80% </p>
          </div>
          <div>
            <p> 챌린지 </p>
            <p class="green"> 80% </p>
          </div>
        </div>
        <div class="record-box">
          <div>
            <h7>최고 달성 랭킹</h7>
          </div>
          <div>
            <p> 상시 </p>
            <p class="green"> 1개 </p>
          </div>
          <div>
            <p> 챌린지 </p>
            <p class="green"> 3위 </p>
          </div>
        </div>
      </div>
    </div>

    <div class="activity__area-terms-tab">

      <div class="para-title">
        <h5> 배지 활동 </h5>
        <p> 총 <span class="green"> 0개</span> 보유 </p>
      </div>
      <!-- 대표 뱃지 없을 시 -->
      <div class="represent__badge-wrap" v-if="hasRepresent">
        <div class="represent__badge no-represent">
          <p class="represent__badge-txt">획득한 배지에서 대표배지를 설정해주세요   </p>
          <div class="btn">
            <button type="button" class="btn-text" title="대표 배지 설정 "> 대표 배지 설정</button>
            <button type="button" class="btn-modify" title="대표 배지 설정"><span class="blind">대표 배지 설정</span></button>
          </div>
        </div>
        <p class="represent__badge-txt">아직 획득한 배지가 없어요 </p>
      </div>
      <!--  대표 뱃지 있을 시 -->
      <div class="represent__badge-wrap" v-else>
        <div class="represent__badge">
          <BadgeDefault img="badge__birthday.svg" pointColor="green">
            나의 생일
          </BadgeDefault>
          <div class="btn">
            <button type="button" class="btn-text" title="대표 배지 설정 "> 대표 배지 설정</button>
            <button type="button" class="btn-modify" title="대표 배지 설정"><span class="blind">대표 배지 설정</span></button>
          </div>
        </div>
      </div>

      <div class="activity__area_badge-section">
        <div class="para-title-2rd">
          <h6> 연속인증 </h6>
        </div>
        <div class="badge-box-wrap">
          <div class="badge-box"> <BadgeDefault img="badge__continuous_10.svg">10일 연속 인증</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__continuous_30.svg">30일 연속 인증</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__continuous_60.svg">60일 연속 인증</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__continuous_90.svg">90일 연속 인증</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__continuous_100.svg">100일 연속 인증</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">180일 연속 인증</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">200일 연속 인증</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">240일 연속 인증</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">300일 연속 인증</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">365일 연속 인증</BadgeDefault></div>
        </div>
      </div>

      <div class="activity__area_badge-section">
        <div class="para-title-2rd">
          <h6> 챌린지 참여 </h6>
        </div>
        <div class="badge-box-wrap">
          <div class="badge-box"> <BadgeDefault img="badge__participate_1.svg"> 것모닝코리아 챌린지 1회 성공</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__participate_2.svg"> 것모닝코리아 챌린지 2회 성공</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">챌린지 비기너</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">챌린지 퍼펙트</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">챌린지 막판스퍼트</BadgeDefault></div>
        </div>
      </div>

      <div class="activity__area_badge-section">
        <div class="para-title-2rd">
          <h6> 팀장 </h6>
        </div>
        <div class="badge-box-wrap"> 
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">솔플 축하</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__iAmLeader.svg">팀장</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__talentedLeader.svg">팀장의 자질</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__leaderOfLeader.svg">팀장의 정석</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">우수 팀장</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">혹독한 팀장</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">가혹한 팀장</BadgeDefault></div>
        </div>
      </div>

      <div class="activity__area_badge-section">
        <div class="para-title-2rd">
          <h6> 이벤트 배지 </h6>
        </div>
        <div class="badge-box-wrap"> 
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__newYear.svg">새해 첫날</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__firstAttendance.svg">찻 인증</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__birthday.svg">나의 생일</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__welcomBack.svg">복귀왕</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__bestTeamMate.svg">팀메이트</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
          <div class="badge-box"> <BadgeDefault img="badge__lock.svg" pointColor="lock">배지명</BadgeDefault></div>
        </div>
      </div>
    </div>

  </div>

    

  <AppNav :activity="true"></AppNav>
</template>

<script>
import AppNav from "@/layouts/AppNav.vue";
import BadgeDefault from "@/components/BadgeDefault.vue";

import tabFn from "@/plugins/common.js";
import layerClose from "@/plugins/common.js";

export default {
  name: "Gut_000035",
  components: {
    AppNav,
    BadgeDefault
  },
  data() {
    return {
      hasRepresent: false,
    };
  },
  setup() {

  },
  mounted() {
    tabFn.tabFn();
    layerClose.layerClose("badges_reward");
  },
  beforeUnmount() {

  },
  methods: { 

  },
};
</script>

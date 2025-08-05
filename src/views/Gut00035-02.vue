<template>
  <!-- 00035 백업용 -->
  <div class="activity bg-case bg-green">
    <div class="activity__area">
      <div class="activity__area-certified">
        <div>
          <p> 최초 인증일 </p>
          <p> 2024년 12월 31일 </p>
        </div>
        <div>
          <p> 총 누적 인증 횟수 </p>
          <p> 1,230회 </p>
        </div>
      </div>
    </div>
    <div class="activity__area-terms-tab home">
      <div class="activity__area-profile">
        <h2> 현재 나의 활동</h2>
        <p class="activity__area-profile-date"> 활동 기준일 : 2025년 9월 ~ 2026년 8월</p>
        <BadgeDefault img="pin--diamond.svg" />
        <div class="badge__desc">
          <span class="badge__desc-my"> 다이아몬드 </span>
          <button type="button" class="badges_reward_btn__open">
            <img src="@/assets/images/icon_tooltip.svg" alt="핀레벨 뱃지 설명 툴팁 오픈 버튼" />
          </button>

          <!-- 뱃지 설명 툴팁 팝업 -->
          <div class="badges_reward">
            <div class="badges_reward_btn">
              <div class="badges_reward_btn__pop">
                <span class="badges_reward_btn-txt"> 총 인증 횟수에 따라 것모닝핀이 올라갑니다. </span>
                <button class="badges_reward_btn__pop__close"></button>
                <div class="activity__area_badge-section">
                  <div class="badge-box-wrap">
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--beginner.svg">비기너</BadgeDefault>
                      <span> 0회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--rookie.svg">루키</BadgeDefault>
                      <span> 2회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--bronze_builder.svg">브론즈 파운데이션</BadgeDefault>
                      <span> 5회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--bronze_foundation.svg">브론즈 빌더</BadgeDefault>
                      <span> 8회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--silver_producer.svg">실버 프로듀서</BadgeDefault>
                      <span> 11회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--gold_producer.svg">골드 프로듀서</BadgeDefault>
                      <span> 31회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--platinum.svg">플래티늄</BadgeDefault>
                      <span> 51회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--ruby.svg">루비</BadgeDefault>
                      <span> 71회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--sapphire.svg">사파이어</BadgeDefault>
                      <span> 91회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--emerald.svg">에메랄드</BadgeDefault>
                      <span> 111회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--diamond.svg">다이아몬드</BadgeDefault>
                      <span> 131회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--exclutive_diamond.svg">수석 다이아몬드</BadgeDefault>
                      <span> 151회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--double_diamond.svg">더블 다이아몬드</BadgeDefault>
                      <span> 181회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--triple_diamond.svg">트리플 다이아몬드</BadgeDefault>
                      <span> 211회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--crown.svg">크라운</BadgeDefault>
                      <span> 241회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--founders_crown.svg">파운더스 크라운</BadgeDefault>
                      <span> 271회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--crown_ambassador.svg">크라운 앰배서더</BadgeDefault>
                      <span> 301회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--founders_crown_ambassador.svg">파운더스 크라운 앰배서더
                      </BadgeDefault>
                      <span> 316회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--founders_crown_ambassador_40.svg">파운더스 크라운 앰배서더 40
                      </BadgeDefault>
                      <span> 331회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--founders_crown_ambassador_50.svg">파운더스 크라운 앰배서더 50
                      </BadgeDefault>
                      <span> 346회</span>
                    </div>
                    <div class="badge-box">
                      <BadgeDefault pointColor="white" img="pin--founders_crown_ambassador_60.svg">파운더스 크라운 앰배서더 60
                      </BadgeDefault>
                      <span> 361회</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wrap">
          <p class="name"> 김웨이 </p>
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
      <div class="para-title">
        <h5> 배지 활동 </h5>
        <p> 총 <span class="green"> 0개</span> 보유 </p>
      </div>
      <!--  대표 뱃지 있을 시 -->
      <!-- <div class="represent__badge-wrap">
        <div class="represent__badge">
          <BadgeDefault img="badge--happy_birthday.svg">
            나의 생일
          </BadgeDefault>
          <div class="btn">
            <button type="button" class="btn-text" title="대표 배지 설정 "> 대표 배지 설정</button>
            <button type="button" class="btn-modify" title="대표 배지 설정"><span class="blind">대표 배지 설정</span></button>
          </div>
        </div>
      </div> -->
      <!-- 대표 뱃지 없을 시 -->
      <div class="represent__badge-wrap">
        <div class="represent__badge no-represent">
          <p class="represent__badge-txt">획득한 배지에서 대표배지를 설정해주세요 </p>
          <div class="btn">
            <button type="button" class="btn-text" title="대표 배지 설정 "> 대표 배지 설정</button>
            <button type="button" class="btn-modify" title="대표 배지 설정"><span class="blind">대표 배지 설정</span></button>
          </div>
        </div>
        <p class="represent__badge-txt">아직 획득한 배지가 없어요 </p>
      </div>

      <div class="activity__area_badge-section">
        <div class="para-title-2rd">
          <h6> 연속인증 </h6>
        </div>
        <div class="badge-box-wrap home">
          <div class="badge-box">
            <BadgeDefault img="badge--lock-wave.svg" pointColor="lock">10일 연속 인증</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-wave.svg" pointColor="lock">20일 연속 인증</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-wave.svg" pointColor="lock">30일 연속 인증</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-wave.svg" pointColor="lock">60일 연속 인증</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-wave.svg" pointColor="lock">90일 연속 인증</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-wave.svg" pointColor="lock">100일 연속 인증</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-wave.svg" pointColor="lock">180일 연속 인증</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-wave.svg" pointColor="lock">200일 연속 인증</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-wave.svg" pointColor="lock">240일 연속 인증</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-wave.svg" pointColor="lock">300일 연속 인증</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-wave.svg" pointColor="lock">365일 연속 인증</BadgeDefault>
          </div>
        </div>
      </div>

      <div class="activity__area_badge-section">
        <div class="para-title-2rd">
          <h6> 챌린지 참여 </h6>
        </div>
        <div class="badge-box-wrap home">
          <div class="badge-box">
            <BadgeDefault img="badge--lock-hex.svg" pointColor="lock"> 것모닝코리아 챌린지 1회 성공</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-hex.svg" pointColor="lock"> 것모닝코리아 챌린지 2회 성공</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-hex.svg" pointColor="lock">챌린지 비기너</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-hex.svg" pointColor="lock">챌린지 퍼펙트</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-hex.svg" pointColor="lock">챌린지 막판스퍼트</BadgeDefault>
          </div>
        </div>
      </div>

      <div class="activity__area_badge-section">
        <div class="para-title-2rd">
          <h6> 팀장 </h6>
        </div>
        <div class="badge-box-wrap home">
          <div class="badge-box">
            <BadgeDefault img="badge--lock-drape.svg" pointColor="lock">솔플 축하</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-drape.svg" pointColor="lock">팀장</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-drape.svg" pointColor="lock">팀장의 자질</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-drape.svg" pointColor="lock">팀장의 정석</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-drape.svg" pointColor="lock">우수 팀장</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-drape.svg" pointColor="lock">혹독한 팀장</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-drape.svg" pointColor="lock">가혹한 팀장</BadgeDefault>
          </div>
        </div>
      </div>

      <div class="activity__area_badge-section">
        <div class="para-title-2rd">
          <h6> 이벤트 배지 </h6>
        </div>
        <div class="badge-box-wrap home">
          <div class="badge-box">
            <BadgeDefault img="badge--lock-semicircle.svg" pointColor="lock">리치 디보스 탄생일</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-semicircle.svg" pointColor="lock">제이 벤 엔델 탄생일</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-semicircle.svg" pointColor="lock">한국암웨이 창립기념일 </BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-semicircle.svg" pointColor="lock">파운더스데이 </BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-wave.svg" pointColor="lock">새해 첫날</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-wave.svg" pointColor="lock">추석</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-hex.svg" pointColor="lock">첫 인증</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-circle.svg" pointColor="lock">2대 것모너</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-circle.svg" pointColor="lock">다둥이</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-hex-rotate.svg" pointColor="lock">패밀리데이</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-octagon-rotate.svg" pointColor="lock">어린이날</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-octagon.svg" pointColor="lock">문어발</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-semicircle.svg" pointColor="lock">나의 생일</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-circle.svg" pointColor="lock">복귀왕</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-drape.svg" pointColor="lock">얼리 것모너</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-drape.svg" pointColor="lock">브런치 것모너</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-octagon.svg" pointColor="lock">세계 여성의날</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-circle.svg" pointColor="lock">지구의 날</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-semicircle.svg" pointColor="lock">고스트 것모닝</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-star.svg" pointColor="lock">스윗 것모닝</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-octagon.svg" pointColor="lock">광복절</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-hex-rotate.svg" pointColor="lock">썸머 것모닝</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-hex-rotate.svg" pointColor="lock">윈터 것모닝</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-star.svg" pointColor="lock">메리 크리스마스</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-hex-rotate.svg" pointColor="lock">베스트 팀메이트</BadgeDefault>
          </div>
          <div class="badge-box">
            <BadgeDefault img="badge--lock-octagon-rotate.svg" pointColor="lock">가족의 힘</BadgeDefault>
          </div>
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

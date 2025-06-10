<template>
  <div class="content-area">
    <ContentHead :leftArea=true title="보상 지급 이력" headType="ty02"/>
    <div class="my-page-wrap">
      <div class="card card--border card--p16 card--shadowc2">
        <p class="card__head">GUT Morning Korea Challenge</p>
        <div class="card__top">
          <div class="card__text">
            <p class="card__text__title">팀명 <b> 아침마다 오 마이 GUT Morning</b></p>
            <div class="card__info">
              <div class="card__team--nick">팀장닉네임</div>
            </div>
            <div class="ty02 card__text__list">
              <dl>
                <dt> 성공 보상명 </dt>
                <dd> 보상명이 노출되는 영역입니다 </dd>
              </dl>
              <dl>
                <dt> 성공보상수령방법 </dt>
                <dd> abcd </dd>
              </dl>
              <dl>
                <dt> 바우처명 </dt>
                <dd> 바우처명이 노출되는 영역입니다
                    <br /> <button><span> 바우처 확인하기</span><img src="../assets/images/icon_arrow_r_gray.svg" /> </button>  
                </dd>
              </dl>
              <dl>
                <dt> 지급일 </dt>
                <dd> 2025년 10월 31일 </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="card card--border card--p16 card--shadowc2">
        <p class="card__head">GUT Morning Korea Challenge</p>
        <div class="card__top">
          <div class="card__text">
            <p class="card__text__title">팀명 <b> 아침마다 오 마이 GUT Morning</b></p>
            <div class="card__info">
              <div class="card__team--nick">팀장닉네임</div>
            </div>
            <div class="ty02 card__text__list">
              <dl>
                <dt> 성공 보상명 </dt>
                <dd> 보상명이 노출되는 영역입니다 </dd>
              </dl>
              <dl>
                <dt> 성공보상수령방법 </dt>
                <dd> abcd </dd>
              </dl>
              <dl>
                <dt> 바우처명 </dt>
                <dd> 바우처명이 노출되는 영역입니다
                    <br /> <button><span> 바우처 확인하기</span><img src="../assets/images/icon_arrow_r_gray.svg" /> </button>  
                </dd>
              </dl>
              <dl>
                <dt> 지급일 </dt>
                <dd> 2025년 10월 31일 </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="card card--border card--p16 card--shadowc2">
        <p class="card__head">GUT Morning Korea Challenge</p>
        <div class="card__top">
          <div class="card__text">
            <p class="card__text__title">팀명 <b> 아침마다 오 마이 GUT Morning</b></p>
            <div class="card__info">
              <div class="card__team--nick">팀장닉네임</div>
            </div>
            <div class="ty02 card__text__list">
              <dl>
                <dt> 성공 보상명 </dt>
                <dd> 보상명이 노출되는 영역입니다 </dd>
              </dl>
              <dl>
                <dt> 성공보상수령방법 </dt>
                <dd> abcd </dd>
              </dl>
              <dl>
                <dt> 바우처명 </dt>
                <dd> 바우처명이 노출되는 영역입니다
                    <br /> <button><span> 바우처 확인하기</span><img src="../assets/images/icon_arrow_r_gray.svg" /> </button>  
                </dd>
              </dl>
              <dl>
                <dt> 지급일 </dt>
                <dd> 2025년 10월 31일 </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="card card--border card--p16 card--shadowc2">
        <p class="card__head">GUT Morning Korea Challenge</p>
        <div class="card__top">
          <div class="card__text">
            <p class="card__text__title">팀명 <b> 아침마다 오 마이 GUT Morning</b></p>
            <div class="card__info">
              <div class="card__team--nick">팀장닉네임</div>
            </div>
            <div class="ty02 card__text__list">
              <dl>
                <dt> 성공 보상명 </dt>
                <dd> 보상명이 노출되는 영역입니다 </dd>
              </dl>
              <dl>
                <dt> 성공보상수령방법 </dt>
                <dd> abcd </dd>
              </dl>
              <dl>
                <dt> 바우처명 </dt>
                <dd> 바우처명이 노출되는 영역입니다
                    <br /> <button><span> 바우처 확인하기</span><img src="../assets/images/icon_arrow_r_gray.svg" /> </button>  
                </dd>
              </dl>
              <dl>
                <dt> 지급일 </dt>
                <dd> 2025년 10월 31일 </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<style scoped>
  .ty02.card__text__list dl dt, .ty02.card__text__list dl dd{
    color: #666;
    /* flex: 2; */
  }
  .my-page-wrap{
    padding: 0 0 140px 0;
  }
  .card__head{
    color: #111;
    margin: 8px 0;
  }
  .card__team--nick{
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }

</style>

<script>
import ContentHead from "@/components/ContentHead.vue";

export default {
  name: "Gut_00036",
  data() {
    return {
      leftArea: "",
      rightArea: "",
    };
  },
  components: {
    ContentHead,
  },
  methods: {
  }
};
</script>

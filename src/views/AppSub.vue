<template>
  <div>
    <h2>Sub</h2>
    <p>것모닝 서브</p>
    <InputField placeholder="자녀계정 아이디" title="아이디입력" />
    <InputField type="password" placeholder="자녀계정 비밀번호" caption="비밀번호 8글자" title="비밀번호" />
    <InputField type="password" placeholder="오류 빨강" caption="오류 캡션" warn />
    <InputField type="select" placeholder="셀렉트 플레이스홀더" :options="['1', '2', '3']" title="셀렉트"/>
    <InputField type="toggle" id="toggle" title="토글"/>
    <InputField type="radio" title="라디오" name="radio1" caption="* 만 14세 미만인 경우 부모의 동의가 필요합니다."
      :radio="[
        {id: 'radio1_1', value: 'radio1_1', checked: true, label: '만 14세 미만입니다.'},
        {id: 'radio1_2', value: 'radio1_2', checked: false, label: '만 14세 이상입니다.'},
      ]" />
    <InputField type="checkbox"  title="체크박스" name="checkbox1"
      :checkbox="[
        {id: 'checkbox1_1', value: 'checkbox1_1', checked: true, label: '라벨'},
        {id: 'checkbox1_2', value: 'checkbox1_2', checked: false, label: '라벨'},
      ]"  />
    <InputField type="date" title="날짜"
      :date="[
        {value: '2024-02-14', disabled: true},
        {disabled: false, placeholder: '선택'},
      ]" />
  </div>
  <CustomButton>버튼 디폴트</CustomButton>
  <CustomButton size="md" color="light">중간 사이즈 / 밝은 회색</CustomButton>
  <CustomButton size="sm" color="gray">작은 사이즈 / 회색</CustomButton>
  <CustomButton color="dark">어두운 회색</CustomButton>
  <CustomButton color="yellow">노란색</CustomButton>
  <PopupDefault>
    <template v-slot:title>
      팝업 타이틀
    </template>
    <template v-slot:cont>
      <span>볼드 텍스트</span> 일반 텍스트
    </template>
    <template v-slot:btn>
      <CustomButton size="md">
        전체 이미지 저장
      </CustomButton>
    </template>
  </PopupDefault>
</template>

<script>
import InputField from "@/components/InputField.vue";
import PopupDefault from "@/components/PopupDefault.vue";
import CustomButton from "@/components/CustomButton.vue";
export default {
  name: "AppSub",
  components: {
    InputField,
    PopupDefault,
    CustomButton,
  }
};
</script>

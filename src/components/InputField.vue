<template>
  <div
    :class="
      readonly === false ? 'inputField' : 'inputField inputField--disabled'
    "
  >
    <!-- 타이틀 -->
    <p v-if="title" class="inputField__title">{{ title }}</p>
    <div class="inputField__wrap">
      <!-- 셀렉트 -->
      <select
        v-if="type === 'select'"
        :class="
          warn === false
            ? 'inputField__input'
            : 'inputField__input inputField__input--warn'
        "
        :id="id"
        :name="name"
        :readonly="readonly"
      >
        <option disabled selected hidden>{{ placeholder }}</option>
        <option :key="i" v-for="(options, i) in options" :value="options">
          {{ options }}
        </option>
      </select>
      <!-- 라디오 -->
      <div 
        v-else-if="type === 'radio'"
        class="inputField__input__radio--wrap"
        :key="i"
        v-for="(radio, i) in radio"
      >
        <input
          :type="type"
          class="inputField__input inputField__input__radio"
          :id="radio.id"
          :name="name"
          :value="radio.value"
          :readonly="readonly"
          :checked="radio.checked"
        />
        <label
          :for="radio.id"
          class="inputField__input__radio--label"
        >
          <span>{{ radio.label }}</span>
        </label>
      </div>
      <!-- 체크박스 -->
      <div 
        v-else-if="type === 'checkbox'"
        class="inputField__input__checkbox--wrap"
        :key="e"
        v-for="(checkbox, e) in checkbox"
      >
        <input
          :type="type"
          class="inputField__input inputField__input__checkbox"
          :id="checkbox.id"
          :name="name"
          :value="checkbox.value"
          :readonly="readonly"
          :checked="checkbox.checked"
        />
        <label
          :for="checkbox.id"
          class="inputField__input__checkbox--label"
        >
          <span>{{ checkbox.label }}</span>
        </label>
      </div>
      <!-- 토글 -->
      <input
        v-else-if="type === 'toggle'"
        type="checkbox"
        class="inputField__toggle"
        :id="id"
        :name="name"
        :readonly="readonly"
        :checked="checked"
      />
      <!-- 날짜 -->
      <div v-else-if="type === 'date'" class="inputField__date--wrap">
        <input
          type="date"
          class="inputField__input inputField__date"
          :defaultValue="date[0].value"
          :min="date[0].min"
          :max="date[0].max"
          :disabled="date[0].disabled"
          required
        >
        <span>~</span>
        <input
          type="date"
          class="inputField__input inputField__date"
          :defaultValue="date[1].value"
          :min="date[1].min"
          :max="date[1].max"
          :disabled="date[1].disabled"
          required
        >
      </div>
      <!-- 파일 / 케이스 2개 작업중 -->
      <input
        v-else-if="type === 'file'"
        :type="type"
        class="inputField__file"
        :id="id"
        :name="name"
      />
      <!-- 복사 인풋 -->
      <input
        v-else-if="type === 'copy'"
        type="text"
        class="inputField__input inputField__copy"
        :id="id"
        :name="name"
        :value="placeholder"
        readonly="readonly"
      />
      <!-- 그외 -->
      <input
        v-else
        :type="type"
        :class="
          warn === false
            ? 'inputField__input'
            : 'inputField__input inputField__input--warn'
        "
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :readonly="readonly"
        :checked="checked"
      />

      <!-- 패스워드 눈 버튼 -->
      <button
        v-if="type === 'password'"
        class="inputField__button"
        :readonly="readonly"
        @click="passwordView"
      ></button>
      <!-- 패스워드 눈 버튼 -->
      <button
        v-if="type === 'copy'"
        class="inputField__button--copy"
      ></button>
      <!-- 토글 라벨 -->
      <label
        v-if="type === 'toggle'"
        :for="id"
        class="inputField__toggle--label"
      >
        <span class="inputField__toggle--label--circle"></span>
      </label>
    </div>
    <!-- 캡션 -->
    <p
      v-if="caption"
      :class="
        warn
          ? 'inputField__caption inputField__caption--warn'
          : 'inputField__caption'
      "
    >
      {{ caption }}
    </p>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    type: {
      type: String,
      default: 'text'
    },
    title: String,
    caption: String,
    id: String,
    name: String,
    placeholder: String,
    label: String,
    readonly: Boolean,
    warn: Boolean,
    checked: Boolean,
    disabled: Boolean,
    radio: {
      type: Array,
      default: () => {
        return ['']
      }
    },
    checkbox: {
      type: Array,
      default: () => {
        return [{
          id: "id",
          value: "value",
          checked: false,
          label: "label",
        }]
      }
    },
    date: {
      type: Array,
      default: () => {
        return [{
          disabled: false,
        }, {
          disabled: false,
        }]
      }
    },
    options: {
      type: Array,
      default: () => {
        return [{
          id: "id",
          value: "value",
          checked: false,
          label: "label",
        }]
      }
    }
  },
  methods: {
    // 패스워드 눈 버튼
    passwordView: (el) => {
      const target = el.currentTarget.previousElementSibling
      if (target.readOnly !== true) {
        target.classList.toggle('on')
        if (target.classList.contains('on')) {
          target.setAttribute('type', 'text')
          el.currentTarget.classList.add('on')
        } else {
          target.setAttribute('type', 'password')
          el.currentTarget.classList.remove('on')
        }
      }
    },
  }
}
</script>

<template>
    <div class="home--addBtn" v-show="addBtnHomeShow"> <!-- active 클래스 추가 되는 경우, 하단 푸터 위치값 고정   -->
        <div class="home--addBtn-area">
            <button type="button" class="home--addBtn-create">홈 화면에 추가</button>
        </div>
        <button type="button" class="home--addBtn-hidden" @click="closeEvt('hidden')">다시 안보기</button>
        <button type="button" class="home--addBtn-close" title="닫기" @click="closeEvt('hidden')"></button>
    </div>
</template>

<script>
    export default {
        name: 'AddBtnHome',
        data() {
            return {
                addBtnHomeShow : this.addBtnHomeShow
            }
        },
        methods: {
          handleScroll() {
            this.addBtnHomeShow = window.scrollY > 0;

            if(this.addBtnHomeShow) {
              const addBtnHome = document.querySelector(".home--addBtn");
              const topBtn = document.querySelector(".top--button");

              if(addBtnHome.classList.contains("hidden")) {
                topBtn.style.display = "block";
              }
            }
          },
          closeEvt(type) {
            const addBtnHome = document.querySelector(".home--addBtn");
            const topBtn = document.querySelector(".top--button");
            
            if(type === 'hidden') {
              if(addBtnHome.classList.contains("hidden")) {
                addBtnHome.classList.remove("hidden");
                // topBtn.style.display = "none";
              } else {
                addBtnHome.classList.add("hidden");
                topBtn.style.display = "block";
              }
            } else {
              addBtnHome.style.display = "none";
              topBtn.style.display = "block";
            }            
          },
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
    }
</script>
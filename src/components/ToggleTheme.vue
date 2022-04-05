<template>
  <div class="toggle-ctn" :class="`${theme}__text--theme-chooser`">
    <h2 class="toggle-ctn__title">THEME</h2>
    <div class="toggle-ctn__switch-ctn">
      <input type="radio" name="theme" id="theme-1" checked />
      <label for="theme-1" @click="changeTheme" id="t-1">1</label>
      <input type="radio" name="theme" id="theme-2" />
      <label for="theme-2" @click="changeTheme" id="t-2">2</label>
      <input type="radio" name="theme" id="theme-3" />
      <label for="theme-3" @click="changeTheme" id="t-3">3</label>
      <div class="slider-ctn" :class="`${theme}__toggle-keypad-bg`">
        <span
          class="slider-ctn__slider"
          :class="`${theme}__key-bg--equal-toggle ${theme}__key-shadow--equal-toggle`"
          id="slider"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    theme: String,
  },
  methods: {
    changeTheme(e: any) {
      this.$emit("changeTheme", e);
    },
  },
})
export default class ToggleTheme extends Vue {}
</script>

<style lang="scss">
.toggle-ctn {
  display: flex;
  align-items: flex-end;
  &__title {
    font-size: 14px;
    margin: 0 1.6rem 0.3rem 0;
  }
  &__switch-ctn {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    input {
      display: none;
    }
    label {
      cursor: pointer;
      font-size: 14px;
      padding: 0 0.8rem 0.4rem 0.8rem;
      transition: transform 0.5s ease-out;
      &:hover {
        transform: rotate(6deg) scale(2, 2);
      }
    }
    #theme-1:checked {
      ~ .slider-ctn > #slider {
        left: 0.5rem;
      }
    }
    #theme-2:checked {
      ~ .slider-ctn > #slider {
        left: calc(33.3% + 0.5rem);
      }
    }
    #theme-3:checked {
      ~ .slider-ctn > #slider {
        left: calc(100% - 1.75rem);
      }
    }
    .slider-ctn {
      width: 100%;
      height: 2rem;
      margin: auto;
      border-radius: 2rem;
      &__slider {
        display: inline-block;
        height: 1.25rem;
        width: 1.25rem;
        border-radius: 100%;
        position: relative;
        top: calc(0.75rem / 2);
        left: 0.5rem;
        transition: 0.5s left 0.05s ease-in-out;
      }
    }
  }
}
</style>

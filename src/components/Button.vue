<template>
  <input
    type="button"
    :value="value"
    @click="customclick"
    :class="[
      {
        'purple-theme__text--spec-equal': equalPurple,
        'purple-theme__text--spec-keys': delResPurple,
        'purple-theme__text--keys': keysPurple,
      },
      specKeys ? specKeysClass : keysClass,
      isBigBtn ? 'bigBtn' : 'classicBtn',
    ]"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    value: String || Number,
    theme: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      keysClass: this.theme + "__text--keys",
      specKeysClass: this.theme + "__text--spec-keys",
    };
  },
  computed: {
    equalPurple() {
      return this.theme === "purple-theme" && this.value === "=";
    },
    delResPurple() {
      return (
        this.theme === "purple-theme" && ["DEL", "RESET"].includes(this.value)
      );
    },
    keysPurple() {
      return (
        this.theme === "purple-theme" &&
        !["=", "DEL", "RESET"].includes(this.value)
      );
    },
    classicKeys() {
      return (
        this.theme !== "purple-theme" &&
        !["=", "DEL", "RESET"].includes(this.value)
      );
    },
    specKeys() {
      return !this.classicKeys;
    },
    isBigBtn() {
      return ["RESET", "="].includes(this.value);
    },
  },
  methods: {
    customclick(e: any) {
      this.$emit("customclick", e.target.value);
    },
  },
})
export default class Button extends Vue {
  value!: string | number;
}
</script>

<style scoped lang="scss"></style>

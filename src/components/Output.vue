<template>
  <div class="output-ctn">
    <!-- <span v-if="tempIsVisible">{{ temp }}</span> -->
    <output :for="forValues" name="result" :class="`${theme}__text--output`">{{
      output
    }}</output>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    forValues: {
      type: Array,
      required: true,
    },
    output: {
      type: String,
      required: true,
    },
    temp: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
  },
  computed: {
    tempIsVisible() {
      // return this.temp !== "0";
      return false;
    },
  },
})
export default class Output extends Vue {}
</script>

<style lang="scss">
.output-ctn {
  display: flex;
  justify-content: flex-end;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  output {
    display: block;
    padding: 1rem;
    font-size: 2.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>

<template>
  <div>
    <span v-if="tempIsVisible">{{ temp }}</span>
    <output :for="forValues" name="result">{{ output }}</output>
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

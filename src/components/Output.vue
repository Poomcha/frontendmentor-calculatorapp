<template>
  <output :for="forValues" name="result">0</output>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    forValues: {
      type: Array,
      required: true,
    },
  },
})
export default class Output extends Vue {}
</script>

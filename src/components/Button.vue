<template>
  <input type="button" :value="value" @click="customclick" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    value: String || Number,
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

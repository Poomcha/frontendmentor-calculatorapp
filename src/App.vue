<template>
  <Button
    v-for="item in buttons"
    :key="`item-${item}`"
    :value="item"
    @customclick="printvalue"
  ></Button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "./components/Button.vue";
@Options({
  components: {
    Button,
  },
  data() {
    return {
      buttons: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        ".",
        "/",
        "DEL",
        "+",
        "-",
        "x",
        "RESET",
        "=",
      ],
    };
  },
  methods: {
    printvalue(e: object) {
      console.log(e);
    },
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

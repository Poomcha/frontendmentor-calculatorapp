<template>
  <div
    class="main-ctn"
    :class="`${theme}__main-bg ${theme}__text--white`"
    @keydown="handlekeys"
  >
    <div class="main-ctn__calc-ctn">
      <div>
        <h1 class="title" :class="`${theme}__text--title`">calc</h1>
        <ToggleTheme
          @changeTheme="chooseTheme"
          :theme="theme"
          class="toggle"
        ></ToggleTheme>
      </div>
      <form @input="compute">
        <Output
          :forValues="Object.keys(buttons)"
          :output="output"
          :temp="temp"
          class="output"
          :theme="theme"
          :class="`${theme}__screen-bg`"
        ></Output>
        <div class="wrapper-btn" :class="`${theme}__toggle-keypad-bg`">
          <Button
            v-for="item in buttons"
            :key="`item-${item[1]}`"
            :value="item[0]"
            :theme="theme"
            @customclick="outputing"
            :id="item[1]"
            class="button"
            :class="`button--${item[1]}  ${
              item[0] === '='
                ? theme + '__key-shadow--equal'
                : item[0] === 'DEL'
                ? theme + '__key-shadow--del-reset'
                : item[0] === 'RESET'
                ? theme + '__key-shadow--del-reset'
                : theme + '__key-shadow'
            } ${
              item[0] === '='
                ? theme + '__key-bg--equal-toggle'
                : item[0] === 'DEL'
                ? theme + '__key-bg--del-reset'
                : item[0] === 'RESET'
                ? theme + '__key-bg--del-reset'
                : theme + '__key-bg'
            } `"
          ></Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "./components/Button.vue";
import Output from "./components/Output.vue";
import ToggleTheme from "./components/ToggleTheme.vue";
@Options({
  components: {
    Button,
    Output,
    ToggleTheme,
  },
  data() {
    return {
      buttons: {
        0: ["0", "zero"],
        1: ["1", "one"],
        2: ["2", "two"],
        3: ["3", "three"],
        4: ["4", "four"],
        5: ["5", "five"],
        6: ["6", "six"],
        7: ["7", "seven"],
        8: ["8", "eight"],
        9: ["9", "nine"],
        point: [".", "point"],
        plus: ["+", "plus"],
        minus: ["-", "minus"],
        multiply: ["x", "multiply"],
        divide: ["/", "divide"],
        equal: ["=", "equal"],
        delete: ["DEL", "delete"],
        reset: ["RESET", "reset"],
      },
      themes: {
        theme1: true,
        theme2: false,
        theme3: false,
      },
      output: "0",
      temp: "0",
      result: "0",
      operation: "",
    };
  },
  computed: {
    theme() {
      return this.themes.theme1
        ? "dark-theme"
        : this.themes.theme2
        ? "light-theme"
        : "purple-theme";
    },
  },
  methods: {
    handlekeys(e: any) {
      const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
      const operations = ["+", "-", "x", "/", "="];
      const del = "DEL";
      const reset = "RESET";
      if (numbers.includes(e.key) || operations.includes(e.key)) {
        this.outputing(e.key);
      } else if (e.key === "Enter") {
        this.outputing("=");
      } else if (e.key === "Backspace" || e.key === "Delete") {
        this.outputing(del);
      }
    },
    outputing(e: string) {
      const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
      const operations = ["+", "-", "x", "/", "=", "DEL", "RESET"];
      if (numbers.includes(e)) {
        switch (e) {
          case ".":
            if (
              !this.output.includes(".") &&
              !operations.includes(this.output)
            ) {
              this.output += ".";
              console.log(this.output);
            }
            break;
          default:
            this.output === "0" || operations.includes(this.output)
              ? (this.output = e)
              : (this.output += e);
            break;
        }
      } else if (operations.includes(e)) {
        if (!operations.includes(this.output)) {
          switch (e) {
            case "DEL":
              this.output.length === 1
                ? (this.output = "0")
                : (this.output = this.output.slice(0, this.output.length - 1));
              break;
            case "RESET":
              this.output = "0";
              this.temp = "0";
              this.result = "0";
              this.operation = "";
              break;
            case "=":
              switch (this.operation) {
                case "+":
                  this.temp = `${
                    parseFloat(this.temp) + parseFloat(this.output)
                  }`;
                  this.operation = "";
                  this.output = this.temp;
                  break;
                case "-":
                  this.temp = `${
                    parseFloat(this.temp) - parseFloat(this.output)
                  }`;
                  this.operation = "";
                  this.output = this.temp;
                  break;
                case "x":
                  this.temp = `${
                    parseFloat(this.temp) * parseFloat(this.output)
                  }`;
                  this.operation = "";
                  this.output = this.temp;
                  break;
                case "/":
                  this.temp = `${
                    parseFloat(this.temp) / parseFloat(this.output)
                  }`;
                  this.operation = "";
                  this.output = this.temp;
                  break;
                default:
                  this.output = this.temp;
                  break;
              }
              break;
            default:
              switch (this.operation) {
                case "+":
                  this.temp = `${
                    parseFloat(this.temp) + parseFloat(this.output)
                  }`;
                  this.operation = e;
                  this.output = e;
                  break;
                case "-":
                  this.temp = `${
                    parseFloat(this.temp) - parseFloat(this.output)
                  }`;
                  this.operation = e;
                  this.output = e;
                  break;
                case "*":
                  this.temp = `${
                    parseFloat(this.temp) * parseFloat(this.output)
                  }`;
                  this.operation = e;
                  this.output = e;
                  break;
                case "/":
                  this.temp = `${
                    parseFloat(this.temp) / parseFloat(this.output)
                  }`;
                  this.operation = e;
                  this.output = e;
                  break;
                default:
                  if (
                    operations
                      .filter(
                        (value) =>
                          value !== "DEL" && value !== "RESET" && value !== "="
                      )
                      .includes(e)
                  ) {
                    this.temp = this.output;
                    this.operation = e;
                    this.output = e;
                  }
              }
              break;
          }
          console.log(this.temp);
        }
      }
    },
    chooseTheme(e: any) {
      switch (e.target.id) {
        case "t-1":
          this.themes.theme1 = true;
          this.themes.theme2 = false;
          this.themes.theme3 = false;
          break;
        case "t-2":
          this.themes.theme2 = true;
          this.themes.theme1 = false;
          this.themes.theme3 = false;
          break;
        case "t-3":
          this.themes.theme3 = true;
          this.themes.theme1 = false;
          this.themes.theme2 = false;
          break;
        default:
          this.themes.theme1 = true;
          this.themes.theme2 = false;
          this.themes.theme3 = false;
          break;
      }
    },
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap");

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Spartan, sans-serif;
}

.main-ctn {
  display: flex;
  width: 100vw;
  min-height: 100vh;
  &__calc-ctn {
    width: 90%;
    margin: 2rem auto 2rem auto;
    @include breakpoint(smallDesktop) {
      width: 33%;
    }
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      > .toggle {
        position: relative;
        bottom: 0rem;
      }
    }
  }
}

.wrapper-btn {
  height: 60vh;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "x x x x"
    "x x x x"
    "x x x x"
    "x x x x"
    "r r e e";
  grid-gap: 0.75rem;
  padding: 1rem;
  place-items: center;
  .button {
    font-size: 2rem;
    font-weight: 700;
    min-width: 100%;
    min-height: 100%;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    &--seven,
    &--eight,
    &--nine,
    &--delete {
      grid-row: 1;
    }
    &--four,
    &--five,
    &--six,
    &--plus {
      grid-row: 2;
    }
    &--one,
    &--two,
    &--three,
    &--minus {
      grid-row: 3;
    }
    &--point,
    &--zero,
    &--divide,
    &--multiply {
      grid-row: 4;
    }
    &--reset,
    &--equal {
      grid-row: 5;
    }
    &--zero {
      grid-column: 2;
    }
    &--divide {
      grid-column: 3;
    }
    &--reset {
      grid-area: r;
    }
    &--equal {
      grid-area: e;
    }
    &--reset,
    &--delete,
    &--equal {
      font-size: 0.8rem;
    }
  }
}
</style>

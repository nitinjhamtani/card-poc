<template>
<!-- v-if="state === 'open' ? 1 : 0" -->
  <v-container class="wrapper">
    <div class="bg" @click="() => setState('half')"></div>
    <div
      ref="card"
      class="card"
      :style="{ top: `${isMove ? y : calcY()}px` }"
    >
      <div class="pan-area" ref="pan">
        <div class="bar" ref="bar"></div>
      </div>
      <div class="contents" ref="panC">
          <slot></slot>
      </div>
    </div>
  </v-container>
</template>
<script>
import Hammer from "hammerjs"

export default {
  components: {},
  name: 'BottomSheet',
  props: {
    openY: {
      type: Number,
      default: 0.1
    },
    halfY: {
      type: Number,
      default: 0.8
    },
    defaultState: {
      type: String,
      default: "half"
    }
  },
  data() {
    return {
      mc: null,
      y: 0,
      startY: 0,
      isMove: false,
      state: this.defaultState,
      rect: {}
    }
  },
  mounted () {
    window.onresize = () => {
      this.rect = this.$refs.card.getBoundingClientRect()
    }
    this.rect = this.$refs.card.getBoundingClientRect()
    this.mc = new Hammer(this.$refs.pan)
    this.mcC = new Hammer(this.$refs.panC)
    this.mc.get('pan').set({ direction: Hammer.DIRECTION_ALL })
    this.mcC.get('pan').set({ direction: Hammer.DIRECTION_ALL })
    this.mc.on("panup pandown", (evt) => {
      this.y = evt.center.y - 16
    })
    this.mcC.on("panup pandown", (evt) => {
      this.y = evt.center.y - 16
    })
    this.mc.on("panstart", (evt) => {
      this.startY = evt.center.y
      this.isMove = true
    })
    this.mcC.on("panstart", (evt) => {
      this.startY = evt.center.y
      this.isMove = true
    })
    this.mc.on("panend", (evt) => {
      this.isMove = false
      // this.startY = evt.center.y
      switch (this.state) {
        case "half":
          if (this.startY - evt.center.y > 120) {
            this.state = "open"
          }
          // if (this.startY - evt.center.y < -16) {
          //   this.state = "close"
          // }
          break;
        case "close":
          if (this.startY - evt.center.y < -120) {
            this.state = "half"
          }
          break;
      }
    })
    this.mcC.on("panend", (evt) => {
      this.isMove = false
      // this.startY = evt.center.y
      switch (this.state) {
        case "half":
          if (this.startY - evt.center.y > 120) {
            this.state = "open"
          }
          // if (this.startY - evt.center.y < -16) {
          //   this.state = "close"
          // }
          break;
        case "close":
          if (this.startY - evt.center.y < -120) {
            this.state = "half"
          }
          break;
      }
    })
  },
  beforeDestroy () {
    this.mc.destroy()
    this.mcC.destroy()
    window.onresize = null
  },
  methods: {
    calcY () {
      // console.log("evtevt", evt.center.y);
      if (this.state == "close") {
         return this.rect.height * this.halfY
      }
      if (this.state == "half") {
         return this.rect.height * this.halfY
      }
      if (this.state == "open") {
         return this.y
      }
    },
    setState (state) {
      this.state = state
    }
  }
}
</script>

<style>
.wrapper[data-open="1"] {
  position: fixed;
  top: 0;
  left: 0;
}

.wrapper[data-open="1"] .bg {
  display: block;
  transition: all .3s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .3);
}

.card {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: white;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -3px 4px rgba(0, 0, 0, .1);
  left: 0;
  overflow: auto;
}

.card[data-state="half"], .card[data-state="open"], .card[data-state="close"] {
  transition: top .3s ease-out;
}

.card[data-state="close"] {
  box-shadow: none;
}

.bar {
  /* width: 45px;
  height: 8px; */
  /* border-radius: 14px; */
  /* background: rgba(0, 0, 0, .3); */
  margin: 0 auto;
  /* cursor: pointer; */
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 25px;
  z-index: 1; 
}

.pan-area {
  /* padding: 12px 0; */
}

.content {
  overflow-y: scroll;
  max-height: 100%;
  padding-bottom: calc(100vh * 0.2);
  box-sizing: border-box;
}
</style>

<template>
<div class="lfq-switch" :class="{'is-checked':value}" @click="handleClick">
    <input type="checkbox" class="lfq-switch_input" ref="input" :name="name">
    <span class="lfq-switch_core" ref="core">
        <span class="lfq-switch_button"></span>
    </span>
</div>
</template>

<script>
export default {
  name: 'LfqSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
      this.$nextTick(() => {
        this.setColor()
        this.$refs.input.checked = this.value
      })
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    this.setColor()
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang="scss" scoped>
  .lfq-switch {
      display: inline-block;
      align-items: center;
      position: relative;
      font-size: 14px;
      line-height: 20px;
      height: 20px;
      vertical-align: middle;
      .lfq-switch_input {
          position: absolute;
          width: 0;
          height: 0;
          opacity: 0;
          margin: 0;
      }
      .lfq-switch_core {
          margin: 0;
          display: inline-block;
          position: relative;
          width: 40px;
          height: 20px;
          border: 1px solid #dcdfe6;
          outline: none;
          border-radius: 10px;
          box-sizing: border-box;
          background: #dcdfe6;
          cursor: pointer;
          transition: border-color .3s,background-color .3s;
          vertical-align: middle;
          .lfq-switch_button {
              position: absolute;
              top: 1px;
              left: 1px;
              border-radius: 100%;
              transition: all .3s;
              width: 16px;
              height: 16px;
              background-color: #fff;
          }
      }
  }
  .lfq-switch.is-checked {
      .lfq-switch_core {
          border-color: #409eff;
          background-color: #409eff;
          .lfq-switch_button {
              transform: translateX(20px);
          }
      }
  }
</style>

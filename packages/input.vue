<template>
<div class="lfq-input lfq-input--suffix" :class="{'lfq-input--suffix':showSuffix}">
    <input class="lfq-input_inner" :class="{'is-disabled':disabled}" :value="value" @input="handleInput" :disabled="disabled" :name="name" :type="showPassword?(passwordVisible?'text':'password'):type" :placeholder="placeholder">
    <span class="lfq-input_suffix" v-if="showSuffix">
        <i class="lfq-input_icon lfq-icon-circle-close" v-if="clearable&&this.value" @click="clear"></i>
        <i class="lfq-input_icon lfq-icon-view" v-if="showPassword" @click="handlepassword" :class="{'lfq-icon-view-active':passwordVisible}"></i>
    </span>
</div>
</template>

<script>
export default {
  name: 'LfqInput',
  data () {
    return {
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlepassword () {
      this.passwordVisible = !this.passwordVisible
    }
  },
  created () {
  }

}
</script>

<style lang='scss' scoped>
.lfq-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .lfq-input_inner {
        -webkit-appearance: none;
        background: #fff;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
        &:focus {
            outline: none;
            border-color: #409eff;
        }
        &.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;

        }
    }
}
.lfq-input--suffix {
    .lfq-input_inner {
        padding-right: 30px;
    }
    .lfq-input_suffix {
        position: absolute;
        height: 100%;
        right: 10px;
        top:0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        z-index: 900;
        i {
            color: #c0c4cc;
            font-size: 14px;
            cursor:pointer;
            transition: color .2s cubic-bezier(cubic-bezier(0.645, 0.045, 0.355, 1));
        }
        .lfq-icon-view-active {
          color: skyblue;
        }
    }
}

</style>

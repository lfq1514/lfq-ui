<template>
<label class="lfq-radio" :class="{'is-checked':label==model}">
    <span class="lfq-radio_input">
        <span class="lfq-radio_inner"></span>
        <input type="radio" class="lfq-radio_original" :value="label" :name="name" v-model="model">
    </span>
    <span class="lfq-radio_label">
        <slot>{{label}}</slot>
    </span>
</label>
</template>

<script>
export default {
  name: 'LfqRadio',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }

  },
  inject: {
    radioGroup: {
      default: ''
    }

  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.radioGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.radioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 判断radio是否被radio-group包裹
    isGroup () {
      return Boolean(this.radioGroup)
    }
  }

}
</script>

<style lang="scss" scoped>
.lfq-radio {
    color:#606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor:pointer;
    display:inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select:none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .lfq-radio_input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .lfq-radio_inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            &:after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%) scale(0);
                transition: transform .15s ease-in;
            }
        }
        .lfq-radio_original {
                opacity: 0;
                outline: none;
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0;
            }
    }
     .lfq-radio_label {
            font-size: 14px;
            padding-left: 10px;
        }
}
 .lfq-radio.is-checked {
        .lfq-radio_input {
            .lfq-radio_inner {
                border-color: #409eff;
                background: #409eff;
                &:after {
                    transform: translate(-50%,-50%) scale(1);
                }
            }
        }
        .lfq-radio_label {
            color:#409eff
        }
    }

</style>

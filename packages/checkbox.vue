<template>
<label class="lfq-checkbox" :class="{'is-checked':isChecked}">
    <span class="lfq-checkbox_input">
        <span class="lfq-checkbox_inner"></span>
        <input type="checkbox" class="lfq-checkbox_original"
        :name="name"
        v-model='model'
        :value='label'>
    </span>
    <span class="lfq-checkbox_label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
    </span>
</label>

</template>

<script>
export default {
  name: 'LfqCheckbox',
  inject: {
    checkboxGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.checkboxGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.checkboxGroup.$emit('input', value) : this.$emit('input', value)
      }

    },
    isGroup () {
      return Boolean(this.checkboxGroup)
    },
    isChecked () {
      // 如果是group包裹，判断label是否在model中，没有group包裹，直接使用model
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }

  }

}
</script>

<style lang="scss" scoped>
.lfq-checkbox {
     color:#606266;
    font-weight: 500;
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
    .lfq-checkbox_input {
         white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .lfq-checkbox_inner {
             border: 1px solid #dcdfe6;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            border-radius: 2px;
            z-index: 1;
            transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
            &:after {
                box-sizing: content-box;
                content: "";
                border-left: 0;
                border-top: 0;
                height: 7px;
                left: 4px;
                position: absolute;
                top: 1px;
                transform: rotate(45deg) scaleY(0);
                width: 3px;
                transition: tansform .15s ease-in .05s;
                transform-origin: center;
            }

        }
        .lfq-checkbox_original {
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
    .lfq-checkbox_label {
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        font-size: 14px;
    }
}
.lfq-checkbox.is-checked {
    .lfq-checkbox_input {
        .lfq-checkbox_inner {
            background-color: #409eff;
            border-color: #409eff;
            &:after {
                transform: rotate(45deg) scaleY(1) ;
            }
        }
    }
    .lfq-checkbox_label {
        color: #409eff;
    }
}
</style>

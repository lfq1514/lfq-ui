<template>
    <button class="lfq-button" :class="[`lfq-button--${type}`,{'is-plain':plain,'is-round':round,'is-circle':circle,'is-disabled':disabled}]" :disabled="disabled" @click="handleClick">
        <i :class="icon"></i>
        <!-- 当没有传入插槽内容的时候，不显示span -->
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
  name: 'LfqButton',
  props: {
    type: {
      // 数据类型
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  },
  created () {
    // console.log(this.type)
    console.log(this.plain)
  }
}
</script>

<style lang="scss" scoped>
.lfq-button {
    display: inline-block;
    line-height: 1;
    word-spacing: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文本被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}
.lfq-button--primary {
    color: #fff;
    background: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
    }
}
.lfq-button--success {
    color: #fff;
    background: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus {
        background: #85c161;
        border-color: #85c161;
        color: #fff;
    }
}
.lfq-button--info {
    color: #fff;
    background: #909399;
    border-color: #909399;
    &:hover,
    &:focus {
        background: #a6a9ad;
        border-color: #a6a9ad;
        color: #fff;
    }
}
.lfq-button--warning {
    color: #fff;
    background: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus {
        background: #ebb563;
        border-color: #ebb563;
        color: #fff;
    }
}
.lfq-button--danger {
    color: #fff;
    background: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus {
        background: #f78989;
        border-color: #f78989;
        color: #fff;
    }
}
.lfq-button--primary.is-plain {
    color: #fff;
    background: #409eff;
    border-color: #409eff;
    opacity: 0.6;
    &:hover,
    &:focus {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
    }
}
.lfq-button--success.is-plain {
    color: #fff;
    background: #67c23a;
    border-color: #67c23a;
     opacity: 0.6;
    &:hover,
    &:focus {
        background: #85c161;
        border-color: #85c161;
        color: #fff;
    }
}
.lfq-button--info.is-plain {
    color: #fff;
    background: #909399;
    border-color: #909399;
     opacity: 0.6;
    &:hover,
    &:focus {
        background: #a6a9ad;
        border-color: #a6a9ad;
        color: #fff;
    }
}
.lfq-button--warning.is-plain {
    color: #fff;
    background: #e6a23c;
    border-color: #e6a23c;
     opacity: 0.6;
    &:hover,
    &:focus {
        background: #ebb563;
        border-color: #ebb563;
        color: #fff;
    }
}
.lfq-button--danger.is-plain {
    color: #fff;
    background: #f56c6c;
    border-color: #f56c6c;
     opacity: 0.6;
    &:hover,
    &:focus {
        background: #f78989;
        border-color: #f78989;
        color: #fff;
    }
}
.lfq-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}
.lfq-button.is-circle {
    border-radius: 50%;
    padding: 12px;
}
.lfq-button.is-disabled {
   background-color: red;
   cursor:no-drop
}
.lfq-button [class*=lfq-icon-]+span {
    margin-left: 5px;
}

</style>

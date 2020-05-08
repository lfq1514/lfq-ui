<template>
<div class="lfq-form">
    <slot></slot>
</div>
</template>
<script>
export default {
  name: 'LfqForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }

}
</script>

<style>

</style>

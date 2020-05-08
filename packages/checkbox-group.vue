<template>
<div>
<slot></slot>
</div>
</template>

<script>
export default {
  name: 'LfqCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      checkboxGroup: this
    }
  }
}
</script>

<style>

</style>

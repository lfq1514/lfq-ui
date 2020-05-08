<template>
  <div id="app">
    <hr>
    <lfq-button type="primary" @click="visible=true">测试弹窗</lfq-button>
    <hr>
    <lfq-dialog  width="60%" top="100px" :visible.sync="visible">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <template v-slot:footer>
      <lfq-button @click="visible=false">取消</lfq-button>
      <lfq-button  @click="visible=false">确定</lfq-button>
    </template>
    </lfq-dialog>
    <hr>
    <lfq-input v-model="username" clearable show-password></lfq-input>
    <hr>
    <lfq-switch v-model="active" active-color="skyblue" inactive-color="red" name="username"></lfq-switch>
    <hr>
    <lfq-radio name='man' label="1" v-model="gender"></lfq-radio>
    <lfq-radio label="0" v-model="gender"></lfq-radio>
    <hr>
    <lfq-radio-group  v-model='gender'>
       <lfq-radio  label="1" ></lfq-radio>
    <lfq-radio label="0" ></lfq-radio>
    </lfq-radio-group>
    <hr>
    <lfq-checkbox v-model="active">是否选择</lfq-checkbox>
    <hr>
    <lfq-checkbox-group v-model='hobby'>
      <lfq-checkbox label='11'></lfq-checkbox>
      <lfq-checkbox label='22'></lfq-checkbox>
      <lfq-checkbox label='33'></lfq-checkbox>
    </lfq-checkbox-group>
    <hr>
    <lfq-form :model='model'>
      <lfq-form-item label="用户名">
        <lfq-input v-model="model.username"></lfq-input>
      </lfq-form-item>
      <lfq-form-item label="开关">
        <lfq-switch v-model="model.active"></lfq-switch>
      </lfq-form-item>
    </lfq-form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      visible: false,
      username: '',
      password: '',
      active: false,
      gender: '1',
      hobby: ['11'],
      model: { username: '', active: true }
    }
  },
  methods: {
    fn () {
      console.log('111')
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .lfq-button {
    margin-right: 20px;
  }
}
 #app ::v-deep .lfq-input {
  width: 180px ;

}
</style>

<template>
  <div class="kkz-category_create">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">


      <Form-item label="名称" prop="title">
        <Input v-model="formValidate.title" placeholder="请输入标题"></Input>
      </Form-item>

      <Form-item label="等级" prop="akira">
        <Select v-model="formValidate.parent_id" filterable size="large">
          <Option :value="0" :key="'父级'">父级</Option>
          <Option v-for="item in categoryParentList" :value="item.id" :key="item.title">{{ item.title }}</Option>
        </Select>
      </Form-item>


      <Form-item>
        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </Form-item>
    </Form>
  </div>
</template>

<script>
  import {getCategoryCreateList,postCategoryStoreList} from 'api/shop';
  import {ERR_OK} from 'api/config';

  export default {
    data() {
      return {
        categoryParentList:[],
        formValidate: {
          title: '',
          parent_id: []
        },
        ruleValidate: {
          title: [
            { required: true, message: '标题不能为空', trigger: 'blur' }
          ],
          parent_id: [
            { required: true, type: 'array', min: 1, message: '选择一个分类', trigger: 'change' },
          ],
        }
      }
    },
    created() {
      this._getCategoryList();
    },
    methods:{
      _getCategoryList() {
        getCategoryCreateList().then(res => {
          if (res.meta.errno === ERR_OK){
            this.categoryParentList = res.data;
          }
        })
      },
      handleReset() {
        this.$refs[name].resetFields();
      },
      handleSubmit (name) {
        let formData = this.formValidate;
        this.$refs[name].validate((valid) => {
          if (valid) {
            postCategoryStoreList(formData).then((res) => {
              if (res.meta.errno === ERR_OK){
                this.formValidate.thumb = '';
                this.$Message.success('提交成功!');
                this.$router.push({
                  path: `/admin/category`
                });
              }
            });

          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .kkz-category_create{
    min-height: 500px;
  }
</style>
<template>
  <div class="kkz-category_create">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">


      <Form-item label="名称" prop="title">
        <Input v-model="formValidate.title" placeholder="请输入标题"></Input>
      </Form-item>

      <Form-item label="分类" prop="akira">
        <Select v-model="formValidate.parent_id" multiple filterable size="large" @on-change="_changeCategory">
          <Option v-for="item in categoryParentList" :value="item.title" :key="item.title">{{ item.title }}</Option>
        </Select>
      </Form-item>

      <Form-item label="缩略图" prop="thumbList">
        <div class="demo-upload-list" v-for="item in uploadList">
          <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
              <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
              <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
          </template>
          <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
          </template>
        </div>
        <Upload
          ref="upload"
          :show-upload-list="false"
          :default-file-list="defaultList"
          :on-success="handleSuccess"
          :format="['jpg','jpeg','png']"
          :max-size="2048"
          :on-format-error="handleFormatError"
          :on-exceeded-size="handleMaxSize"
          :before-upload="handleBeforeUpload"
          multiple
          type="drag"
          action="http://127.0.0.1:8000/api/image"
          style="display: inline-block;width:58px;">
          <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="camera" size="20"></Icon>
          </div>
        </Upload>
        <Modal title="查看图片" v-model="visible">
          <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
        </Modal>
      </Form-item>


      <Form-item label="数量" prop="num">
        <Input v-model="formValidate.num"  placeholder="请输入数量..." style="width: 200px"></Input>
      </Form-item>

      <Form-item label="价格" prop="price">
        <Input v-model="formValidate.price" icon="social-yen" placeholder="请输入价格..." style="width: 200px"></Input>
      </Form-item>


      <Form-item label="是否促销" prop="is_sale">
        <i-switch v-model="formValidate.is_sale">
          <span slot="open">开</span>
          <span slot="close">关</span>
        </i-switch>
      </Form-item>


      <Row v-if="this.formValidate.is_sale" >
        <i-col span="11">
          <Form-item prop="sale_price" label="促销价格">
            <Input v-model="formValidate.sale_price" icon="social-yen" placeholder="请输入..." style="width: 200px"></Input>

          </Form-item>
        </i-col>
      </Row>

      <Form-item label="描述" prop="desc">
        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入简介..."></Input>
      </Form-item>


      <Form-item>
        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </Form-item>
    </Form>
  </div>
</template>

<script>
  import ICol from "../../../../node_modules/iview/src/components/grid/col";
  import {getCategoryList,postShopStoreList} from 'api/shop';
  import {ERR_OK} from 'api/config';
  import {postImageDelete} from 'api/image'

  export default {
    data() {
      return {
        uploadList: [],
        defaultList: [],
        imgData: {
          width: 720,
        },
        imgName: '',
        visible: false,

        categoryParentList:[],
        formValidate: {
          title: '',
          num: 0,
          price: 0,
          desc:'',
          is_sale: false,
          user_id: 0,
          sale_price: 0,
          parent_id: [],
          thumbList: []
        },
        ruleValidate: {
          title: [
            { required: true, message: '标题不能为空', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '简介不能为空', trigger: 'blur' }
          ],
          num: [
            { required: true,message: '必须填写数量', trigger: 'blur' }
          ],
          price: [
            { required: true,message: '必须填写价格', trigger: 'blur' }
          ],
          sale_price: [
            { required: true,message: '必须填写促销价格', trigger: 'blur' }
          ],
          parent_id: [
            { required: true, type: 'array', min: 1, message: '选择一个分类', trigger: 'change' },
          ],
          thumbList: [
            { required: true, type: 'array', min: 1, message: '至少上传一张图片', trigger: 'change' }
          ],
        }
      }
    },
    created() {
      this._getCategoryList();
    },
    mounted () {
      this.uploadList = this.$refs.upload.fileList;
      if (this.isLogin){
        this.formValidate.user_id = this.userNow.id;
      }

    },
    methods:{

      handleView (url) {
        this.imgName = url;
        this.visible = true;
      },
      handleRemove (file) {
        postImageDelete(file.url).then((res) => {
          if (res.meta.errno === ERR_OK){
            // 从 upload 实例删除数据
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            this.formValidate.thumbList = this.$refs.upload.fileList
            this.$Message.success('成功删除');
          }else{
            this.$Message.error(res.message);
          }

        });


      },
      handleSuccess (res, file) {
        if (res.meta.errno === ERR_OK){
          let newFile = {};
          newFile.url = res.data;
          this.formValidate.thumbList.push(newFile);
          file.url = res.data;
          this.$Message.success('成功添加');
        }else{
          this.$Message.error(res.message);
        }
      },
      handleFormatError (file) {
        this.$Notice.warning({
          title: '文件格式不正确',
          desc: '文件 ' + file.url + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
        });
      },
      handleMaxSize (file) {
        this.$Notice.warning({
          title: '超出文件大小限制',
          desc: '文件 ' + file.url + ' 太大，不能超过 2M。'
        });
      },
      handleBeforeUpload () {
        const check = this.formValidate.thumbList.length < 10;
        if (!check) {
          this.$Notice.warning({
            title: '最多只能上传 10 张图片。'
          });
        }
        return check;
      },


      _changeCategory(data) {

      },
      _getCategoryList() {
        getCategoryList().then(res => {
          if (res.meta.errno === ERR_OK){
            this.categoryParentList = res.data;
          }
        })
      },
      handleReset() {
        this.$refs[name].resetFields();
      },
      handleSubmit (name) {



        this.$refs[name].validate((valid) => {
          if (valid) {
            console.log(this.formValidate);
            this.$Message.success('表单验证成功!');
            postShopStoreList(this.formValidate).then((res) => {
              if (res.meta.errno === ERR_OK){
                this.$Message.success('提交成功!');
                this.$router.push({
                  path: `/admin/shop`
                });
              }
            });

          } else {
            this.$Message.error('表单验证失败!');
          }
        });



      },
    },
    computed: {
      isLogin() {
        return this.$store.state.isLogin
      },
      userNow() {
        return this.$store.state.user
      }
    },
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .kkz-category_create{
    min-height: 500px;
    .demo-upload-list{
      display: inline-block;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      border: 1px solid transparent;
      border-radius: 4px;
      overflow: hidden;
      background: #fff;
      position: relative;
      box-shadow: 0 1px 1px rgba(0,0,0,.2);
      margin-right: 4px;
    }
    .demo-upload-list img{
      width: 100%;
      height: 100%;
    }
    .demo-upload-list-cover{
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
      display: block;
    }
    .demo-upload-list-cover i{
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      margin: 0 2px;
    }
  }
</style>
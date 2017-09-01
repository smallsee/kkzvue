<template>
    <div class="kkz-admin-art-create">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">


      <Form-item label="标题" prop="title">
        <Input v-model="formValidate.title" placeholder="请输入标题"></Input>
      </Form-item>

      <Form-item label="缩略图" prop="thumbList">
      <div class="demo-upload-list" v-for="item in formValidate.thumbList">
          <img :src="item.url">
          <div class="demo-upload-list-cover">
            <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
            <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
          </div>
      </div>


      <Upload
        ref="upload"
        :show-upload-list="true"
        :default-file-list="formValidate.thumbList"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :data="imgData"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        action="http://127.0.0.1:8000/api/image">
        <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>点击或将文件拖拽到这里上传</p>
        </div>
      </Upload>

      <Modal title="查看图片" v-model="visible">
        <img :src="imgName" v-if="visible" style="width: 100%">
      </Modal>
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
  import {postUpdateArtList} from 'api/art';
  import {ERR_OK} from 'api/config';
  import {postImageDelete} from 'api/image'

  export default {
    components: {ICol},
    data () {
      return {
        defaultList: [
        ],
        imgData: {
          width: 720,
        },
        imgName: '',
        visible: false,
        formValidate: {
          title: '',
          id: '',
          thumbList: []
        },
        ruleValidate: {
          title: [
            { required: true, message: '标题不能为空', trigger: 'blur' }
          ],
          thumbList: [
            { required: true, type: 'array', min: 1, message: '至少上传一张图片', trigger: 'change' }
          ],
        }
      }
    },
    created() {

    },
    mounted () {
      console.log(this.$route.params.formValidate);

      this.formValidate.title = this.$route.params.formValidate.title;
      this.formValidate.thumbList = this.$route.params.formValidate.images;
      this.formValidate.id = this.$route.params.formValidate.id;
    },
    methods: {
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
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('表单验证成功!');
            postUpdateArtList(this.formValidate).then(res => {
              if (res.meta.errno === ERR_OK){
                this.formValidate.thumbList = [];
                this.$Message.success('提交成功!');
                this.$router.push({
                  path: `/admin/art`
                });
              }
            })

          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .kkz-admin-art-create{
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

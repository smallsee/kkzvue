<template>
  <div class="write-commit">
    <header-title :headerTitle="title"></header-title>

    <div class="flex-row-between">
      <div class="thumb">
        <img v-lazy="img" alt="">

        <a :href="userUrl" class="user-name">{{userName}}</a>
      </div>

      <div class="clearfix commit-content">
        <Input v-model="commit" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入您的意见..."></Input>

        <div class="flex-row-end commit-submit">
          <Button type="success" @click.stop="_commitSubmit">发表</Button>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import HeaderTitle from 'base/header-title/header-title'
  export default {
    data() {
      return{
        commit: ''
      }
    },
    methods:{
      _commitSubmit() {
        if (this.commit.length < 10){
          this.$Message.error('至少输入10个字在评论嘛');
        }else{
          this.$emit('commitSubmit', this.commit);
          this.commit = '';
        }

      }
    },
    props: {
      userName: {
        type: String,
        default: '小海'
      },
      userUrl: {
        type: String,
        default: '#'
      },
      img:{
        type: String,
        default: 'http://ohadc19qz.bkt.clouddn.com/00034acdc2f7c957146a84de54bfef0c'
      },
      title: {
        type: String,
        default: '发表短评'
      },
      url: {
        type: String,
        default: '#'
      }
    },
    components:{
      HeaderTitle
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .write-commit{
    .thumb{
      width: 60px;
      overflow: hidden;
      margin-right: 10px;
      img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      .user-name{

        margin-top: 5px;
        display: inline-block;
        width: 60px;
        text-align: center;
        color: black;
        font-size: 13px;
      }
    }
    .commit-content{
      width: 650px;
      .commit-submit{
        margin-top: 10px;
      }
    }
  }
</style>
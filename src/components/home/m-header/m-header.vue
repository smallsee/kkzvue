<template>
  <div class="kkz-header ">
    <div class="w flex-row-between">
    <div class="flex-row">

      <a href="#" class="logo">
        <img src="./logo1.png" alt="" height="40">
      </a>

      <a href="#" class="mascot">
        <img src="./icon64_maimeng.png" alt="" height="40">
      </a>

      <span class="purpose">一个高逼格的
        <a href="">动漫社区</a>
      </span>
    </div>

    <Input v-model="searchText" @on-enter="search" @on-click="search" icon="search" placeholder="请输入搜索内容..." style="width: 200px"></Input>
    </div>


    <Modal
      v-model="isShowSearch"
      title="搜索结果"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>有{{searchData.length}}搜索结果,搜索关键词为{{searchText}}</p>
      <template v-for="(item,index) in searchData">
        <image-title-row
          :isBox="true"
          :isFlexEnd="true"
          :isShowText="false"
          :img="item.thumb"
          :videoTitle="item.title"
          :videoUrl="'/#/video/detail/' + item.id"
        ></image-title-row>
      </template>

    </Modal>

  </div>
</template>

<script>
  import ImageTitleRow from 'base/image-title-row/image-title-row'
  import {getSearchVideo} from 'api/video';
  import {ERR_OK} from 'api/config';

  export default {
    data() {
      return {
        searchData:[],
        searchText: '',
        isShowSearch: false
      }
    },
    methods: {
      search() {

        if (this.searchText){
          getSearchVideo(this.searchText).then(res => {
            if (res.videos){
              this.searchData = res.videos;
            }else {
              this.searchData = []
            }

          });

          this.isShowSearch = true
        }else{
          this.$Message.info('请输入内容在提交吧');
        }

      },
      ok () {
        this.searchText = '';
      },
      cancel () {
        this.searchText = '';
      }
    },
    components: {
      ImageTitleRow
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .kkz-header{
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    .logo{
      margin-right: 20px;
    }
    .mascot{
      margin-right: 50px;
    }
    .purpose{
      line-height: 40px;
      font-size: 14px;
    }

  }
</style>
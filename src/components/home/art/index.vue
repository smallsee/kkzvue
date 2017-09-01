<template>
  <div class="kkz-art">
    <div class="w">
      <header-title :headerTitle="'动漫画板'"></header-title>

      <div class="art-box">
        <ul class="clearfix">
          <template v-for="(item,index) in data">
            <li class="float-left art-item">
              <div class="image-image-user">
                <a :href="'/#/art/' + item.id">
                  <div class="thumb">
                    <img v-lazy="item.images[0].url" alt="">
                    <div class="image-info">
                      <div class="title">{{item.title}}</div>
                      <div class="num"> {{item.images.length}} </div>
                    </div>
                  </div>
                </a>
                <div class="other-image flex-row-around">
                  <template v-for="(image,vindex) in item.images" v-if="vindex > 0 && vindex < 4">
                    <a :href="'/#/art/' + item.id">
                    <div class="small-image">
                      <img v-lazy="image.url" alt="">
                    </div>
                    </a>
                  </template>


                </div>

                <div class="user flex-row-between">
                  <div class="user-info flex-row">
                    <img src="./2.jpg" class="user-thumb" alt="">
                    <span>小海</span>
                  </div>
                  <span class="date">5天前</span>
                </div>
              </div>

            </li>
          </template>
        </ul>
      </div>


      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page  show-elevator show-sizer :total="total" :page-size="pageSize" :current="1" @on-change="_changePage" @on-page-size-change="_changePageSize"></Page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTitle from 'base/header-title/header-title'
  import {getArtList,deleteArt} from 'api/art';
  import {ERR_OK} from 'api/config';
  export default {
    data() {
      return {
        data: [],
        dataTotal:[],
        total: 0,
        pageSize: 10
      }
    },
    created() {
      this._getArtList()
    },
    methods: {
      _changePageSize(even) {
        this.pageSize = even;
      },
      _changePage(even) {
        this.data = this.dataTotal.slice((even - 1) * this.pageSize, even * this.pageSize);
      },
      _getArtList() {
        getArtList().then((res) => {
          if (res.meta.errno === ERR_OK) {
            this.dataTotal = res.data;
            this.data = this.dataTotal.slice(0, this.pageSize);
            this.total = res.data.length;

            console.log(res.data);
          } else {
            this.$Message.error(res.message);
          }

        })
      },
    },
    components:{
      HeaderTitle,
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .kkz-art{
    .art-item{
      margin-right: 10px;
      margin-bottom: 10px;
      .image-image-user{
        background-color: white;
        box-sizing: border-box;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
        padding: 10px;
        width: 188px;
        height: 270px;
        .thumb{
          position: relative;
          width: 100%;
          height: 165px;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }

          .image-info{
            position: absolute;
            top: 0;
            left: 10px;
            color: white;
            .title{
              max-width: 150px;
              overflow: hidden;
              font-size: 18px;
              font-weight: bold;
              margin: 10px 0;
            }
          }
        }
        .other-image{
          margin-top: 3px;
          width: 100%;
          height: 52px;
          .small-image{
            width: 52px;
            height: 52px;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }

        .user{
          font-size: 12px;
          margin-top: 10px;
          line-height: 24px;
          .user-thumb{
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 5px;
          }
          .date{
            color: #cccccc;
          }
        }
      }
    }
  }
</style>
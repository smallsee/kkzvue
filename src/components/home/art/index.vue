<template>
  <div class="kkz-art">
    <div class="w">
      <header-title :headerTitle="'动漫画板'"></header-title>

      <div class="art-box">
        <ul class="clearfix">
          <li class="float-left art-item">

            <div class="image-image-user">
              <a :href="'/#/art/5'">
                <div class="thumb">
                  <img src="./2.jpg" alt="">
                  <div class="image-info">
                    <div class="title">笨女孩</div>
                    <div class="num"> 55 </div>
                  </div>
                </div>
              </a>
              <div class="other-image flex-row-around">
                <a :href="'/#/art/5'">
                <div class="small-image">
                  <img src="./2.jpg" alt="">
                </div>
                </a>

                <a :href="'/#/art/5'">
                  <div class="small-image">
                    <img src="./2.jpg" alt="">
                  </div>
                </a>

                <a :href="'/#/art/5'">
                  <div class="small-image">
                    <img src="./2.jpg" alt="">
                  </div>
                </a>

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
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTitle from 'base/header-title/header-title'
  export default {
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
          }

          .image-info{
            position: absolute;
            top: 0;
            left: 10px;
            color: white;
            .title{
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
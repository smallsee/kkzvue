<template>
  <div class="image-title-row flex-row-between">

    <a class="user-thumb" :href="userUrl"><img v-lazy="img" :style="{width: imgSize, height: imgSize}"></a>

    <div class="content">

      <a  :href="videoUrl">
        <h3 class="title word-break" :style="{'max-height':maxHeight}">{{videoTitle}}</h3>
      </a>

      <div class="video-info">
        <a class="user-name"  :href="userUrl">{{userName}}</a>
        <span>{{time}}</span>
        |
        <span>{{num}}部动漫</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      img:{
        type:String,
        default: "http://oeu14qdl0.bkt.clouddn.com/68a4a3745c2de67f80b8097b2a0f7403zzzzzzzzs.png"
      },
      imgSize:{
        type:String,
        default: "45px"
      },
      userUrl:{
        type:String,
        default: "#"
      },
      videoUrl:{
        type:String,
        default: "#"
      },
      videoTitle:{
        type:String,
        default: "海贼王zzzzzasdsadaasdsasssasdsaadsada"
      },
      maxHeight:{
        type: String,
        default: "16px"
      },

      userName:{
        type: String,
        default: "小海"
      },
      time:{
        type: String,
        default: "44分钟前"
      },
      num:{
        type: Number,
        default: 38
      },
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .image-title-row{
    padding-top: 10px;
    .user-thumb{
      margin-right: 10px;
      img{
        border-radius: 50%;
      }
    }
    .content{
      margin-top: 10px;
      .title{
        color: #444;
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
      }
      .video-info{
        a{
          margin-right: 5px;
        }
        margin: 10px 0;
        font-size: 12px;
        color: #999;
      }
    }

  }
</style>
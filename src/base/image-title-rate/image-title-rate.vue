<template>
  <div class="image-title-rate" :class="{ 'no-margin-right': isNoMarginRight }"  :style="{ width:  width+ 'px' }">
    <a :href="url"><img :width="width" :height="imgHeight" v-lazy="img" alt=""></a>
    <a :style="{ width:  width+ 'px' }" :href="url">sadsada</a>
    <div  id="rate" :style="{ width:  width+ 'px' }">
      <Rate :disabled="disabled" v-model="rateValue"></Rate>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      disabled: {
        type: Boolean,
        default: true
      },
      rateValue: {
        type: Number,
        default: 4
      },
      width: {
        type: Number,
        default: 135
      },
      imgHeight: {
        type: Number,
        default: 170
      },
      url:{
        type: String,
        default: '#'
      },
      img:{
        type: String,
        default: 'http://ohadc19qz.bkt.clouddn.com/0c7082896db3c52df84561990c00d824'
      },
      isNoMarginRight:{
        type: Boolean,
        default: false
      }

    },
    mounted() {
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">


  .image-title-rate{
    background-color: #ffffff;
    margin-right: 10px;
    margin-top: 10px;
    a{
      display: block;
      text-align: center;
      margin: 5px 0;
    }
    #rate{
      text-align: center;
      .ivu-rate{
        font-size: 12px;

      }

    }

  }
</style>
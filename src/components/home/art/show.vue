<template>
  <div class="kkz-art-show">

    <div class="w">
    <header-title :headerTitle="'欣赏艺术'"></header-title>
    <vue-images :imgs="images"
                :modalclose="modalclose"
                :keyinput="keyinput"
                :mousescroll="mousescroll"
                :showclosebutton="showclosebutton"
                :showcaption="showcaption"
                :imagecountseparator="imagecountseparator"
                :showimagecount="showimagecount"
                :showthumbnails="showthumbnails">
    </vue-images>
    </div>
  </div>
</template>

<script>
  import vueImages from 'vue-images'
  import HeaderTitle from 'base/header-title/header-title'
  import {getShowArtList} from 'api/art';
  import {ERR_OK} from 'api/config'
  export default {
    data () {
      return {
        images: [
          {},
        ],
        modalclose: true,
        keyinput: true,
        mousescroll: true,
        showclosebutton: true,
        showcaption: true,
        imagecountseparator: 'of',
        showimagecount: true,
        showthumbnails: true
      }
    },
    created() {
      this._getArtData(this.$route.params.id);
    },
    methods:{
      _getArtData(id) {
        getShowArtList(id).then(res => {
          if (res.meta.errno === ERR_OK){
            res.data.images.forEach((item) => {
              let image = {};
              image.imageUrl = item['url'];
              this.images.push(image)
            });

          }
        })
      }
    },
    components: {
      vueImages: vueImages,
      HeaderTitle
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
<template>
  <a :href="url" class="a-background" :style="{padding: padding}">
    {{text}}
  </a>
</template>

<script>
  export default {
    props:{
      text:{
        type: String,
        default: "海贼王"
      },
      url:{
        type: String,
        default: "#"
      },
      padding:{
        type: String,
        default: "6px 8px"
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../common/sass/variable";
  .a-background{
    display: inline-block;
    letter-spacing: normal;
    margin: 5px 5px 0 0;
    background-color: $color-background-dd;
    -webkit-border-radius: 2px;
    font: 12px Helvetica,Arial,sans-serif;
    text-decoration: none;
    color: $color-text-blue-d;
    &:hover{
      background-color: $color-background-gray-l;
    }
  }
</style>
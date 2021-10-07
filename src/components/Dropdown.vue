<template>
  <div class="menu-item" @mouseover="isOpen = true" @mouseleave="isOpen= false">
    <router-link  class="aproject"  to="/projects"> 
      {{ $t("header.servicess") }}
      </router-link>
    <div class ="fade" appear v-bind:class="{activeBox:isOpen}">
      <div class="sub-menu" >
        <div v-for="(item, i) in items" :key="i" class="menu-item">
          <a :href="item.link">{{ item.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'dropdown',
  props: ['title', 'items'],
  data () {
    return {
      isOpen: false,
      
    }
   
  }
}
</script>

<style lang='scss' scoped>
.menu-item {
  .aproject {
      &::after {
    content: url("../assets/icons/dropdown.svg");
    float: right;
    margin: -2px 0px 0px 8px;
    display: inline;

  }
 
  }

 .sub-menu{
    color: map-get($font_colors, "main");
    font-weight: 500;
    background-color: map-get($colors, "white");
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    align-items: start;
    box-shadow: 0px 0px 6px #00000029;
    top: 10px;
    right: 5px;
    border-radius: 4px;
    list-style-type: none;
    gap: 10px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.3);
    width: 100%;
    padding: 19px -17px;
    /* margin: 5px -17px; */
    position: relative;
    padding: 13px 0px;
    
     
    a {
    display: inline-block;
    padding: 2px 0px 0px 12px;
    margin: 0px 3px 0px;
    position: relative;
    left: -6px;
    color: map-get($font_colors, "main");
    transition: color .4s ease-out;
    
  }
   
    a:before
            {
    content: '';
    position: absolute;
    width: 100%;
    height: 0px;
   border-bottom: 1px solid rgba(128, 128, 128, 0.3);
    bottom: 2px;
    border-radius: 45%;
    background-color: #0b2360;
    -webkit-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: -webkit-transform 0.2s ease-in;
    transition: 0.2s ease-in;
    text-align:center;
   }
  a:hover:before
      {
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
     }
}
    
  }
   svg{
  display: inline;
  margin-left: 7px;
  margin-bottom: 1px;
  
  }
  .fade {
  transition:ease-in-out 0.5s;
  height:0px;
  overflow:hidden;
  display:block;
  position: absolute;

 }
 .activeBox{
  height:200px;
  transition:ease-in-out 0.5s

 }
 


</style>
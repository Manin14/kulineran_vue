<template>
  <div id="app">
   
   
    <router-view/>
    
    <Footer/>
  </div>
</template>

<script>
// import file footer nya
import Footer from '@/components/Footer.vue'
export default {
  components :{
    Footer
  }
}
</script>



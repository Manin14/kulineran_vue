<template>
     <div class="row">
         <div class="col-md-6">
             <div class="d-flex h-100">
                 <div class="justify-content-center align-self-center">
                   <h2> Delicios food menu</h2>
                   <p>Ayo pesan aneka makanan di outlet kami</p>

                
                 <router-link to="/foods" class="btn btn-lg btn-success"> Pesan </router-link>
                 </div>
             </div>
         </div>

         <div class="col-md-6">
              <img src="../assets/undraw_makan.png" width="100%" alt="">
         </div>
     </div>
</template>

<script>
export default {
  name : 'Hero'
}
</script>

<style>

</style>
<template>
<div>
    <Navbar/>
   <div class="container">
     <div class="row mt-4">
       <div class="col text-center">
            <h2> Daftar <strong> Makanan </strong> </h2>
       </div>
     </div>

     <!-- inputan cari -->
     <div class="row mt-3">
         <div class="col">
              <div class="input-group mb-3">
                
                <!-- buat v-model nya ="search" -->
                  <input v-model="search" 
                  type="text" 
                  class="form-control" 
                  placeholder="Cari makanan" 
                  aria-label="Username" 
                  aria-describedby="basic-addon1"
                  @keyup="searchFoods">
                  <!-- dan buat keyup nya saat user ketik -->

              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"> <b-icon-search/></span>
              </div>
            </div>
         </div>
     </div>
    

    <!-- tampilkan data makanan dari api -->
     <div class="row mb-3">
          <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
             <CardProduct :product="product"/>
          </div>
     </div>
   </div>
</div>
    
</template>

<script>
// @ is an alias to /src, import navbar di file foods.vue ini
import Navbar from '@/components/Navbar.vue'
import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios'

export default {
  name: 'Foods',
  components: {
    Navbar,
    CardProduct
  },
  data ()
    {
      return {
        products :[],
        search : '',  //variabel buat tampung nilai dari api nya
      }
    },
  methods : {
        setProduct (data) {
          this.products = data
        },
        searchFoods (){  //fungsi cari makanan
              axios
              .get("http://localhost:3000/product?q="+this.search) //?q=
              .then( (response) => this.setProduct(response.data)) 
              .catch(  (error) => console.log(error) )
        }
  },
  mounted(){  //cara ambil data dari json api 
     axios
      .get("http://localhost:3000/product")
      .then( (response) => this.setProduct(response.data)) 
      .catch(  (error) => console.log(error) )
  }
}
</script>


<style>

</style>
<template>
  <div class="food-detail">
      
         <Navbar/>
        
           <div class="container">
               <!-- breadcrumb -->
               <div class="row mt-5">
                   <div class="col">
                           <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="/" class="text-dark">Home</router-link>
                                </li>
                                <li class="breadcrumb-item">
                                    <router-link to="/foods" class="text-dark">Foods</router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Food Order</li>
                            </ol>
                            </nav>
                   </div>
               </div>

               <!-- food detail nya -->
               <div class="row">
                   <div class="col md-6">
                      <img :src=" '../assets/images/' + product.gambar" class="img-fluid shadow" alt="">
                   </div>
                   <div class="col md-6">
                       <h2> {{ product.nama }} </h2>
                       <hr>
                       <h4> Harga :  <strong> Rp. {{ product.harga }}</strong> </h4>
                            
                            <!-- form input jumlah beli -->
                            <form class="mt-4" v-on:submit.prevent>
                                <div class="form-group">
                                <label for="jumlah_pemesanan">Jumlah Pesan</label>
                                <input type="number" class="form-control" min="1" v-model="pesan.jumlah_pemesanan"/>
                                </div>
                                <div class="form-group">
                                <label for="keterangan">Keterangan</label>
                                <textarea
                                    v-model="pesan.keterangan"
                                    class="form-control"
                                    placeholder="Keterangan spt : Pedes, Nasi Setengah .."
                                ></textarea>
                                </div>

                                 <button type="submit" class="btn btn-success" @click="pemesanan">
                                    <b-icon-cart></b-icon-cart>Pesan
                                </button>

                               
                            </form>
                   </div>
               </div>
           </div>
  </div>
  
</template>

<script>
// import file navbar nya
import Navbar from '@/components/Navbar.vue'
// impor axios nya
import axios from 'axios'

export default {
name: 'FoodDetail',
  components: {
    Navbar,
  },
data() {
     return {
          product : {},
          pesan : {}  //data penamppung pesanan
     };
  },
methods : {
   setProduct(data) {
       this.product = data
   },
   pemesanan() {
         if (this.pesan.jumlah_pemesanan) {
            this.pesan.products = this.product;
            axios
            .post("http://localhost:3000/keranjang", this.pesan)
            .then(() => {
                 this.$router.push({ path: "/keranjang"})
                this.$toast.success("Sukses Masuk Keranjang", {
                type: "success",
                position: "top-right",
                duration: 3000,
                dismissible: true,
                });
            })
            .catch((err) => console.log(err));
        } else {
            this.$toast.error("Jumlah Pesanan Harus diisi", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
            });
        }
   }
},
mounted(){
    axios
      .get("http://localhost:3000/product/" + this.$route.params.id)
      .then( (response) => this.setProduct(response.data)) 
      .catch(  (error) => console.log(error) )
}
    
}
</script>


<style>

</style>
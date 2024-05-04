<template>
  <div class="">
    <center>
    <div class="cssbox" >
    <div class="">
        <h1 class="title" style="font-family: Tahoma;">Change your product</h1><br>
        <label for="" style="font-family: Tahoma;margin-right: 21rem;">Select product</label>
        <br>
    <div class="select">
     
              <select style="width: 30rem;" v-model="test2" >
                <option
                  v-for="productname in productname"
                  :key="productname._id"
                >
                  {{ productname.product_name }}
                  <div
                    :value="productname.product_name"
                    v-if="productname.product_name != null"
                  ></div>
                </option>
              </select >
              
            </div>
            
        </div>
    <div class="">   
      <br>
    <label for="" style="font-family: Tahoma;margin-right: 22rem;">Input your ID</label>
    <br>
    
    <input type="text" v-model="employee" class="input" style="width: 30rem;">
    <br><br>
    <button @click="changeproduct" class="button is-warning">Submit</button>
</div>

</div>
</center>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      email:"",
      productname:[],
      test2:"",
      employee:"",
      
    };
  },
  methods: {
    onload() {
      axios
        .get("http://localhost:3000/selectallproduct")
        .then((response) => {
          this.productname = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeproduct() {
        if (this.employee != "") {
      axios //api
        .post("http://localhost:3000/changeproduct", {
            employee:this.employee,
            productname:this.test2
        })
        .then((res) => {
          console.log(res);
          alert(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }else{
        alert("Invalid ID")
    }
        this.resetForm();
    },
  
  },
  created(){

this.onload();

},
};

</script>

<style >
.cssbox {
  border: 0px solid #000000;
  box-shadow: 1px 1px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 15px;
  min-height: 10rem;
  width: 30rem;
  margin-top: 13%;
}

</style>
<template>
<div class="all">
  <nav class="navbar" role="navigation" aria-label="main navigation" style="background: rgb(0,92,158);
background: linear-gradient(140deg, rgba(0,92,158,1) 80%, rgba(255,195,36,1) 61%);">
  <div class="navbar-brand" >

    <p class="title" style="font-family: Tahoma; text-decoration: underline;color: white ;">Tool Life Record</p>
    <ul class="list-group" style="margin-left: 65rem;">
         
      <li class="list-group-item" v-show="date"><strong>Date:</strong> {{ date }}</li>
          <li class="list-group-item" v-show="time"><strong>Time:</strong> {{ time }}</li>
        
        </ul>
  </div>
</nav>
<hr >
    <div class="grid">
      <div class="manu" >
        <aside class="menu">
         <b> <p class="menu-label" style="color: white;">General</p></b>
          <ul class="menu-list">
            <li><a style="font-family: Tahoma;color:white;" @click="graph">Graph</a></li>
            <li><a style="font-family: Tahoma;color: white;" @click="editroo"> Change your product</a></li>
            <li><a style="font-family: Tahoma;color: white;" @click="editregister">Register</a></li>
            <li><a style="font-family: Tahoma;color: white;" @click="login">Login</a></li>
          </ul>
        <b> <p class="menu-label" style="color: white;">Administration</p></b> 
          <ul class="menu-list">
            <li><a style="font-family: Tahoma;color: white;" @click="edittool">Edit Tool Life Record</a></li>
            <li><a style="font-family: Tahoma;color: white;" @click="editline">Edit Line</a></li>
           
          </ul>
        </aside>
      </div>
      <div class="machine">
        <div class="cssbox">
      
          <div class="columns">
            <div class="column is">
              <p style="text-align: center;font-family: Tahoma;color: white;" ><b>Tool </b></p>
            </div>
            <div class="column">
              <p style="text-align: center;font-family: Tahoma;color: white;"><b>Tool life per day</b></p>
            </div>
            <div class="column">
              <p style="text-align: center;font-family: Tahoma;color: white;"><b> Tool life </b></p>
            </div>

            <div class="column">
              <p style="text-align: center;font-family: Tahoma;color: white;"><b>Limit Tool life </b></p>
            </div>
            <div class="column">
              <p style="text-align: center;font-family: Tahoma;color: white;"><b>Unit </b></p>
            </div>
            <div class="column">
              <p style="margin-left: 20px;font-family: Tahoma;color: white;"><b>Record</b></p>
            </div>
          </div>
          <div class="columns" v-for="sa in save1" :key="sa.id" >
            <div class="column" >
              <input style="color: black;background-color: white;"
             
                disabled="false"
                type="text"
                :value="sa.name"
                class="input"
              />
            </div>

            <div class="column">
             <div v-for="shift in save2" :key="shift.value">

              <label for="tool life per day"></label>

              <input style="color: black;background-color: white;"
                v-if="sa.name == shift.name"
                class="input"
                type="number"
                placeholder="Number"
                :value="shift.value"
                disabled="false"
              />
            </div>
            </div>
            <div class="column" >
              <input 
                type="text"
                class="input"
                :value="sa.all_tool_life"
                disabled="false"
                :style="[
                  sa.all_tool_life > (sa.limit * 90) / 100 
                    ? {
                        backgroundColor: ' red',
                        color: 'white',
                      }
                    : {
                        backgroundColor: 'green',
                        color: 'white',
                      },
                ]"
              />

          
            <progress  class="progress" :class= "[sa.all_tool_life > (sa.limit * 90) / 100 ? {'is-danger' : true} : sa.all_tool_life > (sa.limit * 50) / 100 ? {'is-warning' : true} : {'is-primary' : true} ]" style="margin-top: 20px;" :value=sa.all_tool_life  :max=sa.limit></progress>
            </div>
            <div class="column">
              <input style="color: black;background-color: white;"
                type="text"
                class="input"
                :value="sa.limit"
                disabled="false"
              />
            </div>
            <div class="column">
              <input style="color: black;background-color: white;"
                type="text"
                class="input"
                :value="sa.unit"
                disabled="false"
              />
            </div>

            <div class="column">
              <div
              
                style="width: 6rem;background-color: #FFC324; "
                class="button is-small"
                @click="edit(sa.id,sa.name)"
              >
                <p style="font-size: 15px;font-family: Tahoma;color: black;">Click</p>
              </div>
            </div>
            <!-- <div class="column">
             <div class="control">
              <label class="radio " disabled style="color: red;">
    <input type="radio" name="rsvp" disabled >
    Maybe
  </label>
             </div>
            </div> -->
       
          </div>
        
          <div class="modal" :class="editvalue">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
           
                <span style="font-family: Tahoma;" class="modal-card-title">{{ mac }}</span>
              
                <button
                  class="delete"
                  aria-label="close"
                  @click="cancle"
                ></button>
              </header>
              <section class="modal-card-body">
                <!-- Content ... -->
                <p style="font-size: 20px;margin-bottom: 5px;font-family: Tahoma;"><b> Tool life per day </b></p>
                <label for="tool life per day"></label>
                <input
                  class="input"
                  type="number"
                  placeholder="ตัวเลขเท่านั้น"
                  v-model="tool_life_per_day"
                />
              </section>
              <footer class="modal-card-foot">
                <button class="button is-success" @click="save_model">
                  Save changes
                </button>
                <button class="button" @click="cancle">Cancel</button>
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                <label class="checkbox">
                <input type="checkbox" v-model="checkbox">
                Insert data
                </label>
              <!-- //*****************************************************************************first */ -->
                &nbsp; &nbsp; &nbsp; &nbsp; 
                <!-- <label class="checkbox">
                <input type="checkbox" v-model="checkbox_first">
                First short
                </label> -->
                   <!-- //*****************************************************************************first */ -->
              </footer>
            </div>
          </div>
        </div>
      </div>
      <div class="maenu " >
        <p class="title" style="font-family: Tahoma;color: white">Information</p>
        <label style="font-family: Tahoma;color: white">Name :</label
        ><input  style="color: black;font-family: Tahoma" v-model="lname" class="input has-background-warning" type="text"  disabled="false" />
        <label style="font-family: Tahoma;color: white">Surname :</label>
        <input style="color: black;font-family: Tahoma" v-model="fname" class="input has-background-warning" type="text"   disabled="false"/>
        <label style="font-family: Tahoma;color: white">Position :</label>
        <input style="color:black;font-family: Tahoma" v-model="position" class="input has-background-warning" type="text"   disabled="false"/>
        <label style="font-family: Tahoma;color: white" for="">Product</label>
        <br>
        <div class="select" v-if="statusall == false">
          <select  @click="onload"  style="width: 12rem" >
            <option 
             :key="productname">
              {{ pro }}
              <div
                :value=" pro"
                v-if=" pro != null"
              ></div>
            </option>
          </select>
        </div>
         <div class="select" v-if="statusall == true">
          <select  @click="onload2" v-model="productall" style="width: 12rem" >
            <option  v-for="al in all"
             :key="al.id">
              {{ al.product_name }}
              <div
                :value=" al"
                v-if=" al != null"
              ></div>
            </option>
            
          </select>
        
        </div>
       
      
<br>
        <label style="font-family: Tahoma;color: white" for="">Line</label>
        
        <br />
        <div class="select" v-if="statusall == false">
          <select @click="selectline" v-model="test2" style="width: 12rem">
            <option v-for="linename in list_line_name" :key="linename._id">
              {{ linename.name }}
              <div
                :value="linename"
                v-if="linename != null"
              ></div>
            </option>
          </select>
        </div>
     
        <div class="select" v-if="statusall == true">
          <select @click="selectline" v-model="test2" style="width: 12rem">
            <option v-for="linename in list_line_name2" :key="linename._id">
              {{ linename.name }}
              <div
                :value="linename"
                v-if="linename != null"
              ></div>
            </option>
          </select>
        </div>
        <br>
        <label style="font-family: Tahoma;color: white" for="">Shift</label>
        <br>
        <div class="select">
          <select v-model="shift1" @click="onloadtool" style="width: 12rem" >
            <option>Day</option>
            <option>Night</option>
          </select>
          
        </div>
 <br><br>
      
        <button @click="getall" class="button" >All product</button>&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button v-if="this.position == 'TPM'" @click="edit1" class="button" >Reset</button>
        
        <div v-if="this.position != 'TPM' ">
          <button v-show="isVisible" @click="edit1" class="button" >Reset</button>
        </div>
        
        
        
      </div>
      <div class="modal" :class="editvalue1">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head has-background-info">
              <b class="modal-card-title has-text-white"
                > Reset Tool life</b
              >
              <button
                class="delete"
                aria-label="close is-large"
                @click="cancle"
              ></button>
            </header>
            <section class="modal-card-body">
              <div></div>
             
              <p style="font-family: Tahoma;"><b>Tool Name</b></p>
              <select class="select" v-model="resettoolname" style="width: 8rem;">
                <option v-for="sa in save1" :key="sa.id" >
                  {{ sa.name }}
                  <div
                :value=" sa.name"
                v-if=" sa != null"
              ></div>
                </option>
                
              </select>
            </section>
            <footer class="modal-card-foot">
              <button class="button is-info" @click="save_model11" >
                Reset
              </button>
              &nbsp; &nbsp; &nbsp;
              <button class="button" @click="cancle">Cancel</button>
            </footer>
          </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      save2:[],
      save1:[],
      machine: "",
      id: Number,
      line: "",
      test2: "",
      editvalue: "",
      editvalue1: "",
      editvalue2: "",
      idformaldal1: "",
      idformaldal2: "",
      idformaldal: "",
      mac: "",
      mac1: "",
      tool_life_per_day: "",
      tool_life_limit: "",
      create_time: Date(),
      // test3: "",
      save3: [],
      test1: "",
      list_line_name: [],
      list_line_name2: [],
      pro:'',
      fullname:'',
      all:[],
      fname:"",
      lname:"",
      position:"",
      shift1:"",
      value: [], 
      productall : "",
      statusall : false,
     showday : [],
     resettoolname:"",
      date: '',
      time: '',
      checkbox:"",
      checkbox_first:"",
    };
  },
  methods: {
    cancle() {
      this.tool_life_per_day = "";
      this.tool_life_limit = "";
      this.editvalue = "";
      this.editvalue1 = "";
      this.editvalue2 = "";
      this.checkbox = "";
      this.checkbox_first = "";
    },
    edit(id, name) {
      this.idformaldal = id;
      this.mac = name;
      this.editvalue = "is-active";
    },
    edit1(id, name) {
      this.idformaldal1 = id;
      this.mac1 = name;
      this.editvalue1 = "is-active";
    },

    save_model() {
      if(this.tool_life_per_day != ""){
      axios //api
        .post("http://localhost:3000/editline_tool", {
          id_per_tool: this.idformaldal,
          line_name: this.test2,
          tool_life_per_day: this.tool_life_per_day,
          checkbox:this.checkbox,
          checkbox_first:this.checkbox_first
        })
        .then((res) => {
          this.editvalue = "";
          this.checkbox = "";
          this.checkbox_first = "";
          this.selectline()
          this.onloadtool()
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      this.resetForm();
      }else{
        alert("input data")
      }
    },
    submitForm() {
      console.log(this.save1);
    },
    save_model11() {
      if (this.resettoolname != "") {
      axios 
        .post("http://localhost:3000/resetlimit", {
          line_name: this.test2,  
          name : this.resettoolname,
          fname : this.fname,
          lname : this.lname
         
        })
        .then((res) => {
          this.editvalue = "";
          this. selectline()
          this.onloadtool()
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      this.resetForm();
      }else{
        alert("invalid")
      }
      this.resetForm();
    },


    onload() {
      console.log(this.pro)
     
      axios
        .get("http://localhost:3000/line_name/" + this.pro)
        .then((response) => {
          this.list_line_name = response.data;
          console.log(response.data);
          
        })
        .catch((err) => {
          console.log(err);
        }); 
    },

    onload2() {
      console.log(this.pro)
     
      axios
        .get("http://localhost:3000/line_name2/" + this.productall)
        .then((response) => {
          this.list_line_name2 = response.data[0].line_name;
          console.log(response.data[0].line_name);
          
        })
        .catch((err) => {
          console.log(err);
        });

    },
    getall() {
      axios
        .get("http://localhost:3000/getall/")
        .then((response) => {
          this.all = response.data;
          this.statusall = true
          
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
    selectline() {
      if(this.test2 != ''){
        axios
        .get("http://localhost:3000/informationmachine1/" + this.test2)
        .then((response) => {
        
          this.save1 = response.data[0].line_tool;
          console.log(response.data[0].line_tool);
        })
        .catch((err) => {
          console.log(err);
        });
      }
    },
    onloadtool(){
      if(this.shift1 != '' && this.test2 != ''){
      axios
        .get("http://localhost:3000/shift/" + this.shift1+"/"+this.test2)
        .then((response) => {
          this.save2 = response.data
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err);
        });
      }
      },
      
    resetForm() {
      this.tool_life_per_day = "";
      this.tool_life_limit = "";
      this.editvalue = "";
      this.resettoolname = "";
    },

    test() {
      this.$router.push({ name: "test" });
    },
    editroo() {
      this.$router.push({ name: "editroo" });
    },
   graph() {
      this.$router.push({ name: "graph" });
    },
   login() {
      this.$router.push({ name: "info" });
    },
    edittool() {
      this.$router.push({ name: "regisline" });
    },
    editline() {
      this.$router.push({ name: "getline" });
    },
    editregister() {
      this.$router.push({ name: "register" });
    },
          printDate: function () {
            return new Date().toLocaleDateString();
          },
          printFullDate: function(){
            return new Date();
          },
          printTime: function () {
            return new Date().toLocaleTimeString();
          },    
  },
  mounted: function () {
          this.date = this.printDate();
          this.time = this.printTime();         
        },
  created() {
    this.pro = localStorage.getItem("productname")
    console.log(localStorage.getItem("shift"))
    console.log(this.pro.split(','))
    console.log(localStorage.getItem("fname") + " " + localStorage.getItem("lname"))
    this.fullname = localStorage.getItem("fname") + " " + localStorage.getItem("lname")
    this.fname = localStorage.getItem("fname")
    this.lname = localStorage.getItem("lname")
    this.position = localStorage.getItem("position")
  
    
    
  },
};



</script>



<style scoped>
.grid {
  display: grid;
  grid-template-columns: 0.5fr 4fr 1fr;
  column-gap: 20px;
 
}

.input {
  height: 1.9rem;
}
.cssbox {
  border: 0px solid #000000;
  box-shadow: 1px 1px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 15px;
  background: #005C9E;
  min-height: 33rem;
 
  
}
.manu {
  border: 0px solid #000000;
  box-shadow: 1px 1px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 15px;
  padding: 20px;
  background: rgb(2,0,36);
  min-height: 33rem;

}
.maenu {
  border: 0px solid #000000;
  box-shadow: 1px 1px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 15px;
  padding: 20px;
  background: rgb(2,0,36);
  min-height: 33rem;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,83,121,1) 34%, rgba(4,149,190,1) 67%, rgba(0,212,255,1) 98%);
  
}





</style>

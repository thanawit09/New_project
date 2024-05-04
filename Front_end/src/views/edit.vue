<template>
    <div class="container">
   
      <input
        class="input"
        type="number"
        placeholder="Plan"
        v-model="plan"
      />
      <input
        class="input"
        type="number"
        placeholder="day"
        v-model="day"
      />
      <input
        class="input"
        type="number"
        placeholder="time"
        v-model="time"
      />
      <button  @click="predict">predict</button>
      

      <div class="select">
        <select  v-model="shift" style="width: 12rem">
          <option value="All">
             All
          </option>
          <option value="Day">
             Day
          </option>
          <option value="Night">
             Night
          </option>
        </select>
      </div>


      
      
      <label >{{ tube_name }}</label>
      <div class="select">
        <select @click="select_part_no" v-model="part_id" style="width: 12rem">
          <option
            v-for="graphname in graph_name"
            :key="graphname._id"
            :value="graphname._id"
          >
            {{ graphname.part_no }}
            <div v-if="graphname.part_no != null"></div>
          </option>
        </select>
      </div>
  
      <div class="select">
        
         <div class="select">
          <select @click="select_line_name" v-model="line_id" style="width: 12rem">
          <option
            v-for="line in line_name"
            :key="line.line_name"
            :value="line.line_name"
          >
            {{ line.line_name }}
            <div v-if="line.line_name != null"></div>
          </option>
        </select>
      </div>
     
      
       
        
        <!-- <vue-bar-graph :points="[3, 5, 2, 5, 4]" :width="400" :height="200" /> -->
      </div>
  
      <div class="select">
        
        <div class="select">
         <select @click="get_tool_life" v-model="tool_id" style="width: 12rem">
         <option
           v-for="tool in tool_name"
           :key="tool"
           :value="tool"
         >
           {{ tool }}
           <div v-if="tool != null"></div>
         </option>
        </select>
      </div>
  
       
     </div>
   
    </div>
    
  </template>
  
  <script>
  
  import axios from "axios";
  
  // import VueBarGraph from "vue-bar-graph";
  
  export default {
    data() {
      return {
        graph_name: [],
        test2: "",
        part_id: "",
        line_name: [],
        line_id: "",
        tool_name: [],
        tool_id: "",
        tool_life:[],
        plan:Number,
        day:Number,
        time:Number,
        predict_number: 3000,
        graph_number:[],
        tube_name: "",
        shift:'',
        active: true,
        inactive: false,
        
      };
  
    },
  
    methods: {
      predict(){
        if(this.shift == "Day" || this.shift == "Night"){
          // line 1
          let t = this.time 
          let x = this.day 
          // var y = this.plan
          let xx =(x * t * 3600 * 0.77)/7.1 
          console.log("จำนวนผลิตต่อเดือน : "+xx)
          let res = (1 * t * 3600 * 0.77)/7.1
          let jj = []
          for(let j = 0; j < x;j++){
              jj.push(res * (j+1))
          }
          console.log("จำนวนการผลิตต่อวัน")
          console.log(jj)

          // line 2
          let t1 = this.time 
          let x1 = this.day 
          // var y1 = this.plan
          let xx1 =(x1 * (t1+1) * 3600 * 0.77)/7.1
          let res1 = (1 * (t1+1) * 3600 * 0.77)/7.1
          console.log("จำนวนผลิตต่อเดือน : "+xx1)
          let jj1 = []
          for(let j1 = 0; j1 < x1;j1++){
              
              jj1.push(res1 * (j1+1))
          }
          console.log("จำนวนการผลิตต่อวัน")
          console.log(jj1)
        }
        else if(this.shift == "All"){
           // line 1
           let t = this.time 
          let x = this.day
          // var y = this.plan
          let xx =(x * (t*2) * (3600) * 0.77)/7.1 
          console.log("จำนวนผลิตต่อเดือน : "+xx)
          let res = (1 * (t*2) * (3600) * 0.77)/7.1
          let jj = []
          for(let j = 0; j < x;j++){
              jj.push(res * (j+1))
          }
          console.log("จำนวนการผลิตต่อวัน")
          console.log(jj)

          // line 2
          let t1 = this.time 
          let x1 = this.day
          // var y1 = this.plan
          let xx1 =(x1 * ((t1+1)*2) * (3600) * 0.77)/7.1
          let res1 = (1 * ((t1+1)*2) * (3600) * 0.77)/7.1
          console.log("จำนวนผลิตต่อเดือน : "+xx1)
          let jj1 = []
          for(let j1 = 0; j1 < x1;j1++){
              
              jj1.push(res1 * (j1+1))
          }
          console.log("จำนวนการผลิตต่อวัน")
          console.log(jj1)
        }

        if(this.tool_id == "machine3"){
          this.predict1()
        }else if(this.tool_id == "machine2"){
          console.log("machine2")
          // this.predict1()
        }

      },
  
      predict1(){
        var x = this.day * 3600
        var y = this.plan
        var xx = (x/7.1)*80
        console.log(xx)
        var res = y/Math.round(xx)
        console.log(res)
        console.log((y%xx))
        for(let i = 0; i< (y%xx);i++){
          this.graph_number.push(Math.round(res))
        }
        
      },
     
      

      onload() {
        axios
          .get("http://localhost:3000/graph_name")
          .then((response) => {
            this.graph_name = response.data;
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      select_part_no() {
        if(this.part_id != ''){
          axios
          .get("http://localhost:3000/getspecificpart/" + this.part_id)
          .then((response) => {
            this.line_name = response.data[0].type;
          })
          .catch((err) => {
            console.log(err);
          });
        }
      },
      select_line_name() {
        if(this.line_id != ""){
        axios
          .get(
            "http://localhost:3000/getspecificline/" +
              this.line_id +
              "/" +
              this.part_id
          )
          .then((response) => {
            this.tool_name = response.data;
            
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
        }
      },
     
      
      get_tool_life(){
        this.tool_life = []
        if(this.tool_id != "" ){
        axios
          .get("http://localhost:3000/get_tool_life/" + this.tool_id+"/" +this.line_id)
          .then((response) => {
            this.tool_life.push(response.data);
            console.log(response.data)
            
          })
          .catch((err) => {
            console.log(err);
          });
        }else if(this.part_id != ""

        ){
          axios
          .get("http://localhost:3000/get_tube_no/" + this.part_id+"/" +this.line_id )
          .then((response) => {
            this.tube_name = (response.data);
            console.log(response.data)
            
            
          })
          .catch((err) => {
            console.log(err);
          });
        }
        },
      
    },
    
    created() {
      this.onload();
    },
  };
  </script>
  
  
  <style scoped>

</style>
  
<template>
  <div class="container">
    
    <br />
    <br>
    <br>
    <div class="field">
      <label class="label">Machine</label>
      <div class="control">
        <input class="input" type="text" v-model="machine" />
      </div>
    </div>

    <div class="field">
      <label class="label">Tool</label>
      <div class="control">
        <input class="input" type="text" v-model="tool" />
      </div>
    </div>
    <div class="field">
      <label class="label">Line</label>
      <div class="control">
        <select v-model="line" class="input">
          <option v-for="saa in save2" :key="saa.id">
            <div :value="saa.line" v-if="saa.line != null">
              {{ saa.line }}
            </div>
          </option>
        </select>
      </div>
    </div>
    <!-- <br />
    <center>
      <div class="columns-3">
        <div class="column" >
          <label>Machine </label
          ><input type="text" class="form-control" v-model="machine" />
        </div>
        <br>
        <div class="column-gap">
          <label>Tool</label
          ><input type="text" class="form-control" v-model="tool" />
        </div>
        <div class="column">
          <label>Line</label>
          <select v-model="line" class="tag is-dark is-normal">
            <option v-for="saa in save2" :key="saa.id">
              <div :value="saa.line" v-if="saa.line != null">
                {{ saa.line }}
              </div>
            </option>
          </select>
        </div>
      </div> -->
    <center>
      <br />
      <button @click.prevent="submitForm2" class="button is-info">
        submit
      </button>
    </center>
    <!-- </center> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      save2: [],
      line: "",
      machine: "",
      tool: "",
    };
  },
  methods: {
    submitForm2() {
      if (this.line != "") {
        this.$router.push({ name: "home" });
      axios 
        .post("http://localhost:3000/informationmachine", {
          tool: this.tool,
          machine: this.machine,
          line: this.line,
          tool_life_per_day: 0,
          tool_life: 0,
          tool_life_limit: 0,
        })
        .then((res) => {
          console.log(res);
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
      } 
    },
    
    getData() {
      axios
        .get("http://localhost:3000/showline") //showline
        .then((response) => {
          this.save2 = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    resetForm() {
      (this.machine = ""), (this.line = ""), (this.tool = "");
    },
    
    
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped></style>

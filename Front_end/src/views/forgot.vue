<template>
  <div>
    <div class="cssbox">
      <center>
        <i class="fas fa-lock" style="font-size: 2rem"></i>
      </center>
      <br />
      <label for="" class="title" style="font-family: Tahoma"
        >Input your username and Email</label
      >
      <hr />
      <label for="" style="font-family: Tahoma">Username</label>
      <input type="text" v-model="username" class="input" />
      <br />
      <label for="" style="font-family: Tahoma">Email</label>
      <input type="email" name="" id="" v-model="email" class="input" />
      <center>
        <br />
        <button @click="back" class="button">Back</button
        >&nbsp;&nbsp;&nbsp;&nbsp;
        <button @click="save_model" class="button">Submit</button>
      </center>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },

  methods: {
    submitForm1() {
      this.$router.push({ name: "home" });
    },
    back() {
      this.$router.push({ name: "info" });
    },
    save_model() {
      if (this.email != "") {
        axios //api
          .post("http://localhost:3000/password", {
            username: this.username,
            email: this.email,
          })
          .then((res) => {
            console.log(res);
            alert(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("กรอกข้อมูลให้ครบ");
      }
      this.resetForm();
    },
  },
};
</script>

<style scoped>
.cssbox {
  position: absolute;
  border: 0px solid #000000;
  box-shadow: 1px 1px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 15px;
  bottom: 30%;
  width: 37%;
  right: 30%;
  min-height: 20rem;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
</style>

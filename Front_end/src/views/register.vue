<template>
  <section>
    <div class="container" style="">
      <div class="col-12">
        <div class="columns"></div>
        <br />
        <center>
          <span style="font-size: 45px; color: #ff0000; font-family: Tahoma"
            ><b>Register</b></span
          >
        </center>
        <br />
        <span class="title is-3" style="color: #000000">
          <b style="font-family: Tahoma; text-decoration: underline"
            >Tool Life Records with IoT</b
          >
        </span>

        <br />
        <br />
        <span style="font-size: 35px; color: #ff0000; font-family: Tahoma">
          <b>Information</b>
        </span>
        <br />
        <br />
        <div class="columns">
          <div class="column is-3">
            <label style="font-family: Tahoma" for="">Prefix </label>
            <br />
            <div class="select">
              <select v-model="prefix" style="width: 12rem">
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
              </select>
            </div>
          </div>
          <div class="column">
            <label style="font-family: Tahoma" for="">Name </label>
            <br />
            <input
              v-model="lname"
              class="input"
              type="text"
              placeholder="Name"
            />
          </div>
          <div class="column">
            <label style="font-family: Tahoma" for="">Surname </label>
            <br />
            <input
              class="input"
              type="text"
              placeholder="Surname"
              v-model="fname"
            />
          </div>
        </div>

        <div class="columns">
          <div class="column is-3">
            <label style="font-family: Tahoma" for="">Position </label>
            <br />
            <div class="select">
              <select v-model="position" style="width: 12rem">
                <option value="LL">LL</option>
                <option value="TL">TL</option>
                <option value="TPM">TPM</option>
                <option value="Operator">Operator</option>
              </select>
            </div>
          </div>
          <div class="column is-4">
            <label style="font-family: Tahoma" for="">Email </label>
            <br />
            <input
              v-model="email"
              class="input"
              type="Email"
              placeholder="Email@gmail.com"
            />
          </div>
          <div class="column is-2">
            <label style="font-family: Tahoma" for="">Product </label>
            <br />
            <div class="select">
              <select style="width: 50rem" v-model="product_select">
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
              </select>
            </div>
          </div>
          <div class="column">
            <label style="font-family: Tahoma" for="">ID </label>
            <br />
            <input
              style="width: 10rem"
              class="input"
              type="text"
              placeholder="Your ID"
              v-model="employee"
            />
          </div>
          <div class="column is-2">
            <button
              @click="edit"
              class="button"
              style="margin-top: 1.5rem; font-size: 10px; height: 2.5rem"
            >
              Click when product is not found
            </button>

            <div class="modal" :class="editvalue">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head has-background-info">
                  <b class="modal-card-title has-text-white">Add Product</b>

                  <button
                    class="delete"
                    aria-label="close is-large"
                    @click="cancle"
                  ></button>
                </header>
                <section class="modal-card-body">
                  <!-- Content ... -->
                  <p><b> Product </b></p>
                  <label for=""></label>

                  <input
                    v-model="product"
                    class="input"
                    type="text"
                    placeholder=""
                  />
                </section>
                <footer class="modal-card-foot">
                  <button
                    style="font-family: Tahoma"
                    @click="submitForm1"
                    class="button is-info"
                  >
                    Submit
                  </button>
                  &nbsp; &nbsp; &nbsp;
                  <button
                    style="font-family: Tahoma"
                    class="button"
                    @click="cancle"
                  >
                    Cancel
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </div>

        <span style="font-size: 35px; color: #ff0000; font-family: Tahoma">
          <b>Account</b>
        </span>

        <div class="columns">
          <div class="column">
            <label style="font-family: Tahoma" for="">Username </label>
            <br />
            <input
              v-model="username"
              class="input"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="column">
            <label style="font-family: Tahoma" for="">Password </label>
            <br />

            <input
              v-model="password"
              class="input"
              type="password"
              placeholder="*********"
            />
          </div>
        </div>

        <hr style="background-color: black" />

        <div>
          <center>
            <input type="checkbox" name="" id="" />
            <label for=""
              >ฉันยอมรับ
              <span style="color: #ff0000; text-decoration: underline"
                >เงื่อนไขและข้อกำหนดในการใช้งาน</span
              ></label
            >
          </center>
        </div>
        <br />
        <center>
          <button
            style="font-family: Tahoma"
            @click="adduser"
            class="button is-info"
          >
            Submit</button
          >&nbsp;&nbsp;&nbsp;&nbsp;
        </center>

        <br />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      editvalue: "",
      line: "",
      product: "",
      fname: "",
      lname: "",
      username: "",
      email: "",
      password: "",
      position: "",
      prefix: "",
      product_select: "",
      line_select: "",
      productname: [],
      linename: [],
      employee: "",
    };
  },
  methods: {
    cancle() {
      this.editvalue = "";
    },
    edit() {
      this.editvalue = "is-active";
    },
    resetForm() {
      this.editvalue = "";
      this.product = "";
    },

    submitForm1() {
      axios //api
        .post("http://localhost:3000/inputproduct", {
          //line1
          product_name: this.product,
          line_name: [],
        })
        .then((res) => {
          this.onload();
          console.log(res);

          alert(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.resetForm();
    },
    adduser() {
      if (this.product_select != "") {
        axios
          .post("http://localhost:3000/inputuser", {
            Prefix: this.prefix,
            fname: this.fname,
            lname: this.lname,
            productname: this.product_select,
            position: this.position,
            email: this.email,
            username: this.username,
            password: this.password,
            employee: this.employee,
          })
          .then((res) => {
            alert(res.data);
            this.$router.push({ name: "info" });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("Select product");
      }
    },
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
  },
  created() {
    this.onload();
  },
};
</script>

<style></style>

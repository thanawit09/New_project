<template>
  <div class="grid">
    <div class="page-main" style="margin-left: 350px">
      <center>
        <div class="cssbox" style="margin-top: 150px">
          <div>
            <div>
              <h1
                style="font-family: Tahoma; color: white; color: #005c9e"
                class="title"
              >
                Match product to line
              </h1>
              <br /><br />
              <label
                class="title is-5"
                style="font-family: Tahoma; margin-right: 7rem"
                for=""
                >Product</label
              >
              <br />
              <div class="select is-link">
                <select v-model="product_select" style="width: 12rem">
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
              <br /><br /><br />
              <label
                class="title is-5"
                style="font-family: Tahoma; margin-right: 9rem"
                for=""
                >Line</label
              >
              <br />
              <div class="select is-link">
                <select
                  class="select"
                  v-model="line_select"
                  style="width: 12rem"
                >
                  <option v-for="linename in linename" :key="linename._id">
                    {{ linename.line_name }}
                    <div
                      :value="linename.line_name"
                      v-if="linename.line_name != null"
                    ></div>
                  </option>
                </select>
              </div>
              <br />
              <br /><br />
              <button
                style="font-family: Tahoma"
                class="button is-warning"
                @click="sumproduct"
              >
                submit</button
              >&nbsp;
              <button style="font-family: Tahoma" @click="edit" class="button">
                Add Line
              </button>
              <br /><br />
              <button
                style="font-family: Tahoma"
                @click="gonext"
                class="button is-info"
              >
                Apply
              </button>
            </div>
            <div class="modal" :class="editvalue">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head has-background-info">
                  <b class="modal-card-title has-text-white"> Add Line</b>
                  <button
                    class="delete"
                    aria-label="close is-large"
                    @click="cancle"
                  ></button>
                </header>
                <section class="modal-card-body">
                  <div></div>
             
                  <p style="margin-right: 35rem;font-family: Tahoma;font-size: 20px;"><b>Line </b></p>
                  <input v-model="line" type="text" class="input" />
                </section>
                <footer class="modal-card-foot">
                  <button class="button is-info" @click="submitForm2">
                    Save line
                  </button>
                  &nbsp; &nbsp; &nbsp;
                  <button class="button" @click="cancle">Cancel</button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
    <div class="page-rightbar">
      <div
        class="content && cssbox"
        style="
          margin-right: 200px;
          margin-top: 150px;
          height: 29rem;
          background-color: #3ea0ea;
        "
      >
        <h1 style="color: white; text-decoration: underline">Validate</h1>
        <ul>
          <li style="color: white">Check the accuracy of product.</li>
          <li style="color: white">Check the accuracy of line.</li>
          <li style="color: white">Check the accuracy of match to line.</li>
          <li style="color: white">Click Submit.</li>
          <br />
          <li style="color: white">Click Apply to next.</li>
        </ul>
        <h1 style="color: white; text-decoration: underline; font-size: 30px">
          How to insert line
        </h1>
        <ul>
          <li style="color: white">Click Add line.</li>
          <li style="color: white">Input line name.</li>
          <li style="color: white">Click Submit.</li>
        </ul>
      </div>
    </div>
  </div>
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
      sumif: [],
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
      axios
        .get("http://localhost:3000/selectallline")
        .then((response) => {
          this.linename = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sumproduct() {
      if (this.line_select != "" && this.product_select != "") {
        axios
          .post("http://localhost:3000/sumproduct", {
            line_name: this.line_select,
            product_name: this.product_select,
          })
          .then((res) => {
            alert(res.data);

            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("กรอกข้อมูลไม่ครบ");
      }
    },
    submitForm2() {
      axios //api
        .post("http://localhost:3000/inputline", {
          //line1
          line_name: this.line,
          line_tool: [],
        })
        .then((res) => {
          console.log(res);
          this.editvalue = "";
          this.onload();
          alert(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    gonext() {
      this.$router.push({ name: "select" });
    },
  },
  created() {
    this.onload();
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: auto 500px;
  grid-template-rows: 70px minmax(160px, auto) auto;
  grid-template-areas: "main rightbar";
  column-gap: 0px;
  row-gap: 1px;
}
.page-rightbar {
  grid-area: rightbar;
}
.page-main {
  grid-area: main;
}
.cssbox {
  border: 0px solid #000000;
  box-shadow: 1px 1px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 15px;
  min-height: 20rem;
}
</style>

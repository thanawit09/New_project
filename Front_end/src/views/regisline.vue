<template>
  <section>
    <div class="hero-body">
      <div class="container">
        <div class="grid">
          <div class="is-3-widescreen" style="display: inline-block">
            <label
              action=""
              class="box has-background-info-dark"
              style="width: 450px; height: 45rem; margin-left: 14rem"
            >
              <center class="has-text-white">
                <span
                  style="
                    font-size: 30px;
                    font-family: Tahoma;
                    text-decoration: underline;
                  "
                  ><b>Edit Information Tool Life Records </b></span
                >
              </center>
              <br />
              <div class="field">
                <div class="">
                  <div class="col">
                    <label
                      class="label has-text-white"
                      style="font-family: Tahoma"
                      >Product</label
                    >
                  </div>
                </div>
                <div class="select">
                  <select
                    @click="selectline"
                    v-model="test2"
                    style="width: 26rem"
                  >
                    <option
                      v-for="productname in list_product_name"
                      :key="productname._id"
                    >
                      {{ productname.product_name }}
                      <div
                        :value="productname"
                        v-if="productname != null"
                      ></div>
                    </option>
                  </select>
                </div>
              </div>
              <div class="field">
                <div class="">
                  <label
                    class="label has-text-white"
                    style="font-family: Tahoma"
                    >Line</label
                  >
                </div>
                <div class="select">
                  <select v-model="data_line" style="width: 26rem">
                    <option
                      v-for="linename in list_line_name"
                      :key="linename._id"
                    >
                      {{ linename.name }}
                      <div :value="linename" v-if="linename != null"></div>
                    </option>
                  </select>
                </div>
              </div>

              <div class="field">
                <div class="">
                  <div class="col">
                    <label
                      class="label has-text-white"
                      style="font-family: Tahoma"
                      >Tool Name
                    </label>
                  </div>
                </div>
                <div class="control">
                  <input
                    v-model="name"
                    type="text"
                    placeholder="Tool Name"
                    class="input"
                    required
                  />
                  <span class=""> </span>
                </div>
                <br />
                <label class="label has-text-white" style="font-family: Tahoma"
                  >Email for tool
                </label>
                <div>
                  <input
                    v-model="email"
                    type="email"
                    name=""
                    id=""
                    class="input"
                  />
                  <label class="checkbox" style="color: white;font-family: Tahoma">
                  <input type="checkbox" v-model="check_email">
                  Insert email 
                  </label>
                

               
               
                </div>
              </div>
              <div class="field">
                <div class="">
                  <label
                    class="label has-text-white"
                    style="font-family: Tahoma"
                    >Unit</label
                  >
                </div>
                <div class="select">
                  <select v-model="unit_select" style="width: 26rem">
                    <option v-for="unitname in unit_name" :key="unitname._id">
                      {{ unitname.unit }}
                      <div :value="unitname" v-if="unitname != null"></div>
                    </option>
                  </select>
                </div>
              </div>
              <div class="field">
                <div class="">
                  <div class="col">
                    <label
                      class="label has-text-white"
                      style="font-family: Tahoma"
                      >Tool Life Limit</label
                    >
                  </div>
                </div>
                <div class="control">
                  <input
                    v-model="limit"
                    type="text"
                    placeholder="Tool Life Limit"
                    class="input"
                    required
                  />

                  <span class="icon is-small is-left"> </span>
                </div>
              </div>
              <div class="field"></div>

              <center>
                <div class="field">
                  <button
                    @click="information()"
                    style="width: 7rem; font-family: Tahoma"
                    class="button is-white"
                  >
                    Submit</button
                  >&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    @click="edit"
                    style="width: 7rem; font-family: Tahoma"
                    class="button is-white"
                  >
                    Add Unit</button
                  >&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    @click="apply"
                    style="width: 7rem; font-family: Tahoma"
                    class="button is-white"
                  >
                    Apply
                  </button>
                </div>
              </center>
              <br />
            </label>
          </div>
          <!-- for email -->

          <div>
            <div
              class="content && cssbox"
              style="height: 29rem; background-color: #ffc324"
            >
              <h1
                style="
                  color: white;
                  text-decoration: underline;
                  font-size: 30px;
                "
              >
                How to insert information tool
              </h1>
              <ul>
                <li style="color: white">Select product.</li>
                <li style="color: white">Select line.</li>
                <li style="color: white">Input tool name .</li>
                <li style="color: white">Input unit and Tool life limit.</li>
                <li style="color: white">
                  If unit is not found click Add unit.
                </li>

                <li style="color: white">Click Submit and Apply.</li>
              </ul>
              <h1
                style="
                  color: white;
                  text-decoration: underline;
                  font-size: 30px;
                "
              >
                How to edit information tool
              </h1>
              <ul>
                <li style="color: white">Select product.</li>
                <li style="color: white">Select line.</li>
                <li style="color: white">
                  Input tool name that you want to edit.
                </li>
                <li style="color: white">Check the accuracy of tool name.</li>
                <li style="color: white">Input unit and Tool life limit.</li>

                <li style="color: white">Click Submit and Apply.</li>
              </ul>
              <h1
                style="
                  color: white;
                  text-decoration: underline;
                  font-size: 30px;
                "
              >
                If line is not found
              </h1>
              <ul>
                <li style="color: white">Click Apply.</li>
                <li style="color: white">Click Edit line.</li>
              </ul>
              <button class="
                    button" @click="update" style="font-family: Tahoma;height: 2rem;margin-top: 2.5rem;margin-left: 18rem;">Edit email for tool</button>
            </div>
         
          </div>
        </div>
      </div>
    </div>
    <div class="modal" :class="editvalue">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head has-background-info">
          <b class="modal-card-title has-text-white">Add Unit</b>

          <button
            class="delete"
            aria-label="close is-large"
            @click="cancle"
          ></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <p><b> Unit </b></p>
          <label for=""></label>
          
          <input v-model="unit" class="input" type="text" placeholder="" />
        
        </section>
        <footer class="modal-card-foot">
          <button
            style="font-family: Tahoma"
            @click="save_model"
            class="button is-info"
          >
            Save
          </button>
          &nbsp; &nbsp; &nbsp;
          <button style="font-family: Tahoma" class="button" @click="cancle">
            Cancel
          </button>
        </footer>
      </div>
    </div>
    <!-- //***************************************for mail edit */ -->
    <div class="modal" :class="editvalue2">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head has-background-info">
          <b class="modal-card-title has-text-white">Change Email for tool</b>

          <button
            class="delete"
            aria-label="close is-large"
            @click="cancle"
          ></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <label for="" style="font-family: Tahoma;">Product</label>
          <br>
          <select v-model="product_select_mail" @click="select_line_mail" style="width: 38rem" class="select">
                    <option v-for="product in get_product_email " :key="product._id">
                      {{ product.product_name  }}
                      <div :value="product " v-if="product != null"></div>
                    </option>
                  </select>
                  <br>
                  <label for="" style="font-family: Tahoma;">Line</label>
          <br>
                  <select v-model="line_select_mail" style="width: 38rem" @click="select_name_mail" class="select">
                    <option v-for="linename in get_line_email" :key="linename._id">
                      {{ linename.name }}
                      <div :value="linename" v-if="linename != null"></div>
                    </option>
                  </select>
                  <br>
                  <label for="" style="font-family: Tahoma;">Tool name</label>
          <br>
                  <select v-model="name_select_mail" style="width: 38rem" @click="select_art" class="select">
                    <option v-for="name in get_name_email" :key="name._id">
                      {{name.name }}
                      <div :value="name" v-if="name != null"></div>
                    </option>
                  </select>
                  <br>
                  <label for="" style="font-family: Tahoma;">Email</label>
          <br>
                  <select v-model="email_select_mail" style="width: 38rem" class="select">
                    <option v-for="email in get_email_email" :key="email._id">
                      {{ email }}
                      <div :value="email" v-if="email != null"></div>
                    </option>
                  </select>
                  <br>
          <p><b> New Email </b></p>
          <label for=""></label>

          <input v-model="email_change" class="input" type="text" placeholder="" />
          
        
        </section>
        <footer class="modal-card-foot">
          <button
            style="font-family: Tahoma"
            @click="save_edit"
            class="button is-info"
          >
            Update
          </button>
          &nbsp; &nbsp; &nbsp;
          <button style="font-family: Tahoma" class="button" @click="cancle">
            Cancel
          </button>
        </footer>
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
      editvalue2: "",
      line_name: "",
      tool_name: "",
      unit: "",
      unit_name: [],
      limit: "",
      list_line_name: [],
      list_product_name: [],
      test2: "",
      data_line: "",
      idname: "",
      name: "",
      unit_select: "",
      product_tool: "",
      list_line_name_tool: [],
      data_line_for_tool: "",
      list_tool_name_for_mail: [],
      tool_name_for_email: "",
      email: "",
      check_email:"",
      get_product_email:[],
      product_select_mail:"",
      get_line_email:[],
      line_select_mail:"",
      get_name_email:[],
      name_select_mail:"",
      get_email_email:[],
      email_select_mail:"",
      email_change:""
    };
  },
  methods: {
    cancle() {
      this.unit = "";
      this.email_select_mail = "";
      this.name_select_mail = "";
      this.line_select_mail = "";
      this.product_select_mail = "";
      this.email_change = "";
      this.editvalue = "";
      this.editvalue2 = "";
    },
    update(){
      this.editvalue2 = "is-active";
    },
    edit() {
      this.editvalue = "is-active";
    },
    resetForm() {
      this.unit = "";
      this.email_select_mail = "";
      this.name_select_mail = "";
      this.line_select_mail = "";
      this.product_select_mail = "";
      this.email_change = "";
      this.editvalue = "";
      this.editvalue2 = "";
    },
    save_model() {
      axios //api
        .post("http://localhost:3000/unit", {
          unit: this.unit,
        })
        .then((res) => {
          this.editvalue = "";
          this.onload();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      this.resetForm();
    },
    save_edit() {
      axios //api
        .post("http://localhost:3000/mail_edit_for_regis", {
        email:this.email_select_mail,
         email1: this.email_change,
         line_name:this.line_select_mail,
         name:this.name_select_mail,
        })
        .then((res) => {
          this.resetForm();
          alert(res.data);
          this.onload();
          console.log(res);
          this.resetForm();
        })
        .catch((err) => {
          console.log(err);
        });

        this.resetForm();
    },
    onload() {
      axios
        .get("http://localhost:3000/getall/")
        .then((response) => {
          this.list_product_name = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get("http://localhost:3000/getallunit/")
        .then((response) => {
          this.unit_name = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
        /************************************** */
        axios
        .get("http://localhost:3000/getallformail/")
        .then((response) => {
          this.get_product_email = response.data;
          console.log(response.data);
        })
    },
    //************************************************************************ */
    select_line_mail() {
      axios
        .get("http://localhost:3000/line_name_for_mail/" + this.product_select_mail)
        .then((response) => {
          this.get_line_email = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    select_name_mail() {
      axios
        .get("http://localhost:3000/name_name_for_mail/" + this.line_select_mail)
        .then((response) => {
          this.get_name_email = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    select_art() {
      axios
        .get("http://localhost:3000/email_for_register/" + this.name_select_mail + "/" + this.line_select_mail)
        .then((response) => {
          this.get_email_email = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //************************************************************************************** */
    selectline() {
      axios
        .get("http://localhost:3000/line_name/" + this.test2)
        .then((response) => {
          this.list_line_name = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    information() {
      if (this.data_line != "" && this.email != "") {
        axios
          .post("http://localhost:3000/regisline", {
            line_name: this.data_line,
            name: this.name,
            limit: this.limit,
            unit: this.unit_select,
            email: this.email,
            check_email : this.check_email
          })
          .then((res) => {
            alert(res.data);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("Select line name or Input Email for tool");
      }
    },
    apply() {
      this.$router.push({ name: "select" });
    },
  },
  created() {
    this.onload();
  },
  resetForm() {
    this.editvalue = "";
    this.unit = "";
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.flexbox {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: flex-end;
  box-sizing: border-box;
  margin: 0px -10px;
}

.item {
  box-sizing: border-box;
  width: 20%;
  margin-bottom: 0px;
  padding: 0px 10px;
}
.cssbox {
  border: 0px solid #000000;
  box-shadow: 1px 1px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 15px;
  width: 30rem;
  min-height: 45rem;
}
</style>

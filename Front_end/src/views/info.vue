<template>
  <section>
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="border-bottom: 1px solid #ececec"
    >
      <div class="container-fluid">
        <br />
        <a class="navbar-brand">
          <img
            src="https://seeklogo.com/images/D/denso-logo-55E00551B5-seeklogo.com.png"
            alt=""
            style="margin-left: 100px; width: 25%; height: 0%"
          />
        </a>
      </div>
      <span style="margin-left: 1030px">
        <span style="color: #ff0000">ไทย</span> | Eng</span
      >
    </nav>
    <div
      style="
        background-image: url('https://glimpse.media/wp-content/webpc-passthru.php?src=https://glimpse.media/wp-content/uploads/2020/05/Web-Design-Banner2.jpg&nocache=1');
        background-position: left bottom;
        height: 41rem;
        background-size: cover;
        background-repeat: no-repeat;
      "
    >
      <br /><br />
      <div class="test1">
        <div class="container" style="left: 300px; top: 150px">
          <span
            style="
              font-size: 45px;
              font-family: Franklin Gothic Medium;
              color: #ff0000;
              background-color: white;
            "
            ><b>Tool Life Records</b></span
          >
          <div
            class="title is-4"
            style="margin-left: 50px; background-color: white"
          >
            <p style="color: Crimson; font-family: Franklin Gothic Medium">
              With IoT DX implementation
            </p>
          </div>
        </div>
      </div>
      <div class="container" style="left: 880px; bottom: 85px">
        <div>
          <div class="is--tablet is-desktop is-3-widescreen">
            <label action="" class="box" style="width: 450px; height: 550px">
              <center>
                <h2
                  style="
                    font-size: 40px;
                    color: blue;
                    font-family: Franklin Gothic Medium;
                  "
                >
                  <b>Login</b>
                </h2>
              </center>
              <br />
              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left">
                  <input
                    type="text"
                    placeholder="username"
                    class="input"
                    v-model="username"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    class="input"
                    v-model="password"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field"></div>
              <br />
              <center>
                <div class="field">
                  <button
                    @click="submitForm2"
                    style="width: 7rem"
                    class="button is-info"
                  >
                    Login</button
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    @click="editregisters"
                    style="width: 7rem"
                    class="button is-danger"
                  >
                    Register
                  </button>
                  <br /><br />
                  <button
                    @click="remember"
                    style="width: 9rem"
                    class="button is-warning"
                  >
                    Forgot password
                  </button>
                </div>
              </center>
              <br />
              <center>
                <span
                  style="
                    font-size: 18px;
                    font-family: Franklin Gothic Medium;
                    color: gray;
                  "
                  >or</span
                >
              </center>
              <hr style="margin-top: 2px" />

              <nav
                class="pagination is-rounded"
                role="navigation"
                aria-label="pagination"
                style="margin-left: 3rem"
              >
                <ul class="pagination-list">
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <li>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                      alt=""
                      style="width: 40px"
                    />
                  </li>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <li>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
                      alt=""
                      style="width: 35px"
                    />
                  </li>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <li>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3670/3670144.png"
                      alt=""
                      style="width: 40px"
                    />
                  </li>
                </ul>
              </nav>
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm1() {
      this.$router.push({ name: "home" });
    },
    remember() {
      this.$router.push({ name: "forgot" });
    },
    submitForm2() {
      axios //api
        .post("http://localhost:3000/getuser", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          if (res.data == "invalid username") {
            alert(res.data);
          } else if (res.data == "invalid password") {
            alert(res.data);
          } else {
            console.log(res.data);
            localStorage.setItem("Prefix", res.data[0].Prefix);
            localStorage.setItem("fname", res.data[0].fname);
            localStorage.setItem("lname", res.data[0].lname);
            localStorage.setItem("position", res.data[0].position);
            localStorage.setItem("email", res.data[0].email);
            localStorage.setItem("productname", res.data[0].productname);
            this.$router.push({ name: "select" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    editregisters() {
      this.$router.push({ name: "register" });
    },
  },
};
</script>

<style scoped>
.test1 {
  position: relative;
  display: inline-block;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
  animation: flip 2s infinite;
  animation-delay: calc(0.2s * var(--i));
}
.test1 {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}

.test1:nth-child(1) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

.test1:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

.test1:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

.test1:nth-child(4) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
.button:hover {
  border-color: white;
  color: white;
  box-shadow: 0 0 10px 10px blue inset, 0 0 0 0 blue;
  transition: all 150ms ease-in-out;

  box-shadow: 0 0 5px 0 blue inset, 0 0 5px 1px blue;
}
.grid {
  display: inline-block;

  width: max-content;
  height: 40rem;
  padding: 0px 12px;
  width: 80rem;
}
</style>

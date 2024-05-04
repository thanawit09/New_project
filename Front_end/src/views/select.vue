<template>
  <div class=" ">
    <center>

    <div class="">
      <br /><br /><br /><br /><br />
      <div style="">
        <center>
          <span class="title is-3" style="color: #000000">
            <b style="font-family: Tahoma;">Tool Life Records with IoT</b>
          </span>
          <br /><br /><br />
        </center>
        <center>
          <button @click="submitForm1"
            class="button is-info"
            style="width: 20rem; font-family: Tahoma; font-size: 20px"
          >
            Use tool life records
          </button>
          <br /><br />
          <button @click="submitForm2"
            class="button is-danger"
            style="width: 20rem; font-family: Tahoma; font-size: 20px"
          >
            Edit information tool life records
          </button>
          <br /><br />
          <button @click="submitForm3"
            class="button is-primary"
            style="width: 20rem; font-family: Tahoma; font-size: 20px"
          >
            Edit line
          </button>
          
        </center>
      </div>
      
    </div>
     </center>
     <center style="margin-right: 42rem;margin-top: 5rem;">
      
    <div class="columns" style="width: 15rem; height: auto;">
      <div class="column is-12 ">
      
          <img
            src="https://cdn-icons-png.flaticon.com/512/1276/1276720.png"
            alt=""
            style="width: 4rem; opacity: 0.3"
          />

          <h1 style="font: 30px prompt, sans-serif">การบริการ</h1>
          <P class="" style="font: 16px prompt, sans-serif; color: #6f7678"
            >จัดการการสมัครสมาชิกทั้งหมดของคุณได้ง่ายๆ</P
          >
       
      </div>
      <div class="column is-12 " >
      
          <img
            src="https://cdn-icons-png.flaticon.com/512/2377/2377819.png"
            alt=""
            style="width: 4rem; opacity: 0.3"
          />
          <h1 style="font: 30px prompt, sans-serif">เริ่มต้นใช้งาน</h1>
          <P class="" style="font: 16px prompt, sans-serif; color: #6f7678"
            >เพื่อลดเวลาในการทำงานลงและสามารถ forecast การเสื่อมสภาพของ Tool
            ได้</P
          >
        
      </div>
      <div class="column is-12">
      
          <img
            src="https://cdn-icons-png.flaticon.com/512/3934/3934313.png"
            alt=""
            style="width: 4rem; opacity: 0.3"
          />
          <h1 style="font: 30px prompt, sans-serif">บัญชี</h1>
          <P class="" style="font: 16px prompt, sans-serif; color: #6f7678"
            >ติดตามหรือสามารถแก้ไขข้อมูลของ Tool life records</P
          >
        
      </div>
      <div class="column is-12" >
       
          <img
            src="https://cdn-icons-png.flaticon.com/512/9860/9860232.png"
            alt=""
            style="width: 4.5rem; opacity: 0.3"
          />
          <h1 style="font: 30px prompt, sans-serif">Email</h1>
          <P class="" style="font: 16px prompt, sans-serif; color: #6f7678"
            >รับการแจ้งเตือนเมื่อ Tool Life ใกล้ถึง limit</P
          >
       
      </div>
      
    </div>
  </center>
 
  </div>
</template>

<script>
export default {
  methods: {
    submitForm1() {
      this.$router.push({ name: "home" });
    },
    submitForm2() {
      this.$router.push({ name: "regisline" });
    },
    submitForm3() {
      this.$router.push({ name: "getline" });
    },
  }
};
</script>

<style></style>

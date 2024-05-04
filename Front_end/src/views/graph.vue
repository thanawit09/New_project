<template>
  <div class="columns">
    <div class="column" style="background: rgba(2, 0, 36, 1)">
      <center>
        <h1 style="font-family: Tahoma; color: white" class="title is-1">
          Graph
        </h1>
        <hr />
      </center>
      <div class="navbar-menu">
        <div class="navbar-start">
          <span style="font-size: 15px; color: white; margin-left: 30px">
            Date from :</span
          >&nbsp;

          <input
            style="height: 26px"
            type="date"
            name="dateofbirth"
            id="dateofbirth"
            v-model="datefrom"
          />
        </div>
        <div class="navbar-start">
          <span style="font-size: 15px; color: white"> Date to :</span>&nbsp;
          <input
            style="height: 26px"
            type="date"
            name="dateofbirth"
            id="dateofbirth"
            v-model="dateto"
          />
        </div>

        <br />
        <div class="navbar-start">
          <span style="font-size: 15px; color: white"> Product :</span>&nbsp;
          <select
            @click="onloadhaha"
            v-model="productname"
            class="select"
            style="width: 7rem; height: 25px"
          >
            <option
              v-for="productname1 in list_product"
              :key="productname1._id"
            >
              {{ productname1.product_name }}
              <div :value="productname1" v-if="productname1 != null"></div>
            </option>
          </select>
        </div>
        <div class="navbar-start">
          <span style="font-size: 15px; font-family: Tahoma; color: white">
            Line :</span
          >&nbsp;
          <select
            @click="onloadname"
            v-model="linename"
            class="select"
            style="width: 7rem; height: 25px"
          >
            <option v-for="linename in list_line" :key="linename._id">
              {{ linename.name }}
              <div :value="linename" v-if="linename != null"></div>
            </option>
          </select>
        </div>
        <div class="navbar-start">
          <span style="font-size: 15px; font-family: Tahoma; color: white">
            Tool name :</span
          >&nbsp;
          <select
            @click="limit"
            @change="onChange()"
            v-model="toolname"
            class="select"
            style="width: 7rem; height: 25px"
          >
            <option v-for="toolname1 in list_toolname" :key="toolname1.name">
              {{ toolname1.name }}
              <div :value="toolname1.name" v-if="toolname1 != null"></div>
            </option>
          </select>
        </div>
        <div class="navbar-start">
          <span style="font-size: 15px; font-family: Tahoma; color: white">
            Shift :</span
          >&nbsp;
          <!-- <select
            v-model="shift"
            class="select"
            @change="onChange()"
            style="width: 5rem; height: 25px"
          >
            <option value="Day">Day</option>
            <option value="Night">Night</option>
          </select> -->
        </div>

        <div class="navbar-start">
          <button 
            class="button is-small"
            @click="search"
            style="font-family: Tahoma;width: 5rem;height: 1.5rem;"
          >
            submit
          </button>
        </div>
      </div>
      <br />
      <div class="cssbox">
        <div class="column">
          <LineChartGenerator
            v-if="true"
            :chart-options="options"
            :chart-data="data"
            :width="500"
          />
        </div>
      </div>
      <hr />
      <center>
        <label for="" class="title" style="font-family: Tahoma; color: white">
          First short</label
        >
      </center>
      <br />
      <center>
        <span style="font-size: 15px; color: white"> Product :</span>&nbsp;
        <select
          @click="line_first"
          v-model="v_product_name"
          class="select"
          style="width: 7rem"
        >
          <option
            v-for="productname2 in first_prodrct_name"
            :key="productname2._id"
          >
            {{ productname2.product_name }}
            <div :value="productname2" v-if="productname2 != null"></div>
          </option>
        </select>

        <span style="font-size: 15px; font-family: Tahoma; color: white">
          Line :</span
        >&nbsp;
        <select v-model="v_line_name" class="select" style="width: 7rem">
          <option
            v-for="linenameinfo2 in first_line_name"
            :key="linenameinfo2._id"
          >
            {{ linenameinfo2.name }}
            <div :value="linenameinfo2" v-if="linenameinfo2 != null"></div>
          </option>
        </select>
        <span style="font-size: 15px; font-family: Tahoma; color: white">
          Shift :</span
        >&nbsp;
        <select v-model="v_shift_name" class="select" style="width: 6rem">
          <option value="Day">Day</option>
          <option value="Night">Night</option></select
        >&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          class="button is-small"
          style="height: 32px; font-size: 15px"
          @click="shift_select"
        >
          Submit
        </button>
      </center>
      <br />
      <table class="table is-fullwidth is-bordered">
        <tr>
          <th>Tool name</th>

          <th>Value</th>
          <th>Date first short</th>
        </tr>

        <tbody>
          <tr v-for="sae in first_info" :key="sae.id">
            <th :value="sae.name">
              {{ sae.name }}
            </th>
            <th :value="sae.create_time">
              {{ sae.value }}
            </th>
            <th :value="sae.create_time">
              {{ sae.create_time }}
            </th>
          </tr>
        </tbody>
      </table>
      <hr />
      <center>
        <label for="" class="title" style="font-family: Tahoma; color: white">
          Information </label
        ><span style="color: red; font-family: Tahoma; color: white">
          (last 5 days)
        </span>
      </center>
      <br />
      <div>
        <center>
          <span style="font-size: 15px; color: white"> Product :</span>&nbsp;
          <select
            @click="onloadhahainfo"
            v-model="productnameinfo"
            class="select"
            style="width: 7rem"
          >
            <option
              v-for="productname1 in list_productinfo"
              :key="productname1._id"
            >
              {{ productname1.product_name }}
              <div :value="productname1" v-if="productname1 != null"></div>
            </option>
          </select>

          <span style="font-size: 15px; font-family: Tahoma; color: white">
            Line :</span
          >&nbsp;
          <select
            @click="onloadtool"
            v-model="linenameinfo"
            class="select"
            style="width: 7rem"
          >
            <option
              v-for="linenameinfo in list_lineinfo"
              :key="linenameinfo._id"
            >
              {{ linenameinfo.name }}
              <div :value="linenameinfo" v-if="linenameinfo != null"></div>
            </option>
          </select>
          <span style="font-size: 15px; font-family: Tahoma; color: white">
            Shift :</span
          >&nbsp;
          <select
            @click="onloadtool1"
            v-model="shift1"
            class="select"
            style="width: 6rem"
          >
            <option value="Day">Day</option>
            <option value="Night">Night</option>
          </select>
        </center>
        <br />
        <table class="table is-fullwidth is-bordered">
          <tr>
            <th>Tool name</th>
            <th>Tool life per day</th>
            <th>Limit</th>
            <th>Date</th>
          </tr>

          <tbody>
            <tr v-for="sa in save2" :key="sa.id">
              <th :value="sa.name">
                {{ sa.name }}
              </th>
              <th v-if="shift1 == 'Night'">
                <span v-for="(s, index) in sa.Night.key3" :key="s.id"
                  >{{ s }}
                  <span v-if="index !== sa.Night.key3.length - 1"
                    >,
                  </span></span
                >
              </th>
              <th v-if="shift1 == 'Day'">
                <span v-for="(w, index) in sa.Day.key3" :key="w.id"
                  >{{ w }}
                  <span v-if="index !== sa.Day.key3.length - 1">, </span></span
                >
              </th>
              <th>
                <progress
                  class="progress"
                  :class="[
                    sa.all_tool_life > (sa.limit * 90) / 100
                      ? { 'is-danger': true }
                      : sa.all_tool_life > (sa.limit * 50) / 100
                      ? { 'is-warning': true }
                      : { 'is-primary': true },
                  ]"
                  :value="sa.all_tool_life"
                  :max="sa.limit"
                ></progress>
              </th>
              <th v-if="shift1 == 'Day'">
                <span v-for="(sdt, index) in sa.Day.timemock" :key="sdt.id"
                  >{{ sdt }}
                  <span v-if="index !== sa.Day.timemock.length - 1"
                    >,
                  </span></span
                >
              </th>
              <th v-if="shift1 == 'Night'">
                <span v-for="(snt, index) in sa.Night.timemock" :key="snt.id"
                  >{{ snt }}
                  <span v-if="index !== sa.Night.timemock.length - 1"
                    >,
                  </span></span
                >
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { Line as LineChartGenerator } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  BarElement,
} from "chart.js";
import axios from "axios";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  BarElement
);
export default {
  components: { LineChartGenerator },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      datefrom: Date,
      dateto: Date,
      shift: "",
      productname: "",
      productnameinfo: "",
      linename: "",
      linenameinfo: "",
      list_product: [],
      list_toolname: [],
      list_productinfo: [],
      list_line: [],
      list_lineinfo: [],
      toolname: "",
      saveline: [],
      save2: [],
      first_info: [],
      shift1: "",
      showday: [],
      showNight: [],
      keeptime: [],
      limitname: [],
      first_prodrct_name: [],
      v_product_name: "",
      first_line_name: [],
      v_line_name: "",
      v_shift_name: "",
      first_value_name: [],
      first_create_time: [],
      first_tool_name: [],
      data: {
        labels: [],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "green",
            data: [],
          },
          {
            backgroundColor: "#f87979",
            type: "line",
            label: "Limit",
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {
    onChange() {
      this.data.labels = [];
      this.data.datasets[0].data = [];
    },
    search() {
      console.log(this.shift);
      console.log(this.datefrom);
      console.log(this.dateto);
      console.log(this.linename);
      axios
        .get(
          "http://localhost:3000/getlinemasterfrondate/" +
            // this.shift +
            // "/" 
            
            this.datefrom +
            "/" +
            this.dateto +
            "/" +
            this.toolname +
            "/" +
            this.linename
        )
        .then((response) => {
          console.log(response.data);
          for (let i = 0; i < response.data.length; i++) {
            this.data.labels.push(response.data[i].create_time);
            this.data.datasets[0].data.push(
              parseInt(response.data[i].value)
            );
            this.data.datasets[1].data.push(parseInt(this.limitname));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onloadhaha() {
      axios
        .get("http://localhost:3000/getgraphproduct/" + this.productname)
        .then((response) => {
          this.list_line = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    limit() {
      axios
        .get(
          "http://localhost:3000/getgraphlimit/" +
            this.toolname +
            "/" +
            this.linename
        )
        .then((response) => {
          this.limitname = parseInt(response.data);
          console.log(this.limitname);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //****************************************************************** */
    line_first() {
      axios
        .get("http://localhost:3000/first_line/" + this.v_product_name)
        .then((response) => {
          this.first_line_name = response.data;

          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    product_first() {
      axios
        .get("http://localhost:3000/first_product/")
        .then((response) => {
          this.first_prodrct_name = response.data;

          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    shift_select() {
      axios
        .get(
          "http://localhost:3000/select_shift/" +
            this.v_line_name 
           
        )
        .then((response) => {
          this.first_info = response.data;

          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //********************************************************************** */
    onloadhahainfo() {
      axios
        .get(
          "http://localhost:3000/getgraphproductinfo/" + this.productnameinfo
        )
        .then((response) => {
          this.list_lineinfo = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onload() {
      axios
        .get("http://localhost:3000/selectallproduct/")
        .then((response) => {
          this.list_product = response.data;
          this.list_productinfo = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onloadtool1() {
      //shift
      var test = 0;
      if (this.shift1 == "Day") {
        for (let i = 0; i < this.save2.length; i++) {
          if (this.save2[i].Day.tool_life_per_day.length >= 5) {
            test = 6;
          } else {
            test = this.save2[i].Day.tool_life_per_day.length + 1;
          }
          if (this.save2[i].Day.tool_life_per_day.length > 0) {
            for (let a = 1; a < test; a++) {
              this.keeptime.push(
                this.save2[i].Day.tool_life_per_day[
                  this.save2[i].Day.tool_life_per_day.length - a
                ].create_time
              );
              this.showday.push(
                this.save2[i].Day.tool_life_per_day[
                  this.save2[i].Day.tool_life_per_day.length - a
                ].value
              );
            }
          }
          this.save2[i].Day["timemock"] = this.keeptime;
          this.save2[i].Day["key3"] = this.showday;
          this.showday = [];
          this.keeptime = [];
        }
        console.log(this.save2);
        console.log(this.shift1);
      }
      if (this.shift1 == "Night") {
        for (let i = 0; i < this.save2.length; i++) {
          if (this.save2[i].Night.tool_life_per_day.length >= 5) {
            test = 6;
          } else {
            test = this.save2[i].Night.tool_life_per_day.length + 1;
          }
          if (this.save2[i].Night.tool_life_per_day.length > 0) {
            for (let a = 1; a < test; a++) {
              this.keeptime.push(
                this.save2[i].Night.tool_life_per_day[
                  this.save2[i].Night.tool_life_per_day.length - a
                ].create_time
              );
              this.showday.push(
                this.save2[i].Night.tool_life_per_day[
                  this.save2[i].Night.tool_life_per_day.length - a
                ].value
              );
            }
          }
          this.save2[i].Night["timemock"] = this.keeptime;
          this.save2[i].Night["key3"] = this.showday;
          this.showday = [];
          this.keeptime = [];
        }
        console.log(this.save2);
        console.log(this.shift1);
      }
    },
    onloadname() {
      axios
        .get("http://localhost:3000/getgraphname/" + this.linename)
        .then((response) => {
          this.list_toolname = response.data[0].line_tool;
          console.log(response.data[0].line_tool);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onloadtool() {
      //Line
      axios
        .get("http://localhost:3000/shiftgraph/" + this.linenameinfo)
        .then((response) => {
          this.save2 = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.onload();
    this.product_first();
  },
};
</script>
<style scoped>
.cssbox {
  border: 0px solid #000000;
  box-shadow: 1px 1px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 15px;
  background: white;
}
</style>

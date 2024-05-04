
const express = require("express");
const lineMaster = require('../models/lineModel.js')
const graphMaster = require('../models/graphModel.js')
const productMaster = require('../models/productModel.js')
const userMaster = require('../models/userModel.js')
const unitMaster = require('../models/unitModel.js')
const nodemailer = require('nodemailer');

router = express.Router();

router.post('/editline_tool', async (req, res) => {
  var data = req.body
  const filter_line_name = { line_name: data.line_name };
  var linedetail = await lineMaster.find(filter_line_name)
  var line_tool_detail
  let time1 = '07:30';
  let time2 = '19:30';
  let time3 = '19:31';
  let time4 = '07:29';
  var checktime = '';
  const dates = new Date();
  if (dates.toLocaleTimeString('it-IT') >= time1 && dates.toLocaleTimeString('it-IT') <= time2) {
    line_tool_detail = linedetail[0].line_tool.find(x => x.id === data.id_per_tool).Day
    checktime = "Day"
  } else {
    line_tool_detail = linedetail[0].line_tool.find(x => x.id === data.id_per_tool).Night
    checktime = "Night"
  }
  if (line_tool_detail.tool_life_per_day.length === 0) {
    var forinser = new Date()
    var datezone = forinser.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    line_tool_detail.tool_life_per_day.push({ "create_time": datezone, "value": data.tool_life_per_day, "value_insert": 0, "first_short": { "value": data.tool_life_per_day, "create_time": datezone } })
    for (let i = 0; i < linedetail[0].line_tool.length; i++) {
      if (linedetail[0].line_tool[i].id == data.id_per_tool) {
        linedetail[0].line_tool[i].all_tool_life = data.tool_life_per_day
      }
    }
    let doc = await lineMaster.findOneAndUpdate(filter_line_name, linedetail[0], {
      returnOriginal: false
    });
    res.send(doc)
  }
  else {
    var date = line_tool_detail.tool_life_per_day[line_tool_detail.tool_life_per_day.length - 1].create_time
    var nowdate = new Date()
    var dateconverst = nowdate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    const testdate = new Date();
    const testadate1 = '07:30'
    if (checktime == "Night") {
      if (Date.parse(date) != Date.parse(dateconverst)) {
        if (line_tool_detail.tool_life_per_day[line_tool_detail.tool_life_per_day.length - 1].value == 0) {
          line_tool_detail.tool_life_per_day.push({ "create_time": dateconverst, "value": data.tool_life_per_day, "value_insert": 0, "first_short": { "value": data.tool_life_per_day, "create_time": dateconverst } })
          for (let i = 0; i < linedetail[0].line_tool.length; i++) {
            if (linedetail[0].line_tool[i].id == data.id_per_tool) {
              linedetail[0].line_tool[i].all_tool_life = data.tool_life_per_day
            }

          }
        }else{

        line_tool_detail.tool_life_per_day.push({ "create_time": dateconverst, "value": data.tool_life_per_day, "value_insert": 0, "first_short": { "value": "", "create_time": "" } })
        for (let i = 0; i < linedetail[0].line_tool.length; i++) {
          if (linedetail[0].line_tool[i].id == data.id_per_tool) {
            linedetail[0].line_tool[i].all_tool_life = data.tool_life_per_day
          }
        }}
        let doc = await lineMaster.findOneAndUpdate(filter_line_name, linedetail[0], {
          returnOriginal: false
        });
        res.send(doc)
      
      } else {
        if (line_tool_detail.tool_life_per_day[line_tool_detail.tool_life_per_day.length - 1].value == 0) {
          console.log("aw")
          line_tool_detail.tool_life_per_day[line_tool_detail.tool_life_per_day.length - 1].first_short.value = data.tool_life_per_day
          line_tool_detail.tool_life_per_day[line_tool_detail.tool_life_per_day.length - 1].first_short.create_time = dateconverst
          for (let i = 0; i < linedetail[0].line_tool.length; i++) {
            if (linedetail[0].line_tool[i].id == data.id_per_tool) {
              linedetail[0].line_tool[i].all_tool_life = data.tool_life_per_day
              line_tool_detail.tool_life_per_day[line_tool_detail.tool_life_per_day.length - 1].value = data.tool_life_per_day
            }
          }
          
        } else {
          for (let i = 0; i < linedetail[0].line_tool.length; i++) {
            if (linedetail[0].line_tool[i].id == data.id_per_tool) {
              linedetail[0].line_tool[i].all_tool_life = data.tool_life_per_day
              line_tool_detail.tool_life_per_day[line_tool_detail.tool_life_per_day.length - 1].value = data.tool_life_per_day
            }
          }
        }

        let doc = await lineMaster.findOneAndUpdate(filter_line_name, linedetail[0], {
          returnOriginal: false
        });
        res.send(doc)
      }
    }

    else if (checktime == "Day") {
      console.log("1")
      if (Date.parse(date) != Date.parse(dateconverst)) {
        console.log("2")
        if (line_tool_detail.tool_life_per_day[line_tool_detail.tool_life_per_day.length - 1].value == 0) {
          console.log("3")
          line_tool_detail.tool_life_per_day.push({ "create_time": dateconverst, "value": data.tool_life_per_day, "value_insert": 0, "first_short": { "value": data.tool_life_per_day, "create_time": dateconverst } })
          for (let i = 0; i < linedetail[0].line_tool.length; i++) {
            if (linedetail[0].line_tool[i].id == data.id_per_tool) {
              linedetail[0].line_tool[i].all_tool_life = data.tool_life_per_day
            }

          }
        }else{

        line_tool_detail.tool_life_per_day.push({ "create_time": dateconverst, "value": data.tool_life_per_day, "value_insert": 0, "first_short": { "value": "", "create_time": "" } })
        for (let i = 0; i < linedetail[0].line_tool.length; i++) {
          if (linedetail[0].line_tool[i].id == data.id_per_tool) {
            linedetail[0].line_tool[i].all_tool_life = data.tool_life_per_day
          }
        }}
        let doc = await lineMaster.findOneAndUpdate(filter_line_name, linedetail[0], {
          returnOriginal: false
        });
        res.send(doc)
      }
      else {
        if (line_tool_detail.tool_life_per_day[line_tool_detail.tool_life_per_day.length - 1].value == 0) {
          console.log("aw")
          line_tool_detail.tool_life_per_day[line_tool_detail.tool_life_per_day.length - 1].first_short.value = data.tool_life_per_day
          line_tool_detail.tool_life_per_day[line_tool_detail.tool_life_per_day.length - 1].first_short.create_time = dateconverst
          for (let i = 0; i < linedetail[0].line_tool.length; i++) {
            if (linedetail[0].line_tool[i].id == data.id_per_tool) {
              linedetail[0].line_tool[i].all_tool_life = data.tool_life_per_day
              line_tool_detail.tool_life_per_day[line_tool_detail.tool_life_per_day.length - 1].value = data.tool_life_per_day
            }
          }

        } else {
          for (let i = 0; i < linedetail[0].line_tool.length; i++) {
            if (linedetail[0].line_tool[i].id == data.id_per_tool) {
              linedetail[0].line_tool[i].all_tool_life = data.tool_life_per_day
              line_tool_detail.tool_life_per_day[line_tool_detail.tool_life_per_day.length - 1].value = data.tool_life_per_day
            }
          }
        }
        let doc1 = await lineMaster.findOneAndUpdate(filter_line_name, linedetail[0], {
          returnOriginal: false
        });
        res.send(doc1)
      }
    }
  }

  const findtoolname2 = linedetail[0].line_tool.find(x => x.id == data.id_per_tool)
  if (findtoolname2.all_tool_life > (findtoolname2.limit * 70) / 100) {
    var { email } = req.body;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'thanawitnuangratsamee@gmail.com',
        pass: 'oneadixctiqjyeav'
      }
    });
    const mailOptions = {
      from: email,
      to: [findtoolname2.email],
      subject: 'Tool life record',
      html: linedetail[0].line_name + " / " + findtoolname2.name
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })
  }

});
router.post('/password', async (req, res) => {
  const data = req.body
  const filter_user_name = { username: data.username };
  const pass = await userMaster.find(filter_user_name)
  const findemailname = pass.find(x => x.email == data.email)
  if (findemailname) {
    var { email } = req.body;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'thanawitnuangratsamee@gmail.com',
        pass: 'oneadixctiqjyeav'
      }
    });
    const mailOptions = {
      from: email,
      to: [data.email],
      subject: 'Tool life record your password',
      html: "Your password  is " + findemailname.password
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })
    res.json("Check your email")
  } else {
    console.log("not mail")
    res.json("invalid")
    return
  }
});
router.post('/inputproduct', async (req, res) => {
  const data = req.body
  const product1 = await productMaster.find()
  for (let i = 0; i < product1.length; i++) {
    if (product1[i].product_name == data.product_name) {
      res.json("product name in alrady exits")
      return
    }
  }
  const product = new productMaster(data)
  await product.save()


  res.json("insert success")
});
router.post('/inputline', async (req, res) => {
  const data = req.body
  const line1 = await lineMaster.find()
  for (let i = 0; i < line1.length; i++) {
    if (line1[i].line_name == data.line_name) {
      res.json("line name in alrady exits")
      return
    }
  }
  const line = new lineMaster(data)
  await line.save()
  res.json("insert success")
});
router.post('/resetlimit', async (req, res) => {
  const data = req.body
  const filter_line_name = { line_name: data.line_name };
  const line1 = await lineMaster.find(filter_line_name)
  const findtoolname = line1[0].line_tool.find(x => x.name == data.name)
  const dates = new Date();
  var dateconverst = dates.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  if (findtoolname.name == data.name) {
    findtoolname.all_tool_life = 0
    if (findtoolname.Day.tool_life_per_day.length != 0 && findtoolname.Night.tool_life_per_day.length != 0) {
      console.log(findtoolname.Night.tool_life_per_day.length != 0);
      console.log("duo")
      findtoolname.Night.tool_life_per_day[findtoolname.Night.tool_life_per_day.length - 1].value = 0
      findtoolname.Night.tool_life_per_day[findtoolname.Night.tool_life_per_day.length - 1].fname = data.lname
      findtoolname.Night.tool_life_per_day[findtoolname.Night.tool_life_per_day.length - 1].lname = data.fname
      findtoolname.Night.tool_life_per_day[findtoolname.Night.tool_life_per_day.length - 1].date_reset = dateconverst
      findtoolname.Day.tool_life_per_day[findtoolname.Day.tool_life_per_day.length - 1].value = 0
      findtoolname.Day.tool_life_per_day[findtoolname.Day.tool_life_per_day.length - 1].fname = data.lname
      findtoolname.Day.tool_life_per_day[findtoolname.Day.tool_life_per_day.length - 1].lname = data.fname
      findtoolname.Day.tool_life_per_day[findtoolname.Day.tool_life_per_day.length - 1].date_reset = dateconverst
      findtoolname.all_tool_life = 0
      var { email } = req.body;
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'thanawitnuangratsamee@gmail.com',
          pass: 'oneadixctiqjyeav'
        }
      });
      const mailOptions = {
        from: email,
        to: [findtoolname.email],
        subject: 'Tool life record',
        html: findtoolname.Day.tool_life_per_day[findtoolname.Day.tool_life_per_day.length - 1].fname + " / " + findtoolname.Day.tool_life_per_day[findtoolname.Day.tool_life_per_day.length - 1].lname + " / " + "Date reset :" + findtoolname.Day.tool_life_per_day[findtoolname.Day.tool_life_per_day.length - 1].date_reset
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })
    }
    if (findtoolname.Night.tool_life_per_day.length == 0) {
      console.log("night")
      console.log(findtoolname)
      findtoolname.Day.tool_life_per_day[findtoolname.Day.tool_life_per_day.length - 1].fname = data.lname
      findtoolname.Day.tool_life_per_day[findtoolname.Day.tool_life_per_day.length - 1].lname = data.fname
      findtoolname.Day.tool_life_per_day[findtoolname.Day.tool_life_per_day.length - 1].date_reset = dateconverst
      findtoolname.Day.tool_life_per_day[findtoolname.Day.tool_life_per_day.length - 1].value = 0
      findtoolname.all_tool_life = 0
      // var { email } = req.body;
      // const transporter = nodemailer.createTransport({
      //   service: 'gmail',
      //   auth: {
      //     user: 'thanawitnuangratsamee@gmail.com',
      //     pass: 'oneadixctiqjyeav'
      //   }
      // });
      // const mailOptions = {
      //   from: email,
      //   to: [findtoolname.email],
      //   subject: 'Tool life record',
      //   html:  findtoolname.Day.tool_life_per_day[findtoolname.Day.tool_life_per_day.length - 1].fname  + " / " + findtoolname.Day.tool_life_per_day[findtoolname.Day.tool_life_per_day.length - 1].lname  + " / "  + "Date reset :" +  findtoolname.Day.tool_life_per_day[findtoolname.Day.tool_life_per_day.length - 1].date_reset 
      // };
      // transporter.sendMail(mailOptions, function (error, info) {
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log('Email sent: ' + info.response);
      //   }
      // })
    }
    if (findtoolname.Day.tool_life_per_day.length == 0) {
      console.log("day")
      findtoolname.Night.tool_life_per_day[findtoolname.Night.tool_life_per_day.length - 1].fname = data.lname
      findtoolname.Night.tool_life_per_day[findtoolname.Night.tool_life_per_day.length - 1].lname = data.fname
      findtoolname.Night.tool_life_per_day[findtoolname.Night.tool_life_per_day.length - 1].date_reset = dateconverst
      findtoolname.Night.tool_life_per_day[findtoolname.Night.tool_life_per_day.length - 1].value = 0
      findtoolname.all_tool_life = 0
      var { email } = req.body;
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'thanawitnuangratsamee@gmail.com',
          pass: 'oneadixctiqjyeav'
        }
      });
      const mailOptions = {
        from: email,
        to: [findtoolname.email],
        subject: 'Tool life record(Reset Limit)',
        html: findtoolname.Night.tool_life_per_day[findtoolname.Night.tool_life_per_day.length - 1].fname + " / " + findtoolname.Night.tool_life_per_day[findtoolname.Night.tool_life_per_day.length - 1].lname + " / " + "Date reset :" + findtoolname.Night.tool_life_per_day[findtoolname.Night.tool_life_per_day.length - 1].date_reset
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })
    }

  }
  let doc = await lineMaster.findOneAndUpdate(filter_line_name, line1[0], {
    returnOriginal: false
  });
  res.send(doc)
});
router.post('/getuser', async (req, res) => {
  const data = req.body
  const user = await userMaster.find({ username: data.username })
  if (user.length == 0) {
    res.send("invalid username")
    return
  }
  else if (user[0].password != data.password) {
    res.send("invalid password")
    return
  } else {
    res.json(user)
  }
});

router.post('/inputuser', async (req, res) => {
  const data = req.body
  const user1 = await userMaster.find()
  for (let i = 0; i < user1.length; i++) {
    if (user1[i].username == data.username) {
      res.json("username in alrady exits")
      return
    }
  }
  const user = new userMaster(data)
  await user.save()
  res.json("insert success")
});
router.get('/selectallproduct', async (req, res) => {
  const product = await productMaster.find()
  res.json(product)
});
router.get('/selectallline', async (req, res) => {
  const line = await lineMaster.find()
  res.json(line)
});
router.get('/showLine', async (req, res) => {
  const user = await test2.find({});
  res.send(user)
})
router.post('/informationmachine', async (req, res) => {
  const data = req.body
  const hellowMachine = new test3(data)
  await hellowMachine.save()
  res.json(hellowMachine)
})
router.post('/sumproduct', async (req, res) => {
  const data = req.body
  const filter_product_name = { product_name: data.product_name }
  const product = await productMaster.find({ product_name: data.product_name })
  const findname = product[0].line_name.find(x => x.name === data.line_name)
  if
    (product[0].line_name.find(x => x.name === data.line_name))

    for (let i = 0; i < product[0].line_name.length; i++) {
      if (product[0].line_name[i].name == data.line_name) {
        res.json("linename is alrady")
        console.log("aa")
        return

      }
    } else {
    product[0].line_name.push({ "name": data.line_name })
    let doc = await productMaster.findOneAndUpdate(filter_product_name, product[0], {

      returnOriginal: false
    });
    console.log("sumif")
    res.json("success")
  }
});

router.get('/getlinemasterfrondate/:datefrom/:dateto/:toolname/:linename', async (req, res) => {
  const { datefrom } = req.params
  const { dateto } = req.params
  const { linename } = req.params
  const { toolname } = req.params
  var dataday = []
  var datanight = []
  const linedetail = await lineMaster.find({ line_name: linename })
  const findtoolname = linedetail[0].line_tool.find(x => x.name === toolname)

  // get data of day
  for (let i = 0; i < findtoolname.Day.tool_life_per_day.length; i++) {
    if (Date.parse(findtoolname.Day.tool_life_per_day[i].create_time) >= Date.parse(datefrom) && Date.parse(findtoolname.Day.tool_life_per_day[i].create_time) <= Date.parse(dateto)) {
      dataday.push(findtoolname.Day.tool_life_per_day[i])
    }
  }


  // get data of night
  for (let i = 0; i < findtoolname.Night.tool_life_per_day.length; i++) {
    if (Date.parse(datefrom) <= Date.parse(findtoolname.Night.tool_life_per_day[i].create_time) && Date.parse(findtoolname.Night.tool_life_per_day[i].create_time) <= Date.parse(dateto)) {
      datanight.push(findtoolname.Night.tool_life_per_day[i])
    }
  }

  // compare day and night
  let arrayunique = [];
  let check = true;
  for (let i = 0; i < datanight.length; i++) {
    for (let y = 0; y < dataday.length; y++) {
      if (Date.parse(dataday[y].create_time) == Date.parse(datanight[i].create_time)) {
        check = false
        if (parseInt(dataday[y].value) < parseInt(datanight[i].value)) {
          arrayunique.push({ "value": datanight[i].value, "create_time": datanight[i].create_time })
        } else {
          arrayunique.push({ "value": dataday[y].value, "create_time": datanight[i].create_time })
        }
        dataday.splice(y, 1)
      }
    }
    if (check) {
      arrayunique.push(datanight[i])
      check = false
    }
  }
  for (let i = 0; i < dataday.length; i++) {
    arrayunique.push(dataday[i])
  }

  function compare(a, b) {
    if (Date.parse(a.create_time) < Date.parse(b.create_time)) {
      return -1;
    }
    if (Date.parse(a.create_time) > Date.parse(b.create_time)) {
      return 1;
    }
    return 0;
  }

  arrayunique.sort(compare);

  console.log(arrayunique)

  res.send(arrayunique)
})
router.get('/getlinemasterfrondate2/:shift/:datefrom/:dateto/:linename', async (req, res) => {
  const { shift } = req.params
  const { datefrom } = req.params
  const { dateto } = req.params
  const { linename } = req.params
  var dateforsend = []
  const linedetail = await lineMaster.find({ line_name: linename })

  if (shift == 'Day') {
    for (let i = 0; i < linedetail[0].line_tool.length; i++) {
      console.log(linedetail[0].line_tool.length)
      if (Date.parse(datefrom) <= Date.parse(linedetail[0].line_tool[i].Day.tool_life_per_day[i].create_time) && Date.parse(linedetail[0].line_tool[i].Day.tool_life_per_day[i].create_time) <= Date.parse(dateto)) {
        dateforsend.push(linedetail[0].line_tool[i].Day.tool_life_per_day)
        console.log(dateforsend)

      }
    }
  }
  else {
    console.log(linedetail[0].line_tool[0].Night.tool_life_per_day)
    for (let i = 0; i < findtoolname.Night.tool_life_per_day.length; i++) {
      if (Date.parse(datefrom) < Date.parse(findtoolname.Night.tool_life_per_day[i].create_time) && Date.parse(findtoolname.Night.tool_life_per_day[i].create_time) <= Date.parse(dateto)) {
        dateforsend.push(findtoolname.Night.tool_life_per_day[i])
      }
      console.log(Date.parse(findtoolname.Night.tool_life_per_day[i].create_time))
    }
  }
  res.send(dateforsend)
})
router.get('/shift/:shift1/:linename', async (req, res) => {
  const { shift1 } = req.params
  const { linename } = req.params
  var response = []
  const line = await lineMaster.find({ line_name: linename })
  if (shift1 == 'Day') {
    for (let i = 0; i < line[0].line_tool.length; i++) {
      if (line[0].line_tool[i].Day.tool_life_per_day.length == 0) {
        response.push({ "value": null, "name": line[0].line_tool[i].name })
      } else {
        response.push({ "value": line[0].line_tool[i].Day.tool_life_per_day[line[0].line_tool[i].Day.tool_life_per_day.length - 1].value, "name": line[0].line_tool[i].name })
      }

    }
    res.send(response)
  } else if (shift1 == 'Night') {
    for (let i = 0; i < line[0].line_tool.length; i++) {
      if (line[0].line_tool[i].Night.tool_life_per_day.length == 0) {
        response.push({ "value": null, "name": line[0].line_tool[i].name })
      }
      else {
        response.push({ "value": line[0].line_tool[i].Night.tool_life_per_day[line[0].line_tool[i].Night.tool_life_per_day.length - 1].value, "name": line[0].line_tool[i].name })
      }

    }
    res.send(response)
  }
})
router.post('/regisline', async (req, res) => {
  const data = req.body
  const filter_line_name = { line_name: data.line_name }
  const linename = await lineMaster.find({ line_name: data.line_name })
  const findline = linename[0].line_tool.find(x => x.name === data.name)
  if (linename[0].line_tool.find(x => x.name === data.name)) {
    for (let i = 0; i < linename[0].line_tool.length; i++) {
      if (linename[0].line_tool[i].name == data.name) {
        findline.limit = data.limit
        findline.unit = data.unit
        linename[0].line_tool[i].limit = data.limit
        linename[0].line_tool[i].unit = data.unit
        if (data.check_email == true) {
          linename[0].line_tool[i].email.push(data.email)
        }
      }
    }
    if (findline != 0) {
      let doc = await lineMaster.findOneAndUpdate(filter_line_name, linename[0], {
        returnOriginal: false
      });
      res.json("update information success")
      return
    }
  } else {
    const date = new Date();
    linename[0].line_tool.push({ "name": data.name, "limit": data.limit, "unit": data.unit, "Day": { "tool_life_per_day": [] }, "Night": { "tool_life_per_day": [] }, "id": Math.floor((Math.random() * 1000000) + 1).toString() + date.getDate().toString() + (date.getMonth() + 1).toString() + date.getFullYear().toString() + date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString(), "all_tool_life": 0, "email": [data.email] })
    let doc = await lineMaster.findOneAndUpdate(filter_line_name, linename[0], {
      returnOriginal: false
    });
    res.json("insert success")
  }
});
router.post('/unit', async (req, res) => {
  const data = req.body
  const unit_master = new unitMaster(data)
  await unit_master.save()
  res.json(unit_master)
})
//********* */
router.post('/mail_edit_for_regis', async (req, res) => {
  const data = req.body
  const filter_line_mail = { line_name: data.line_name }
  const new_mail = await lineMaster.find(filter_line_mail)
  const findename = new_mail[0].line_tool.find(x => x.name === data.name)
  for (let i = 0; i < findename.email.length; i++) {
    if (findename.email[i] === data.email) {
      findename.email[i] = data.email1
    }
    let doc = await lineMaster.findOneAndUpdate(filter_line_mail, new_mail[0], {
      returnOriginal: false
    });
  }
  res.json("Change success")
});
/******** */
// router.post('/save_email_for_tool', async (req, res) => {
//   const data = req.body
//   const filter_line_mail = { line_name: data.line_name }
//   const tool_mail = await lineMaster.find(filter_line_mail)
//   const findename = tool_mail[0].line_tool.find(x => x.name === data.name)
//   console.log(findename.name)
//   if(findename.name === data.name){

//   }

//   let doc = await lineMaster.findOneAndUpdate(filter_line_mail , tool_mail[0], {
//     returnOriginal: false
//   });

//   res.json("insert success")

// });
router.post('/changeproduct', async (req, res) => {
  const data = req.body
  const filter_line_name = { employee: data.employee }
  const aa = await userMaster.find(filter_line_name)
  const findemployee = aa.find(x => x.employee === data.employee)
  if (findemployee) {
    findemployee.productname = data.productname
    let doc = await userMaster.findOneAndUpdate(filter_line_name, findemployee, {
      returnOriginal: false
    })
    res.json("Change success")
  } else {
    res.json("invalid ID")
    return
  }
})
router.get('/informationmachine1/:line_name', async (req, res) => {
  const { line_name } = req.params
  const linedetail = await lineMaster.find({ line_name: line_name })

  res.send(linedetail)
})
router.get('/informationmachine2/:linename', async (req, res) => {
  const { linename } = req.params
  const linedetail = await lineMaster.find({ line_name: linename })

  res.send(linedetail[0].line_tool)
})
router.get('/shiftgraph/:test2', async (req, res) => {
  const { test2 } = req.params
  const line = await lineMaster.find({ line_name: test2 });
  res.send(line[0].line_tool)


})

router.get('/line_name/:productname', async (req, res) => {
  const { productname } = req.params
  const linenamea = await productMaster.find({ product_name: productname });
  res.send(linenamea[0].line_name)
})

router.get('/line_name2/:productname', async (req, res) => {
  const { productname } = req.params
  const linenamea = await productMaster.find({ product_name: productname });
  res.send(linenamea)
})

router.get('/getall', async (req, res) => {
  const graph_name = await productMaster.find();

  res.send(graph_name)
})
//**************************regismail **********************************************************/
router.get('/getallformail', async (req, res) => {
  const graph_name = await productMaster.find();
  res.send(graph_name)
})
router.get('/line_name_for_mail/:product_select_mail', async (req, res) => {
  const { product_select_mail } = req.params
  const linenamea = await productMaster.find({ product_name: product_select_mail });

  res.send(linenamea[0].line_name)
})
router.get('/name_name_for_mail/:line_select_mail', async (req, res) => {
  const { line_select_mail } = req.params
  const linenamea = await lineMaster.find({ line_name: line_select_mail });
  res.send(linenamea[0].line_tool)
})
router.get('/email_for_register/:name_select_mail/:line_select_mail', async (req, res) => {
  const { name_select_mail } = req.params
  const { line_select_mail } = req.params
  const linenamea = await lineMaster.find({ line_name: line_select_mail });
  var test = linenamea[0].line_tool.find(x => x.name === name_select_mail)

  res.send(test.email)
})
//****************************************************************************************************** */
router.get('/getallunit', async (req, res) => {
  const unit_list = await unitMaster.find();
  res.send(unit_list)
})
router.get('/graph_name', async (req, res) => {
  const graph_name = await graphMaster.find();
  res.send(graph_name)
})
router.get('/getspecificpart/:part_id', async (req, res) => {
  const { part_id } = req.params
  const part = await graphMaster.find({ _id: part_id })
  res.send(part)
})
router.get('/getspecificpart/:part_id', async (req, res) => {
  const { part_id } = req.params
  const part = await graphMaster.find({ _id: part_id })
  res.send(part)
})

router.get('/first_product', async (req, res) => {
  const product = await productMaster.find();
  res.send(product)
})
router.get('/first_line/:v_product_name', async (req, res) => {
  const { v_product_name } = req.params
  const find_line = await productMaster.find({ product_name: v_product_name })

  res.send(find_line[0].line_name)
})
router.get('/select_shift/:v_line_name', async (req, res) => {
  const { v_line_name } = req.params
  var responseday = []
  var responsenight = []
  const find_line = await lineMaster.find({ line_name: v_line_name })
  var arrayres = []
  var firstshort_value_day = ''
  var firstshort_value_date = ''
  var firstshort_value_night = '' 
  var firstshort_value_date_night = ''

  // get array day
  for(let i =0; i < find_line[0].line_tool.length; i++){
    for(let  y = 0; y < find_line[0].line_tool[i].Day.tool_life_per_day.length; y++){
      console.log(find_line[0].line_tool[i].Day.tool_life_per_day[y].first_short.value)
      if(find_line[0].line_tool[i].Day.tool_life_per_day[y].first_short.value != ''){
        
        firstshort_value_day = find_line[0].line_tool[i].Day.tool_life_per_day[y].first_short.value
        firstshort_value_date = find_line[0].line_tool[i].Day.tool_life_per_day[y].first_short.create_time 
      }
    }
 
      responseday.push({"value":firstshort_value_day, "create_time":firstshort_value_date , "name":find_line[0].line_tool[i].name})

  
    firstshort_value_day = ''
    firstshort_value_date = ''
  
  }


   // get array night
  for(let i =0; i < find_line[0].line_tool.length; i++){
    for(let  y = 0; y < find_line[0].line_tool[i].Night.tool_life_per_day.length; y++){
      
      if(find_line[0].line_tool[i].Night.tool_life_per_day[y].first_short.value !== ''){
        
        firstshort_value_night = find_line[0].line_tool[i].Night.tool_life_per_day[y].first_short.value
        console.log(find_line[0].line_tool[i].Night.tool_life_per_day[y].first_short.value)
        firstshort_value_date_night = find_line[0].line_tool[i].Night.tool_life_per_day[y].first_short.create_time 
      }
    }
      responsenight.push({"value":firstshort_value_night, "create_time":firstshort_value_date_night , "name":find_line[0].line_tool[i].name})


    firstshort_value_night = ''
    firstshort_value_date_night = ''
  
  }
  for(let i = 0; i < responseday.length; i++){
    for(let y = 0; y < responsenight.length; y++){
      if(responseday[i].name == responsenight[y].name){
        if(Date.parse(responseday[i].create_time) < Date.parse(responsenight[i].create_time)){
          arrayres.push(responsenight[i])
        }else{
          arrayres.push(responseday[i])
        }
      }
    }
  }

  console.log(arrayres)
  res.send(arrayres)
  // for (let i = 0; i < find_line[0].line_tool.length; i++) {
  //   for (let a = 0; a < find_line[0].line_tool[i].Day.tool_life_per_day.length; a++) {
  //     console.log(find_line[0].line_tool[i].Day.tool_life_per_day)
  //     if (find_line[0].line_tool[i].Day.tool_life_per_day[find_line[0].line_tool[i].Day.tool_life_per_day.length - 1].first_short[a] != null) {

  //       find_line[0].line_tool[i].Day.tool_life_per_day[find_line[0].line_tool[i].Day.tool_life_per_day.length - 1].first_short[a].create_time
  //       responseday.push({ "name": find_line[0].line_tool[i].name, "value": find_line[0].line_tool[i].Day.tool_life_per_day[find_line[0].line_tool[i].Day.tool_life_per_day.length - 1].first_short[a].value, "create_time": find_line[0].line_tool[i].Day.tool_life_per_day[find_line[0].line_tool[i].Day.tool_life_per_day.length - 1].first_short[a].create_time })
  //     }
  //   }
  // }
  // for (let i = 0; i < find_line[0].line_tool.length; i++) {
  //   for (let a = 0; a < find_line[0].line_tool[i].Night.tool_life_per_day.length; a++) {
  //     if (find_line[0].line_tool[i].Night.tool_life_per_day[find_line[0].line_tool[i].Night.tool_life_per_day.length - 1].first_short[a] != null) {
  //       find_line[0].line_tool[i].Night.tool_life_per_day[find_line[0].line_tool[i].Night.tool_life_per_day.length - 1].first_short[a].create_time
  //       responsenight.push({ "name": find_line[0].line_tool[i].name, "value": find_line[0].line_tool[i].Night.tool_life_per_day[find_line[0].line_tool[i].Night.tool_life_per_day.length - 1].first_short[a].value, "create_time": find_line[0].line_tool[i].Night.tool_life_per_day[find_line[0].line_tool[i].Night.tool_life_per_day.length - 1].first_short[a].create_time })
  //     }
  //   }
  // }
  // console.log(responsenight);
  // console.log(responseday)
  // res.send(response)
})
//***************************************************************** */
router.get('/getgraphproduct/:productname', async (req, res) => {
  const { productname } = req.params
  const line = await productMaster.find({ product_name: productname })
  res.send(line[0].line_name)
})
router.get('/getgraphproductinfo/:productnameinfo', async (req, res) => {
  const { productnameinfo } = req.params
  const line = await productMaster.find({ product_name: productnameinfo })

  res.send(line[0].line_name)
})
router.get('/getspecifictool/:line_id/:part_id', async (req, res) => {
  const { line_id } = req.params
  const { part_id } = req.params
  const line = await graphMaster.find({ _id: part_id })

  var test = line[0].type.find(x => x.line_name === line_id)
  res.send(test.tool)
})
router.get('/product_tool/:product_tool', async (req, res) => { //email for tool
  const { product_tool } = req.params
  const line_for_tool = await productMaster.find({ product_name: product_tool })
  res.send(line_for_tool[0].line_name)
})
router.get('/get_tool_name1/:data_line_for_tool', async (req, res) => { //tool for tool
  const { data_line_for_tool } = req.params
  const line_for_tool_name = await lineMaster.find({ line_name: data_line_for_tool })
  res.send(line_for_tool_name[0].line_tool)
})
router.get('/getgraphname/:productname/', async (req, res) => {
  const { productname } = req.params
  const line = await lineMaster.find({ line_name: productname })

  res.send(line)
})
router.get('/getgraphlimit/:toolname/:linename', async (req, res) => {
  const { linename } = req.params
  const { toolname } = req.params
  const line = await lineMaster.find({ line_name: linename })
  var test = line[0].line_tool.find(x => x.name === toolname)
  console.log(test.limit)
  res.send(test.limit)
})
router.get('/get_tube_no/:part_id/:line_id', async (req, res) => {
  const { line_id } = req.params
  const { part_id } = req.params
  const aaa = await graphMaster.find({ _id: part_id })
  console.log(aaa.type)

  var test = aaa[0].type.find(x => x.line_name === line_id)
  res.send(test.tube_no)
  console.log(test.tube_no)

})
router.get('/get_tool_life/:tool_life/:line_name', async (req, res) => {
  const { tool_life } = req.params
  const { line_name } = req.params
  const line_master = await lineMaster.find({ line_name: line_name })
  var test = line_master[0].line_tool.find(x => x.name === tool_life)
  var obj = {
    "tool_life": test.tool_life,
    "limit": test.limit
  }
  console.log(tool_life)
  console.log(this.limit)
  res.send(obj)
})
exports.router = router;
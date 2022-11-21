const { log } = require("console");
const dataBase = require("../database");
const lib = require("./lib");

// insert post  ----------------------------
async function updateInfo(req, response) {
    let name = req.body.name;

    const dataArray = [
      reporttype,
      authorUsername,
      phone,
      city,
      postid,
      pageno,
      posttitle,
      postdate,
      updatedate,
      authorid,
      tag
    ];
    let sql = `INSERT INTO  ${tableName}  (reporttype ,  authorUsername,  phone,  city,  postid,  pageno,  posttitle,  postdate,  updatedate,  authorid,tag)
   VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
    const newRow = await dataBase.myDB.execute(sql, dataArray);

    response.send(`doneInsert Recode id ${newRow[0].insertId.length}  Phone No :${req.body.newPhoneData.phone} 😀`);
    console.log("Done Insert");

    
  return
}
 
/* ------------------------------------------ */


async function showAll(req, response) {
  let sql = "SELECT * FROM haraj";
  const [mydata] = await dataBase.myDB.execute(sql);
  console.log(mydata);
  // response.status(200).send({ datasize: mydata.length, data: mydata });
  response.render("profile",{dataSize: mydata.length, data: mydata});
}

async function getInfo(req, response) {
  let sql = "SELECT * FROM genral_info";
  const [mydata] = await dataBase.myDB.execute(sql);
  console.log(mydata);
  response.send(mydata[0]);
}
const logoimage = "link"
const heroimage = "link"


async function saveNewInfo(req, response) {
  Rname= req.body.name
  Rphone= req.body.phone
  Rherotext= req.body.herotext
  Rherodeail= req.body.herodeail
  Remail= req.body.email
  Rsnapsot= req.body.snapsot
  Rwhatapp= req.body.whatapp
  Rinstgram= req.body.instgram
  Radrs= req.body.adrs
  Rlocation= req.body.location
  Rlat= req.body.lat
  Ratt= req.body.att
   let sql = `UPDATE genral_info  SET  name= ? ,phone=?, herotext=?, herodeail=?,email=?, snapsot=?, whatapp=?, instgram=?, adrs=? ,
   lat=?,
   att=? WHERE id = 1`
  const [mydata] = await dataBase.myDB.execute(sql,[Rname,Rphone,Rherotext,Rherodeail,Remail, Rsnapsot, Rwhatapp, Rinstgram, Radrs,Rlat
    ,Ratt]);
  console.log(req.body);
  // response.send(mydata[0]);
}


async function __saveNewInfo(req, response) {
  let sql = `UPDATE genral_info  SET
                                 name=?,
                                 phone=?,
                                 herotext=?,
                                 herodeail=?,
                                 email=?,
                                 snapsot=?,
                                 whatapp=?,
                                 instgram=?,
                                 adrs=?,
                                 location=?,
                                 lat=?,
                                 att=?
                                 WHERE id = 1`;
 const [mydata] = await dataBase.myDB.execute(sql,[
                                 req.body.name,
                                 req.body.phone,
                                 req.body.herotext,
                                 req.body.herodeail,
                                 req.body.email,
                                 req.body.snapsot,
                                 req.body.whatapp,
                                 req.body.instgram,
                                 req.body.adrs,
                                 req.body.location,
                                 req.body.lat,
                                 req.body.att
                                
   ]);
 console.log(req.body);
 // response.send(mydata[0]);
}
   
   
   




module.exports = {
  updateInfo,
  saveNewInfo,
  showAll,
  getInfo
};


var express = require("express");
var router = express.Router();
var aqarController  = require("../controller/aqarController");
const multer=require("multer");
const path = require("path")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public")
    },

    filename:(req,file,cb) =>{
        const fileName = `${Date.now()}_${file.originalname.replace(/\s+/g,'-')}`
        cb(null, fileName)
    }
})

const upload =multer({storage: storage}).single('logoImage')


router.post("/logoImage",upload,(req, res)=>{
    const {file} = req;
    res.send({
        file: file.originalname,
        path: file.path,
    })



}) ;

router.get("/showall" , aqarController.showAll)
/* ----------------------------------------- */
router.get("/getdata" , aqarController.getInfo)
router.post("/savenewinfo" ,upload, aqarController.saveNewInfo)

module.exports = router;
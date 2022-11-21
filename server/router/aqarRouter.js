
var express = require("express");
var router = express.Router();
var aqarController  = require("../controller/aqarController");
const multer=require("multer");
const path = require("path")

// const storage=multer.diskStorage({
//     destination:".src/image/",
//     filename:(req,file,cd) =>{
//         return canBeRendered(null,
//             `${file.fieldname_$(Date.now())}${path.extname(file.originalname)}
//         )}`)
//     }
// })

// const upload =multer({storage: storage})
// router.post("/generalinfo",upload.single("image"),aqarController.updateInfo) ;

router.get("/showall" , aqarController.showAll)
/* ----------------------------------------- */
router.get("/getdata" , aqarController.getInfo)
router.post("/savenewinfo" , aqarController.saveNewInfo)

module.exports = router;
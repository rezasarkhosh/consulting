const multer = require('multer');
const fs = require('fs');
const useruploadPath = "./public/userImage/fishvariz"
const advisoruploadPath = "./public/advisorImage/madrak"
const storage = multer.diskStorage({
    destination: function (req, file, cb) { 
        if (file.fieldname == "userrequest") {
            if (fs.existsSync(useruploadPath)) return cb(null, useruploadPath)
            else {
                fs.mkdirSync(useruploadPath);
                return cb(null, useruploadPath)
            }
        }
        if (file.fieldname == "advisorrequest") {
            if (fs.existsSync(advisoruploadPath)) return cb(null, advisoruploadPath)
            else {
                fs.mkdirSync(advisoruploadPath);
                return cb(null, advisoruploadPath)
            }
        }
        else return console.log('somthing goes wrong !!!!');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + req.user.name + "-" + file.originalname);
    },
});
const upload = multer({
    storage: storage,
})
module.exports = upload
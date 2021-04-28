const router = require('express').Router()
const Products = require('../models/products-model')
const multer = require('multer')


const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, cb) {
        cb(null, './public');
      },
      filename(req, file, cb) {
        cb(null, `${new Date().getTime()}_${file.originalname}`);
      }
    }),
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
        return cb(
          new Error(
            'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
          )
        );
      }
      cb(undefined, true); // continue with upload
    }
  });


router.get('/' ,(req,res) => {
    res.status(200).send("Add")
})

router.post('/',
    upload.single('Images'), 
    async (req,res) => {
        try {
            // console.log(req.file);
            const {Title, Desc, Properties} = req.body
            const {path, mimetype, filename} = req.file
            const data = new Products({
                Nama_Barang : Title,
                Desc,
                Properties: JSON.parse(Properties),
                Images : {
                    file_path: path,
                    file_mimetype: mimetype,
                    file_name: filename
                }
            })

            data.save((err,data) => {
                if(err) return console.log(err);
                res.status(201).json(data)
            })
            
        } catch (error) {
            res.status(501).json(error)
            console.log(error);
        }
})

module.exports = router
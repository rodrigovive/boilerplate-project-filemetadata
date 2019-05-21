const express = require('express')
const apiRouter = express.Router();
const multer = require('multer');

const upload = multer()

apiRouter.post('/api/fileanalyse',upload.single('upfile') ,async (req,res) => {
  
  const { file } = req;
  
  if(!file){
    return res.status(400).send({
      error: 'File not found'
    })
  }
  
  const {originalname,encoding, mimetype,size } = file;
  return res.status(200).send({
    name: originalname,
    type: mimetype,
    size,
  })
  
  
}, (err,req,res,next) => {
  res.status(400).send({
    error: err.toString()
  })
})

module.exports = apiRouter;
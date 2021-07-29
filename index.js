const express = require('express')
const cors = require("cors")
const app = express()
const port = 3000
const multer = require("multer")
const upload = multer({ dest: 'uploads/' })

app.use(cors({ optionsSuccessStatus: 200 }))

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/views/index.html")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/* Receives the file and show the metadata */
app.post('/api/fileanalyse',upload.single("upfile"),(req,res)=>{
    let {originalname,mimetype, size} = req.file
    res.json({
        "name":originalname,
        "type":mimetype,
        "size":size
    })
})

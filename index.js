const app = require('express')()
const cors = require('cors')
const PORT = 3000

app.use(cors())
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Hello"
    })
})

app.listen(PORT,(err)=> err ? console.log(err) : console.log(`App Start @${PORT}`))
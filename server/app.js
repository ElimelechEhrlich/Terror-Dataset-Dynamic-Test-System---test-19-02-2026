import express from "express"
import { config } from "dotenv"
import cors from "cors"
config()

const app = express()
const port = process.env.PORT
app.use(cors())
app.use(express.json())

app.get('', ()=>{})

app.listen(port,() => {
    console.log({message:`server runing on http://localhost:${port}`});
})
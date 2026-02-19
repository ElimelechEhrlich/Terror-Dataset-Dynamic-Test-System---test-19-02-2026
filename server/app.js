import express from "express"
import { config } from "dotenv"
import cors from "cors"
import { getData } from "./controllers/terrorDataC.js"
config()

const app = express()
const port = process.env.PORT
app.use(cors())
app.use(express.json())

app.get('/data', getData)

app.listen(port,() => {
    console.log({message:`server runing on http://localhost:${port}`});
})
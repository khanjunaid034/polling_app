import express from 'express'
import cors from 'cors'
import { router as pollingRouter } from './routers/pollingRouter.mjs'
const app = express()

app.use(express.json())

app.use(cors('*'))
app.use('/polls', pollingRouter)


export default app
import express from 'express'
import { router as pollingRouter } from './routers/pollingRouter.mjs'
const app = express()

app.use(express.json())

app.use('/polls', pollingRouter)


export default app
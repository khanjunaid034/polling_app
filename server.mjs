import dotenv from 'dotenv'
dotenv.config({quiet: true})
import { connectDB } from './db.mjs'
import app from './app.mjs'

// connect to the database
await connectDB()

// start the application server
app.listen(process.env.APP_PORT, (err) => {
    if(err)
        console.error(err)
    console.log('App started')
})
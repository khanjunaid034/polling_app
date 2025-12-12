import dotenv from 'dotenv'
dotenv.config({quiet: true})

import mongoose from "mongoose"

export const connectDB = async () => {
    const DBURL = process.env.DB_URL
    try {
        const response = await mongoose.connect(DBURL)
        // console.log(response.connections[0].name);
        console.log('DB Connected:', response.connections[0].name)
    } catch (error) {
        console.error('DB Connection failed', error)
    }
}
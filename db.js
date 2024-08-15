import mongoose from    'mongoose'

export const connectDB=async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connected to Mongo DB ${connection.connection.host}`);
      } catch (err) {
        console.log(`Error connecting to MongoDB ${err}`);
      }
    }

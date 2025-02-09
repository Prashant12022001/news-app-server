import mongoose from 'mongoose'

const newsSchema = mongoose.Schema({
    title:{
        "type":String,
        required:true
    },
    url:{
        "type":String,
        required:true
    },
    description:{
        "type":String,
        required:true
    },
    imageUrl:{
        "type":String,
        required:true
    },
})
const News=mongoose.model("news",newsSchema)
export default News
import News from "../models/NewsModel.js";

export const addNews= async(req,res) => {
    try{

        const {title, description, url, imageUrl} = req.body;

    if (!title) {
        return res.status(400).send({
          error: "Title is required",
        });
      }
      if (!description) {
        return res.status(400).send({
          error: "Description is required",
        });
      }
      if (!imageUrl) {
        return res.status(400).send({
          error: "image is required",
        });
      }
      if (!url) {
        return res.status(400).send({
          error: "Url is required",
        });
      }
    
const news= await new News(req.body).save()

res.status(201).send({
    message:'task added succesfully',
    newsBody: news
})
}

    catch(err){
        console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error: err,
    });
    }
}

export const viewNewsList= async (req,res)=>{
    try{
        const newsList = await News.find()
        res.send({
            message:"Success",
            newsList : newsList
        })
    }

    catch(err){
        console.log(err);
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: err,
    });
    }
}

export const multipleNews = async (req,res)=>{
    const newsList = req.body

    newsList.map(async(news)=>{
        const {title, description, url, imageUrl} = news;

    if (!title) {
        return res.status(400).send({
          error: "Title is required",
        });
      }
      if (!description) {
        return res.status(400).send({
          error: "Description is required",
        });
      }
      if (!imageUrl) {
        return res.status(400).send({
          error: "image is required",
        });
      }
      if (!url) {
        return res.status(400).send({
          error: "Url is required",
        });
      }
    
const newsItem= await new News(news).save()
    })

    res.status(201).send({
        message:'task added succesfully',
    })

}
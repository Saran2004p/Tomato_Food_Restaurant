import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://saranp:89392920@cluster0.hibum.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
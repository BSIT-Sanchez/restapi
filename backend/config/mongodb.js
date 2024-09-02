import mongoose from "mongoose";

const mongoDb = async() => {
    try{
        const connection = await mongoose.connect(process.env.MONGODB)
        console.log("database connected")

    }
    catch(error){
        console.error(error);

    }
}
export default mongoDb;
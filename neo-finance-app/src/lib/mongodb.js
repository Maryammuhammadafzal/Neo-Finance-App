import mongoose from "mongoose";

let isConnected = false;

export const  connectDB = async () => {
        if (isConnected) {
                console.log("MongoDb already Connected");
                return;
        }

        try {
                await mongoose.connect(process.env.MONGODB_URL , {
                        dbName : "neoFinance",
                        useNewUrlParser : true,
                        useUnifiedTopology : true 
                })

                isConnected = true;
                console.log("Mongodb Connected");
        } catch (error) {
                console.log(`Mongodb Connection failed ${error}`);
        }
}; 
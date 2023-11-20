import mongoose from "mongoose";

const url = process.env.MONGO_URI;

const connectDB = async () => {

    let cachedDB = null;
    if (cachedDB) {
        return cachedDB;
    } else {
        const newDB = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        cachedDB = newDB;
        return newDB;
    }
}

export default connectDB;
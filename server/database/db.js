import mongoose from 'mongoose';

const Connection = () => {
    const DB_URI = `mongodb://user:pass@ac-c2kzutd-shard-00-00.nsuihgw.mongodb.net:27017,ac-c2kzutd-shard-00-01.nsuihgw.mongodb.net:27017,ac-c2kzutd-shard-00-02.nsuihgw.mongodb.net:27017/?ssl=true&replicaSet=atlas-8l1tuk-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true }); 
        console.log("database connected successfully!");
    }
    catch (error) {
        console.log("Error while connecting with databse! ", error.message);
    }
}

export default Connection;
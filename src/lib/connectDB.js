import { MongoClient, ServerApiVersion } from "mongodb";
// import dotenv from "dotenv";
// dotenv.config();


const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;
let db;

export const connectDB = async () => {
    if (db) return db;

    try {
        
        const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.iepmiic.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        db = client.db(DB_NAME)

        return db;
    } catch (error) {
        console.log(error);
    }


}

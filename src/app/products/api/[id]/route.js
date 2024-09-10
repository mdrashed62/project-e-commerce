import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const GET = async (request, { params }) => {
    const db = await connectDB();

    const productsCollection = db.collection('products')

    try {

        const product = await productsCollection.findOne({ _id: new ObjectId(params.id) });
        return Response.json({ product })

    } catch (error) {
        console.log(error);
    }
}
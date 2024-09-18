import { connectDB } from "@/lib/connectDB"

export const GET = async (req) => {
    const db = await connectDB();

    const productsCollection = db.collection('products');

    const { searchParams } = new URL(req.url); // Extract query parameters
    const category = searchParams.get('category'); // Get the category

    try {

        const products = await productsCollection.find({ category: category }).toArray(); // Filter by category
        return Response.json( products )

    } catch (error) {
        console.log(error);
    }
}
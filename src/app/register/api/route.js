import { clientPromise, connectDB } from "@/lib/connectDB"
import bcrypt from "bcrypt";




export const POST = async (request) => {

    const newUser = await request.json()

    try {
        const db = await connectDB();

        const userCollections = db.collection('users')


        const isExist = await userCollections.findOne({ email: newUser.email })
        if (isExist) {
            return Response.json({ message: "User already exist!!!!" }, { status: 304 })
        }

        const hash = bcrypt.hashSync(newUser.password, 14);
        const res = await userCollections.insertOne({ ...newUser, password: hash })

        return Response.json({ message: "User created!", response: res }, { status: 200 })
    } catch (error) {
        return Response.json({ message: "Something went wrong!" }, error, { status: 500 })
    }
}
import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function Handler(req, res) {
    connectDB();

    // if (req.method === "POST") {
    //     const newHotel = new Hotel(req.body);
    //     const result = await newHotel.save();
    //     res.status(201).json({ msg: "Hotel added !", result });
    // }

    try {
        if (req.method === "GET") {
            const hotels = await Hotel.find({ location: req.query.city });
            if (hotels.length > 0) {
                return res.status(200).json({ msg: "Good", hotels });
            }
            const allhotels = await Hotel.find({});
            return res.status(200).json({ msg: "Good", allhotels });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}

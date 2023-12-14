import { MongoClient, ObjectId } from "mongodb"

export default async function handler(req, res) {
    const { method, body, query } = req
    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db()
    const asesores = db.collection("asesor")

    switch (method) {

        case "GET":
            try {
                if (query.id) {
                    // Buscar una universidad específica por id
                    const id = new ObjectId(query.id);
                    const asesor = await asesores.findOne({ _id: id });

                    if (!asesor) {
                        return res.status(404).json({ message: 'asesor no encontrado' });
                    }

                    return res.status(200).json(asesor);
                } else {
                    // Si no se proporciona un id, devolver todas las universidades
                    const result = await asesores.find().toArray();
                    return res.status(200).json(result);
                }
            } catch (error) {
                return res.status(500).json({ message: "Error al buscar asesores", error });
            }

            



    }




}
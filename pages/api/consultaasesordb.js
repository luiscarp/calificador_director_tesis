import { MongoClient } from "mongodb";

export default async function consultaasesordb(req, res) {
    const { method, query } = req;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const asesores = db.collection("asesor");

    switch (method) {
        case "GET":
            try {
                if (query.id) {
                    // Buscar todos los asesores que coincidan con el idUniversidad proporcionado
                    const idUniversidad = query.id;
                    const resultado = await asesores.find({ idUniversidad: idUniversidad }).toArray();

                    if (resultado.length === 0) {
                        return res.status(404).json({ message: 'No se encontraron asesores para la universidad indicada' });
                    }

                    return res.status(200).json(resultado);
                } else {
                    // Si no se proporciona un idUniversidad, devolver todos los asesores
                    const todosLosAsesores = await asesores.find().toArray();
                    return res.status(200).json(todosLosAsesores);
                }
            } catch (error) {
                return res.status(500).json({ message: "Error al buscar asesores", error });
            }
    }
}

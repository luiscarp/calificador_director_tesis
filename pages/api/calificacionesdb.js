import { MongoClient } from "mongodb";

export default async function consultaasesordb(req, res) {
    const { method, query } = req;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const calificaciones = db.collection("calificaciones");

    switch (method) {
        case "GET":
            try {
                if (query.id) {
                    // Buscar todos los asesores que coincidan con el idUniversidad proporcionado
                    const idAsesor = query.id;
                    const resultado = await calificaciones.find({ id_asesor: idAsesor }).toArray();

                    if (resultado.length === 0) {
                        return res.status(404).json({ message: 'No se encontraron calificaciones para este asesor' });
                    }

                    return res.status(200).json(resultado);
                } else {
                    // Si no se proporciona un idUniversidad, devolver todos los asesores
                    const todosLosAsesores = await calificaciones.find().toArray();
                    return res.status(200).json(todosLosAsesores);
                }
            } catch (error) {
                return res.status(500).json({ message: "Error al buscar calificaciones", error });
            }
    }
}

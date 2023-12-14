import { MongoClient } from "mongodb";

export default async function consultaasesordb(req, res) {
    const { method, body, query } = req

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



                    return res.status(200).json(resultado);
                } else {
                    // Si no se proporciona un idUniversidad, devolver todos los asesores
                    const todosLosAsesores = await calificaciones.find().toArray();
                    return res.status(200).json(todosLosAsesores);
                }
            } catch (error) {
                return res.status(500).json({ message: "Error al buscar calificaciones", error });
            }
            break

        case "POST":
            const datacalificacion = {
                id_asesor: body.id_asesor,
                general: body.general,
                problematico: body.problematico,
                interes: body.interes,
                conocimiento: body.conocimiento,
                exigencia: body.exigencia,
                recursos: body.recursos,
                disponibilidad: body.disponibilidad,
                comentario: body.comentario,
                email_user: body.email_user

            }
            try {
                const answer = await calificaciones.insertOne(datacalificacion)
                return res.status(200).json({ message: "Se añadio con exito" })

            } catch (error) {

                return res.status(500).json({ message: "Fallo" })


            }
            break
    }
}

import { MongoClient, ObjectId } from "mongodb"

export default async function handler(req, res) {
    const { method, body, query } = req
    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db()
    const asesores = db.collection("asesor")

    switch (method) {
        case "POST":
            const dataAsesor = {
                nombre: body.nombre,
                universidad: body.universidad,
                idUniversidad: body.idUniversidad,
                temaInv: body.temaInv,
                especialidades: body.especialidades,
                deptoFacultad: body.deptoFacultad

            }
            try {
                const answer = await asesores.insertOne(dataAsesor)
                return res.status(200).json({ message: "Se añadio con exito" })

            } catch (error) {

                return res.status(500).json({ message: "Fallo" })


            }
            break
        case "GET":
            const result = await asesores.find().toArray()
            return res.status(200).json(result)

            break

        case "DELETE":
            try {
                if (!query.id) {
                    return res.status(400).json({ message: "Falta el identificador" });
                }

                const id = new ObjectId(query.id);
                const deleteResult = await asesores.deleteOne({ _id: id });

                if (deleteResult.deletedCount === 0) {
                    return res.status(404).json({ message: "No se encontró el documento con el ID proporcionado" });
                }

                return res.status(200).json({ message: "Documento eliminado con éxito" });
            } catch (error) {
                return res.status(500).json({ message: "Error al eliminar" });
            }
            break;

            case "PUT":
                try {
                    if (!query.id) {
                        return res.status(400).json({ message: "Falta el identificador" });
                    }
    
                    const id = new ObjectId(query.id);
                    const updateData = {
                        nombre: body.nombre,
                        universidad: body.universidad,
                        idUniversidad: body.idUniversidad,
                        temaInv: body.temaInv,
                        especialidades: body.especialidades,
                        deptoFacultad: body.deptoFacultad
                    };
    
                    const updateResult = await asesores.updateOne(
                        { _id: id },
                        { $set: updateData }
                    );
    
                    if (updateResult.matchedCount === 0) {
                        return res.status(404).json({ message: "No se encontró el documento con el ID proporcionado" });
                    }
    
                    return res.status(200).json({ message: "Documento actualizado con éxito" });
                } catch (error) {
                    return res.status(500).json({ message: "Error al actualizar" });
                }
                break;



    }




}
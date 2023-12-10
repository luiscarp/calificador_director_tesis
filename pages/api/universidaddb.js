import {MongoClient} from "mongodb"

export default async function handler(req, res){
    const {method, body, query} = req
    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db()
    const universidades = db.collection("universidad")

    switch (method){
        case "POST":
            const dataUniversidad = {
                nombre: body.nombre,
                ubi: body.ubi

            }
            try {
                const answer = await universidades.insertOne(dataUniversidad)
                return res.status(200).json({message: "Se añadio con exito"})

            } catch (error){

                return res.status(500).json({message: "Fallo"})


            }
            break
        case "GET":
            const result = await universidades.find().toArray()
            return res.status(200).json(result)

            break



    }




}
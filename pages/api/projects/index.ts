import clientPromise from "../../../mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("portfolio");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newProj = await db.collection("projects").insertOne(bodyObject);
      res.json(newProj.ops[0]);
      break;
    case "GET":
      const projects = await db.collection("projects").find({}).toArray();
      res.json({ status: 200, data: projects });
      break;
  }
}
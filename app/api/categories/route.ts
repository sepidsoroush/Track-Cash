import { NextApiRequest, NextApiResponse } from "next";
import { connectMongoDB } from "@/hooks/connection";

export async function GET(res: NextApiResponse) {
  const { Category } = await connectMongoDB();
  const catcher = (error: Error) => res.status(400).json({ error });

  return Response.json(await Category.find({}).catch(catcher));
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const catcher = (error: Error) => res.status(400).json({ error });
  const { Category } = await connectMongoDB();

  return Response.json(await Category.create(req.body).catch(catcher));
}

import { connectDB } from "@/utils/database";
import Prompt from "@/models/Prompt";

const handler = async (req, res) => {
  try {
    await connectDB();

    const prompts = await Prompt.find({}).populate("creator");

    return res.status(200).json(prompts);
  } catch (error) {
    return res.status(500).json("Failed to fetch all prompts");
  }
};

export default handler;

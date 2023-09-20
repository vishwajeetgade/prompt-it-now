// GET (read)

import { connectDB } from "@/utils/database";
import Prompt from "@/models/Prompt";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { id } = req.query;
    try {
      await connectDB();

      const prompt = await Prompt.findById(id).populate("creator");

      if (!prompt) {
        return res.status(404).json("Prompt not found!!");
      }

      return res.status(200).json(prompt);
    } catch (error) {
      return res.status(500).json("Failed to fetch prompt");
    }
  }

  // // PATCH (update)
  if (req.method === "PATCH") {
    const { id } = req.query;
    const { prompt, tag } = req.body;

    try {
      await connectDB();

      const existingPrompt = await Prompt.findById(id).populate("creator");

      if (!existingPrompt) {
        return res.status(404).json("Prompt not found!!");
      }

      existingPrompt.prompt = prompt;
      existingPrompt.tag = tag;

      await existingPrompt.save();
      return res.status(200).json(existingPrompt);
    } catch (error) {
      return res.status(500).json("Failed to update a prompt");
    }
  }

  // // DELETE (delete)
  if (req.method === "DELETE") {
    const { id } = req.query;

    try {
      await connectDB();

      await Prompt.findByIdAndRemove(id);

      return res.status(200).json("Prompt deleted successfully");
    } catch (error) {
      return res.status(500).json("Failed to delete a prompt");
    }
  }
};

export default handler;

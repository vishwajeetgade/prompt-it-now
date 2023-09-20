import { connectDB } from "@/utils/database";
import Prompt from "@/models/Prompt";

const handler = async (req, res) => {
  const { userId, prompt, tag } = req.body;
  console.log("userId", userId);

  try {
    await connectDB();

    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save();

    return res.status(201).json(newPrompt);
    // new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return res.status(500).json("Falied to create a new prompt");
    // return new Response("Falied to create a new prompt", { status: 500 });
  }
};

export default handler;

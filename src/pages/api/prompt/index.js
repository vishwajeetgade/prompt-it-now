import { connectDB } from "@/utils/database";
import Prompt from "@/models/Prompt";
import User from "@/models/User";

const handler = async (req, res) => {
  const { search } = req.query;
  console.log(search, req.query);
  let query = {};
  if (search) {
    query = {
      $or: [
        {
          prompt: {
            $regex: search,
            $options: "i",
          },
        },
        {
          tag: {
            $regex: search,
            $options: "i",
          },
        },
      ],
    };
  }
  try {
    await connectDB();

    // search data by creator id since create us ref in prompt schema
    if (search) {
      const users = await User.find({
        username: {
          $regex: search,
          $options: "i",
        },
      });
      const userIds = [];
      if (users) {
        for (let user of users) {
          userIds.push(user._id);
        }
        query.$or.push({
          creator: {
            $in: userIds,
          },
        });
      }
    }

    const prompts = await Prompt.find(query).populate("creator");

    return res.status(200).json(prompts);
  } catch (error) {
    return res.status(500).json("Failed to fetch all prompts");
  }
};

export default handler;

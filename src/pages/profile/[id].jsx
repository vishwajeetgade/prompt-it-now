import Profile from "@/components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const OthersProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
        
      const response = await fetch(`/api/user/${session?.user.id}/posts`);
      const data = await response.json();
      
      setPosts(data);
    };

    if (session?.user.id) fetchPost();
  }, [session?.user.id]);


  return (
    <Profile
      name={posts[0]?.creator.username}
      desc="Welcome to your personalized profile page"
      data={posts}
    />
  );
};

export default OthersProfile;

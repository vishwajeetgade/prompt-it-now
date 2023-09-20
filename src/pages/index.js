import Feed from "@/components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and Share</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">AI-Powred Prompts</span>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ut
        quisquam quas nisi ad. Delectus laboriosam tempore voluptatum nam nemo
        voluptates sint! Ab impedit minima at dolores quia laboriosam fugiat!
      </p>
      
      <Feed />
    </section>
  );
}

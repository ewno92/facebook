import StoryCard from "./StoryCard";

const Stories = () => {
  const stories = [
    {
      name: "Elon Must",
      src: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg",
      profile:
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg",
    },
    {
      name: "Elon Must",
      src: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg",
      profile:
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg",
    },
    {
      name: "Elon Must",
      src: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg",
      profile:
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg",
    },
  ];

  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
};
export default Stories;

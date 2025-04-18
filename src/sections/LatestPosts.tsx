import type { CollectionEntry } from "astro:content";
import { Card } from "../components/Card";
import { getPostColorFromCategory } from "../utils/postUtils";
import { Tag } from "../components/Tag";
import { CutCornerButton } from "../components/CutCornerButton";

export const LatestPosts = (props: {
  latestPosts: CollectionEntry<"blog">[];
}) => {
  const { latestPosts } = props;
  return (
    <section className="py-60">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-4xl font-black md:text-5xl lg:text-6xl">
            Your portal to everything blockchain.
          </h2>
          <p className="mt-8 text-center text-xl text-zinc-400 lg:text-2xl">
            Keep up with the newest trends, updates, and insights in the
            blockchain world, updated weekly.
          </p>
        </div>
        <div className="mt-16 space-y-8 md:mt-28">
          {latestPosts.map(
            ({ data: { title, description, category } }, index) => (
              <Card
                key={index}
                buttonText="Read More"
                color={getPostColorFromCategory(category)}
                wrapperClassName={`md:even:float-right md:odd:float-left md:w-[calc(50%-16px)] ${index === 1 && "md:pt-7"}`}
              >
                <Tag color={getPostColorFromCategory(category)}>{category}</Tag>
                <h3 className="mt-3 font-heading text-3xl font-black">
                  {title}
                </h3>
                <p className="mt-6 text-lg text-zinc-400">{description}</p>
              </Card>
            ),
          )}
        </div>
        <div className="clear-both"></div>
        <div className="mt-32 flex justify-center">
          <CutCornerButton>Read the Blog</CutCornerButton>
        </div>
      </div>
    </section>
  );
};

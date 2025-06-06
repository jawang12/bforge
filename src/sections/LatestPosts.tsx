import type { CollectionEntry } from "astro:content";
import { Card } from "../components/Card";
import { getPostColorFromCategory } from "../utils/postUtils";
import { Tag } from "../components/Tag";
import { CutCornerButton } from "../components/CutCornerButton";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export const LatestPosts = (props: {
  latestPosts: CollectionEntry<"blog">[];
}) => {
  const { latestPosts } = props;
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const marginY = useTransform(scrollYProgress, [0, 1], [20, 84]);

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
        <motion.div
          className="mt-16 space-y-8 md:mt-28"
          style={{
            marginTop: marginY,
          }}
          ref={targetRef}
        >
          {latestPosts.map(
            ({ data: { title, description, category }, slug }, index) => (
              <a
                href={`/blog/${slug}`}
                key={"latestPost" + index}
                className={`md:w-[calc(50%-16px)] md:odd:float-left md:even:float-right ${index === 1 && "md:pt-7"}`}
              >
                <Card
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  // wrapperClassName={`md:even:float-right md:odd:float-left md:w-[calc(50%-16px)] ${index === 1 && "md:pt-7"}`}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="mt-3 font-heading text-3xl font-black">
                    {title}
                  </h3>
                  <p className="mt-6 text-lg text-zinc-400">{description}</p>
                </Card>
              </a>
            ),
          )}
        </motion.div>
        <div className="clear-both"></div>
        <div className="mt-32 flex justify-center">
          <a href="/blog">
            <CutCornerButton>Read the Blog</CutCornerButton>
          </a>
        </div>
      </div>
    </section>
  );
};

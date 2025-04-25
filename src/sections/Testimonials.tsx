import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The user experience is phenomenal, and the support team is always there to help. Highly recommended!",
    name: "Erica Wyatt",
    title: "Product Manager - BlockLink",
    avatarImage: "/assets/images/avatar-erica-wyatt.jpg",
  },
  {
    text: "Our productivity has skyrocketed since we started using Blockforge. It's a game-changer for our team.",
    name: "Noel Baldwin",
    title: "Product Manager - BlockLink",
    avatarImage: "/assets/images/avatar-noel-baldwin.jpg",
  },
  {
    text: "the integreation process was seamless, and the results were beyod our expectations. The team is incredibly responsive and helpful.",
    name: "Harry Bender",
    title: "CTO - CryptoSolutions",
    avatarImage: "/assets/images/avatar-harry-bender.jpg",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-zinc-800 py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
          {/* {Array.from({ length: 3 }, (_, index) => { */}
          {testimonials.map(({ text, name, title, avatarImage }, index) => {
            return (
              <motion.blockquote
                key={name + index}
                className={index === 2 ? "md:hidden lg:block" : ""}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.3,
                  ease: "easeInOut",
                  duration: 0.7,
                }}
              >
                <p className="font-heading text-3xl font-black lg:text-4xl">
                  &ldquo;{text}&rdquo;
                </p>
                <cite className="mt-8 block">
                  <div className="flex items-center gap-3">
                    <div>
                      <div
                        className="size-16 rounded-full bg-zinc-700 bg-cover"
                        style={{ backgroundImage: `url(${avatarImage})` }}
                      ></div>
                    </div>
                    <div>
                      <div className="text-lg font-black not-italic">
                        {name}
                      </div>
                      <div className="not-italic text-zinc-400">{title}</div>
                    </div>
                  </div>
                </cite>
              </motion.blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
};
